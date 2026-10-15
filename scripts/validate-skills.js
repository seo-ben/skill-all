#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.resolve(__dirname, '../.agents/skills');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const rawYaml = match[1];
  const fields = {};

  let currentKey = null;
  let currentValue = [];

  for (const line of rawYaml.split('\n')) {
    const keyMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      if (currentKey) {
        fields[currentKey] = currentValue.join('\n').trim();
      }
      currentKey = keyMatch[1];
      const val = keyMatch[2].trim();
      if (val === '>' || val === '|') {
        currentValue = [];
      } else {
        currentValue = [val.replace(/^["'](.*)["']$/, '$1')];
      }
    } else if (currentKey && line.startsWith('  ')) {
      currentValue.push(line.trim());
    }
  }
  if (currentKey) {
    fields[currentKey] = currentValue.join('\n').trim();
  }

  return { fields, raw: rawYaml };
}

function findDuplicateBlocks(skillContents, minLines = 20) {
  const duplicates = [];
  const entries = Object.entries(skillContents);

  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const [nameA, linesA] = entries[i];
      const [nameB, linesB] = entries[j];

      // Compare sliding windows of minLines non-empty lines
      const cleanA = linesA.map(l => l.trim()).filter(l => l.length > 0);
      const cleanB = linesB.map(l => l.trim()).filter(l => l.length > 0);

      for (let x = 0; x <= cleanA.length - minLines; x++) {
        const windowA = cleanA.slice(x, x + minLines).join('\n');
        for (let y = 0; y <= cleanB.length - minLines; y++) {
          const windowB = cleanB.slice(y, y + minLines).join('\n');
          if (windowA === windowB) {
            duplicates.push({
              skillA: nameA,
              skillB: nameB,
              sample: cleanA[x] + ' ... ' + cleanA[x + minLines - 1]
            });
            break;
          }
        }
      }
    }
  }
  return duplicates;
}

