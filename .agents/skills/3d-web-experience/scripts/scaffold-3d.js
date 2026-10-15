#!/usr/bin/env node

/**
 * 3D WEB EXPERIENCE — PROJECT SCAFFOLDER CLI
 * 
 * Usage:
 *   node scaffold-3d.js --preset <agency|tech|sneakers|hair-beauty|fashion> --out <dest_folder>
 * 
 * Examples:
 *   node scaffold-3d.js --preset sneakers --out ./my-sneaker-store
 *   node scaffold-3d.js --preset agency --out ./my-creative-agency
 */

import { existsSync, mkdirSync, copyFileSync, writeFileSync, cpSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PRESET_MAP = {
  'fintech': {
    name: 'Mobile FinTech & Neobank 3D Spatial Experience',
    template: 'fintech-mobile-spatial',
    description: 'High-performance mobile money showcase with architectural oval stage pods, multi-planar Z-space, live QR laser scanner, sonar radar pings, and banked 3D scrollytelling.'
  },
  'agency': {
    name: 'Creative & Design Agency 3D Experience',
    template: 'agency-creative',
    description: 'Studio portfolio with floating chromatic crystal, kinetic typography, and magnetic cursor.'
  },
  'tech': {
    name: 'Deep Tech & AI Quantum Core',
    template: 'tech-futuristic',
    description: 'Futuristic 3D quantum core with expanding gyroscope rings, cyber grid, and telemetry HUD.'
  },
  'sneakers': {
    name: 'Luxury 3D Sneaker Showcase & Configurator',
    template: 'sneaker-configurator',
    description: '360° interactive shoe viewer with bidirectional exploded view on scroll and live colorway switcher.'
  },
  'hair-beauty': {
    name: 'Haircare, Beauty & Luxury Cosmetics 3D Flow',
    template: 'beauty-hair-flow',
    description: 'Translucent glass serum dropper with fluid physics and 3D silk ribbons mimicking hair fiber.'
  },
  'fashion': {
    name: 'Haute Couture & Luxury Apparel 3D Lookbook',
    template: 'fashion-lookbook',
    description: 'Dark editorial lookbook with parametric 3D cloth drape simulation and vertex wave dynamics.'
  }
};

function parseArgs() {
  const args = process.argv.slice(2);
  let preset = 'sneakers';
  let outDir = './generated-3d-site';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--preset' || args[i] === '-p') {
      preset = args[i + 1];
      i++;
    } else if (args[i] === '--out' || args[i] === '-o') {
      outDir = args[i + 1];
      i++;
    } else if (args[i] === '--list' || args[i] === '-l') {
      console.log('\nAvailable 3D Presets:');
      Object.entries(PRESET_MAP).forEach(([key, info]) => {
        console.log(`  - ${key.padEnd(14)} : ${info.name}`);
        console.log(`    ${info.description}`);
      });
      process.exit(0);
    }
  }

  return { preset, outDir };
}

function main() {
  const { preset, outDir } = parseArgs();

  const presetInfo = PRESET_MAP[preset];
  if (!presetInfo) {
    console.error(`❌ Erreur: Preset inconnu "${preset}".`);
    console.error(`Choix valides: ${Object.keys(PRESET_MAP).join(', ')}`);
    console.error(`Exécutez "node scaffold-3d.js --list" pour afficher les détails.`);
    process.exit(1);
  }

  const templatesDir = resolve(__dirname, '../templates');
  const templateDir = join(templatesDir, presetInfo.template);
  const sourceFile = join(templateDir, 'index.html');
  const sourceAssets = join(templateDir, 'assets');
  const targetDir = resolve(process.cwd(), outDir);
  const targetFile = join(targetDir, 'index.html');

  if (!existsSync(sourceFile)) {
    console.error(`❌ Template source introuvable: ${sourceFile}`);
    process.exit(1);
  }

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  copyFileSync(sourceFile, targetFile);

  if (existsSync(sourceAssets)) {
    const targetAssets = join(targetDir, 'assets');
    cpSync(sourceAssets, targetAssets, { recursive: true });
  }

  // Generate package.json for zero-config previewing
  const pkgJson = {
    name: `3d-${preset}-site`,
    version: "1.0.0",
    description: presetInfo.description,
    scripts: {
      "start": "npx serve .",
      "dev": "npx serve ."
    }
  };
  writeFileSync(join(targetDir, 'package.json'), JSON.stringify(pkgJson, null, 2));

  console.log('\n======================================================');
  console.log(`EXPÉRIENCE 3D GÉNÉRÉE AVEC SUCCÈS !`);
  console.log(`======================================================`);
  console.log(`📦 Preset   : ${presetInfo.name}`);
  console.log(`📁 Dossier  : ${targetDir}`);
  console.log(`📄 Fichier  : ${targetFile}`);
  console.log('\n🚀 Pour prévisualiser immédiatement dans votre navigateur :');
  console.log(`   cd ${outDir}`);
  console.log(`   npx serve .`);
  console.log(`   (ou ouvrez simplement index.html dans votre navigateur)`);
  console.log('======================================================\n');
}

main();
