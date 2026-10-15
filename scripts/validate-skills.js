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
  console.log('🔍 Validating skills in .agents/skills/\n');
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error(`❌ Directory not found: ${SKILLS_DIR}`);
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
      failures.push('Missing SKILL.md file');
      allFailures[dirName] = failures;
      continue;
    }

    const content = fs.readFileSync(skillFile, 'utf-8');
    const lines = content.split('\n');
    skillRawContents[dirName] = lines;

    // 1. YAML frontmatter valide
    const fm = parseFrontmatter(content);
    if (!fm) {
      failures.push('Invalid or missing YAML frontmatter');
    } else {
      // 2. name = nom du dossier
      if (fm.fields.name !== dirName) {
        failures.push(`'name' field (${fm.fields.name || 'none'}) does not match directory name (${dirName})`);
      }

      // 3. description containing negative constraint
      const desc = fm.fields.description || '';
      if (!desc) {
        failures.push("Missing description in frontmatter");
      } else {
        const hasNegativeConstraint = /do not use|ne pas utiliser/i.test(desc);
        if (!hasNegativeConstraint) {
          failures.push("Description missing negative constraint ('Do not use' or 'Ne pas utiliser')");
        }
      }
    }

    // 4. SKILL.md ≤ 400 lines
    if (lines.length > 400) {
      failures.push(`Excessive length: ${lines.length} lines (> 400 lines max)`);
    }

    // 5. Relative paths exist (SKILL.md, references/ and templates/)
    function getLineNumber(text, index) {
      return text.slice(0, index).split('\n').length;
    }

    function checkFileLinks(filePath, relBaseDir) {
      if (!fs.existsSync(filePath)) return;
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const ext = path.extname(filePath).toLowerCase();
      const relFile = path.relative(relBaseDir, filePath);

      // A. Markdown links [label](target)
      if (ext === '.md') {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let match;
        while ((match = linkRegex.exec(fileContent)) !== null) {
          const rawTarget = match[2].trim();
          const line = getLineNumber(fileContent, match.index);
          if (rawTarget.startsWith('file:///')) {
            failures.push(`Non-portable 'file:///' link forbidden in ${relFile} (line ${line}): '${rawTarget}'`);
            continue;
          }
          const target = rawTarget.split('#')[0].trim();
          if (!target || target.startsWith('http://') || target.startsWith('https://') || target.startsWith('mailto:')) {
            continue;
          }
          const targetPath = path.resolve(path.dirname(filePath), target);
          if (!fs.existsSync(targetPath)) {
            failures.push(`Broken link in ${relFile} (line ${line}): '${match[2]}' (not found: ${targetPath})`);
          }
        }
      }

      // B. HTML tags src="..." and href="..."
      if (ext === '.html') {
        const tagRegex = /(?:src|href)=["']([^"']+)["']/g;
        let match;
        while ((match = tagRegex.exec(fileContent)) !== null) {
          const rawTarget = match[1].trim();
          const line = getLineNumber(fileContent, match.index);
          if (rawTarget.startsWith('file:///')) {
            failures.push(`Non-portable 'file:///' link forbidden in ${relFile} (line ${line}): '${rawTarget}'`);
            continue;
          }
          const target = rawTarget.split('#')[0].split('?')[0].trim();
          if (!target || target.startsWith('http://') || target.startsWith('https://') || target.startsWith('data:') || target.startsWith('mailto:')) {
            continue;
          }
          const targetPath = path.resolve(path.dirname(filePath), target);
          if (!fs.existsSync(targetPath)) {
            failures.push(`Broken HTML asset in ${relFile} (line ${line}): '${rawTarget}' (not found: ${targetPath})`);
          }
        }
      }

      // C. CSS url(...) detection (in .css or <style> blocks in .html)
      if (ext === '.css' || ext === '.html') {
        const cssUrlRegex = /url\(\s*['"]?([^'")]+)['"]?\s*\)/g;
        let match;
        while ((match = cssUrlRegex.exec(fileContent)) !== null) {
          const rawTarget = match[1].trim();
          const line = getLineNumber(fileContent, match.index);
          if (rawTarget.startsWith('file:///')) {
            failures.push(`Non-portable 'file:///' link forbidden in ${relFile} (line ${line}): '${rawTarget}'`);
            continue;
          }
          const target = rawTarget.split('#')[0].split('?')[0].trim();
          if (!target || target.startsWith('http://') || target.startsWith('https://') || target.startsWith('data:') || target.startsWith('mailto:')) {
            continue;
          }
          const targetPath = path.resolve(path.dirname(filePath), target);
          if (!fs.existsSync(targetPath)) {
            failures.push(`Broken CSS url() asset in ${relFile} (line ${line}): '${rawTarget}' (not found: ${targetPath})`);
          }
        }
      }

      // D. JS asset path strings detection (.js or <script> blocks)
      function checkJsAssets(jsCode, baseOffset = 0) {
        const jsAssetRegex = /['"]([^'"\s]+?\.(?:jpg|jpeg|png|webp|glb|gltf|hdr))['"]/gi;
        let match;
        while ((match = jsAssetRegex.exec(jsCode)) !== null) {
          const rawTarget = match[1].trim();
          const line = getLineNumber(fileContent, baseOffset + match.index);
          if (rawTarget.startsWith('file:///')) {
            failures.push(`Non-portable 'file:///' link forbidden in ${relFile} (line ${line}): '${rawTarget}'`);
            continue;
          }
          const target = rawTarget.split('#')[0].split('?')[0].trim();
          if (!target || target.startsWith('http://') || target.startsWith('https://') || target.startsWith('data:')) {
            continue;
          }
          const targetPath = path.resolve(path.dirname(filePath), target);
          if (!fs.existsSync(targetPath)) {
            failures.push(`Broken JS asset in ${relFile} (line ${line}): '${rawTarget}' (not found: ${targetPath})`);
          }
        }
      }

      if (ext === '.js') {
        checkJsAssets(fileContent, 0);
      } else if (ext === '.html') {
        const scriptBlockRegex = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
        let scriptMatch;
        while ((scriptMatch = scriptBlockRegex.exec(fileContent)) !== null) {
          checkJsAssets(scriptMatch[1], scriptMatch.index);
        }
      }
    }

    // A. SKILL.md
    checkFileLinks(skillFile, skillPath);

    // B. references/
    const referencesDir = path.join(skillPath, 'references');
    if (fs.existsSync(referencesDir)) {
      const refFiles = fs.readdirSync(referencesDir, { withFileTypes: true });
      for (const ref of refFiles) {
        if (ref.isFile()) {
          checkFileLinks(path.join(referencesDir, ref.name), skillPath);
        }
      }
    }

    // C. templates/
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
      console.log(`  ✅ [PASS] ${dirName} (${lines.length} lines)`);
    } else {
      console.log(`  ❌ [FAIL] ${dirName} (${lines.length} lines)`);
      failures.forEach(f => console.log(`      - ${f}`));
      allFailures[dirName] = failures;
    }
  }

  // 6. No duplicate blocks > 20 lines between two skills
  console.log('\n🔎 Checking for duplicate blocks (> 20 lines)...');
  const duplicateBlocks = findDuplicateBlocks(skillRawContents, 20);
  if (duplicateBlocks.length > 0) {
    console.log(`  ❌ ${duplicateBlocks.length} duplicate block(s) detected:`);
    duplicateBlocks.forEach(d => {
      console.log(`      - Between '${d.skillA}' and '${d.skillB}': "${d.sample}"`);
    });
  } else {
    console.log('  ✅ No duplicate blocks (> 20 lines) found between skills.');
  }

  console.log('\n=======================================');
  console.log(`Summary: ${passedSkills}/${totalSkills} skills validated.`);
  if (Object.keys(allFailures).length > 0 || duplicateBlocks.length > 0) {
    console.log('Status: ⚠️  Some checks failed.');
    process.exit(1);
  } else {
    console.log('Status: 🎉 All quality rules passed!');
    process.exit(0);
  }
}

validate();