function validate() {
  console.log('🔍 Validation des compétences dans .agents/skills/\n');
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error(`❌ Dossier introuvable: ${SKILLS_DIR}`);
    process.exit(1);
  }

  const skillDirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  let totalSkills = 0;
  let passedSkills = 0;
  const allFailures = {};
  const skillRawContents = {};

  for (const dirName of skillDirs) {
    totalSkills++;
    const skillPath = path.join(SKILLS_DIR, dirName);
    const skillFile = path.join(skillPath, 'SKILL.md');
    const failures = [];

    if (!fs.existsSync(skillFile)) {
      failures.push('Fichier SKILL.md manquant');
      allFailures[dirName] = failures;
      continue;
    }

    const content = fs.readFileSync(skillFile, 'utf-8');
    const lines = content.split('\n');
    skillRawContents[dirName] = lines;

    // 1. YAML frontmatter valide
    const fm = parseFrontmatter(content);
    if (!fm) {
      failures.push('Frontmatter YAML invalide ou absent');
    } else {
      // 2. name = nom du dossier
      if (fm.fields.name !== dirName) {
        failures.push(`Champ 'name' (${fm.fields.name || 'aucun'}) différent du dossier (${dirName})`);
      }

      // 3. description contenant "Do not use" ou "Ne pas utiliser"
      const desc = fm.fields.description || '';
      if (!desc) {
        failures.push("Description absente du frontmatter");
      } else {
        const hasNegativeConstraint = /do not use|ne pas utiliser/i.test(desc);
        if (!hasNegativeConstraint) {
          failures.push("Description sans clause d'exclusion négative ('Do not use' ou 'Ne pas utiliser')");
        }
      }
    }

    // 4. SKILL.md ≤ 400 lignes
    if (lines.length > 400) {
      failures.push(`Taille excessive: ${lines.length} lignes (> 400 lignes max)`);
    }

    // 5. Chemins relatifs cités existants (SKILL.md, references/ et templates/)
    function checkFileLinks(filePath, relBaseDir) {
      if (!fs.existsSync(filePath)) return;
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const ext = path.extname(filePath).toLowerCase();

      if (ext === '.md') {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let match;
        while ((match = linkRegex.exec(fileContent)) !== null) {
          const target = match[2].trim().split('#')[0].trim();
          if (!target || target.startsWith('http://') || target.startsWith('https://') || target.startsWith('mailto:')) {
            continue;
          }
          let targetPath = target.startsWith('file:///')
            ? target.replace(/^file:\/\//, '')
            : path.resolve(path.dirname(filePath), target);
          if (!fs.existsSync(targetPath)) {
            failures.push(`Lien rompu dans ${path.relative(relBaseDir, filePath)}: '${match[2]}' (introuvable: ${targetPath})`);
          }
        }
      } else if (ext === '.html') {
        const tagRegex = /(?:src|href)=["']([^"']+)["']/g;
        let match;
        while ((match = tagRegex.exec(fileContent)) !== null) {
          const target = match[1].trim().split('#')[0].split('?')[0].trim();
          if (!target || target.startsWith('http://') || target.startsWith('https://') || target.startsWith('data:') || target.startsWith('mailto:')) {
            continue;
          }
          const targetPath = path.resolve(path.dirname(filePath), target);
          if (!fs.existsSync(targetPath)) {
            failures.push(`Asset rompu dans ${path.relative(relBaseDir, filePath)}: '${match[1]}' (introuvable: ${targetPath})`);
          }
        }
      }
    }

    // A. Vérification dans SKILL.md
    checkFileLinks(skillFile, skillPath);

    // B. Vérification récursive dans references/
    const referencesDir = path.join(skillPath, 'references');
    if (fs.existsSync(referencesDir)) {
      const refFiles = fs.readdirSync(referencesDir, { withFileTypes: true });
      for (const ref of refFiles) {
        if (ref.isFile()) {
          checkFileLinks(path.join(referencesDir, ref.name), skillPath);
        }
      }
    }

    // C. Vérification récursive dans templates/
    const templatesDir = path.join(skillPath, 'templates');
    if (fs.existsSync(templatesDir)) {
      function walkDir(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walkDir(fullPath);
          } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.html'))) {
            checkFileLinks(fullPath, skillPath);
          }
        }
      }
      walkDir(templatesDir);
    }

    if (failures.length === 0) {
      passedSkills++;
      console.log(`  ✅ [PASS] ${dirName} (${lines.length} lignes)`);
    } else {
      console.log(`  ❌ [FAIL] ${dirName} (${lines.length} lignes)`);
      failures.forEach(f => console.log(`      - ${f}`));
      allFailures[dirName] = failures;
    }
  }

  // 6. Pas de bloc dupliqué de plus de 20 lignes entre deux skills
  console.log('\n🔎 Analyse des blocs dupliqués (> 20 lignes)...');
  const duplicateBlocks = findDuplicateBlocks(skillRawContents, 20);
  if (duplicateBlocks.length > 0) {
    console.log(`  ❌ ${duplicateBlocks.length} bloc(s) dupliqué(s) détecté(s) :`);
    duplicateBlocks.forEach(d => {
      console.log(`      - Entre '${d.skillA}' et '${d.skillB}' : "${d.sample}"`);
    });
  } else {
    console.log('  ✅ Aucun bloc dupliqué (> 20 lignes) entre deux compétences.');
  }

  console.log('\n=======================================');
  console.log(`Bilan : ${passedSkills}/${totalSkills} compétences validées.`);
  if (Object.keys(allFailures).length > 0 || duplicateBlocks.length > 0) {
    console.log('Statut : ⚠️  Des vérifications ont échoué.');
    process.exit(1);
  } else {
    console.log('Statut : 🎉 Toutes les règles de qualité sont respectées !');
    process.exit(0);
  }
}

validate();
