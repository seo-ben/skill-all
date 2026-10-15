# 📋 Rapport d'Audit Initial — Monorepo `skill-all`
**Date** : 15 Octobre 2026  
**Branche** : `refactor/skills-reorg`  
**Statut** : Étape 0 complétée

---

## 1. Inventaire des dossiers et compétences

### 1.1 Dossiers à la racine
| Dossier | Description & Rôle | Statut / Observation |
| :--- | :--- | :--- |
| **`aas-core-skills/`** | Catalogue de compétences communautaires (2 690+ skills) | Dossier tiers externe (AAS Core) |
| **`anthropic-skills/`** | Moteurs de documents officiels Anthropic (`docx`, `pdf`, `pptx`, `xlsx`) | Dossier tiers externe |
| **`awesome-agent-skills/`** | Recettes d'automatisation et playbooks | Dossier tiers externe |
| **`vercel-skills-cli/`** | Moteur CLI universel de Vercel Labs | Dossier tiers externe |
| **`bencium-marketplace/`** | 17 compétences UX, design et architecture | **Dépôt Git imbriqué** (problème gitlink 160000) |
| **`ui-ux-pro-max/`** | Intelligence de design système (v2.13.0) | **Doublon obsolète** de `ui-ux-pro-max-skill` |
| **`ui-ux-pro-max-skill/`** | Dépôt source complet de UI/UX Pro Max (v2.15.0) | **Dépôt Git imbriqué** (problème gitlink 160000) |
| **`ultra-3d-web-experience/`** | Moteur 3D avec templates (`fintech`, `sneakers`, etc.) et script CLI | À consolider dans `.agents/skills/3d-web-experience` |
| **`stride-lab/`** | Démo 3D sneaker cinétique (Three.js + GSAP) | Non documenté à l'origine |
| **`tranmoney/`** | Vitrine FinTech 3D spatiale (Dipa Inhouse, 11 assets) | Non documenté à l'origine |
| **`assets/`** (racine) | Visuels sneaker | **Doublon exact** de `stride-lab/assets/` |
| **`index.html`** (racine) | Page web de démo sneaker | **Doublon exact** de `stride-lab/index.html` |
| **`mon-projet-fintech/`** | Résultat du test CLI de scaffolding | Ignoré dans `.gitignore` |

### 1.2 Dossiers dans `.agents/skills/`
| Compétence | Description actuelle | Action prévue |
| :--- | :--- | :--- |
| **`bencium-controlled-ux-designer/`** | UX contrôlé, standard d'entreprise, protocoles | Fusionner avec impact → `design-direction` |
| **`bencium-impact-designer/`** | Frontend designer d'impact, anti-slop, 3D | Fusionner avec controlled → `design-direction` |
| **`bencium-innovative-ux-designer/`** | 10 directions typographiques sans inspiration externe | Renommer & isoler → `innovative-design` |
| **`ultra-3d-web-experience/`** | Moteur 3D spatial (Awwwards level) | Renommer & intégrer templates → `3d-web-experience` |
| **`typography/`** | Règles typographiques professionnelles | Inchangé |
| **`design-audit/`** | Audit visuel et plan d'implémentation | Inchangé |
| **`ui-ux-pro-max/`** | Moteur de design systems (79 styles, 192 palettes) | Inchangé (déjà aligné sur v2.15.0) |

---

## 2. Analyse des dépôts imbriqués / sous-modules

### Constat technique :
La commande `git submodule status` a échoué avec l'erreur :
```text
fatal: no submodule mapping found in .gitmodules for path 'bencium-marketplace'
No .gitmodules file
```

### Diagnostic :
* `bencium-marketplace/` contient son propre dossier `.git/` pointant vers `https://github.com/bencium/bencium-marketplace.git`.
* `ui-ux-pro-max-skill/` contient son propre dossier `.git/` pointant vers `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git`.
* **Problème** : Dans le dépôt parent `skill-all`, ils ont été ajoutés sous le mode `160000` (gitlink), mais **aucun fichier `.gitmodules` n'existe**. Git les voit donc comme des dépôts imbriqués orphelins, ce qui peut créer des anomalies lors des clones ou pulls par des tiers.

### Proposition pour l'Étape 7 :
* **Option A** : Déclarer proprement les sous-modules dans un fichier `.gitmodules` officiel.
* **Option B** : Retirer leur dossier `.git` interne pour les intégrer directement comme dossiers standards sous `third-party/`.

---

## 3. Analyse des doublons : `ui-ux-pro-max`

Une comparaison approfondie (`diff -r`) révèle :
1. **`ui-ux-pro-max` (racine)** est en **version 2.13.0**.
2. **`ui-ux-pro-max-skill` (racine)** est en **version 2.15.0** (plus récente : supporte 23 plateformes au lieu de 21, nouveaux templates `amazonq` et `openclaw`, 79 styles au lieu de 84 non validés).
3. **`.agents/skills/ui-ux-pro-max`** est **strictement identique** (`0 diff`) à `ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max`.

**Conclusion** : Le dossier `ui-ux-pro-max` à la racine est un reliquat obsolète. `ui-ux-pro-max-skill` contient la source la plus à jour.

---

## 4. Analyse des éléments non documentés (`stride-lab`, `tranmoney`, `index.html`)

1. **`stride-lab/`** :
   * Vitrine complète 3D interactive pour sneaker de luxe (Three.js, GSAP ScrollTrigger, typographie Syne / Plus Jakarta Sans).
   * Contient son propre `index.html` (53 Ko) et ses visuels (`assets/`).
2. **`index.html` et `assets/` à la racine** :
   * Une comparaison par hash / byte-for-byte confirme que `index.html` à la racine est une **copie miroir exacte à 100%** de `stride-lab/index.html`.
   * Le dossier `assets/` à la racine est une **copie miroir exacte** de `stride-lab/assets/`.
   * Ce sont des doublons orphelins à la racine qui polluent la vue du dépôt.
3. **`tranmoney/`** :
   * Vitrine FinTech 3D complète (Dipa Inhouse, pods ovales, scrollytelling 3D vectoriel, laser QR temps réel).
   * Sert de référence de test et de source pour le template `ultra-3d-web-experience/templates/fintech-mobile-spatial/`.

---

## 5. Prochaines étapes

* Attente de validation de l'Étape 0 par l'utilisateur.
* Dès accord : exécution de l'Étape 1 (préparation de l'arborescence cible `.agents/skills/`) et de l'Étape 2 (fusion `bencium-impact-designer` + `bencium-controlled-ux-designer` vers `design-direction`).
