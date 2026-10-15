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

## 2. Analyse des dépôts imbriqués / sous-modules (Gitlinks 160000)

### Constat technique :
La commande `git submodule status` a échoué avec l'erreur :
```text
fatal: no submodule mapping found in .gitmodules for path 'bencium-marketplace'
No .gitmodules file
```
Dans l'index git, `bencium-marketplace` et `ui-ux-pro-max-skill` étaient enregistrés sous le mode `160000` (gitlink) sans fichier `.gitmodules`.

### Détails d'origine, commits et licences :

#### A. `bencium-marketplace`
* **URL d'origine (git remote)** : `https://github.com/bencium/bencium-marketplace.git`
* **Commit courant** : `5de46a39b4640fa419560cd0b67e4c4b50dac802`
* **Texte de la licence trouvée** : `MIT License`
```text
MIT License

Copyright (c) 2026 bencium.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
* **Statut de redistribution** : **Autorisée** (Licence MIT standard). Conforme aux consignes, son `.git/` sera purgé et le contenu sera logé dans `third-party/bencium-marketplace/` avec un fichier `SOURCE.md`.

#### B. `ui-ux-pro-max-skill`
* **URL d'origine (git remote)** : `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git`
* **Commit courant** : `616663179c5f9b5e2b3e07cab23ac9cad76378f3`
* **Texte de la licence trouvée** : `MIT License`
```text
MIT License

Copyright (c) 2024 Next Level Builder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
* **Statut et destination** : Retiré de l'index (`git rm --cached`), archivé dans `_archive/ui-ux-pro-max-skill` sans son `.git`, et référencé dans `THIRD_PARTY_NOTICES.md`. La version canonique conservée et active est `.agents/skills/ui-ux-pro-max` (v2.15.0).

---

## 3. Analyse des doublons : `ui-ux-pro-max`

Une comparaison approfondie (`diff -r`) révèle :
1. **`ui-ux-pro-max` (racine)** est en **version 2.13.0**.
2. **`ui-ux-pro-max-skill` (racine)** est en **version 2.15.0** (plus récente : supporte 23 plateformes au lieu de 21, nouveaux templates `amazonq` et `openclaw`, 79 styles au lieu de 84 non validés).
3. **`.agents/skills/ui-ux-pro-max`** est **strictement identique** (`0 diff`) à `ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max`.

**Conclusion** : Le dossier `ui-ux-pro-max` à la racine est un reliquat obsolète. `ui-ux-pro-max-skill` contient la source la plus à jour.

---

## 4. Analyse des éléments non documentés (`stride-lab`, `tranmoney`, `index.html`)

1. **`stride-lab/` vs `ultra-3d-web-experience/templates/sneaker-configurator/`** :
   * Une comparaison approfondie (`diff -rq`) montre qu'ils **ne sont pas identiques** :
     - `stride-lab/` possède une télémétrie HUD avancée (1665 lignes), des textes éditoriaux en français, les polices Syne / Plus Jakarta Sans, un fichier `README.md` et des textures spécifiques (`knit-detail.jpg`, etc.).
     - `templates/sneaker-configurator/` est un template générique condensé en anglais (820 lignes).
   * **Action appliquée** : Déplacement de `stride-lab/` vers `demos/stride-lab/` pour préserver cette démo 3D fonctionnelle sans encombrer la racine.

2. **`index.html` et `assets/` à la racine & GitHub Pages** :
   * Vérification GitHub Pages : `curl https://api.github.com/repos/seo-ben/skill-all/pages` renvoie **404 Not Found** (GitHub Pages n'est pas activé sur ce dépôt).
   * Une comparaison par hash confirme que `index.html` et `assets/` à la racine sont des **copies miroirs exactes à 100%** de `stride-lab/`.
   * **Action appliquée** : Déplacement dans `_archive/root-assets/` et `_archive/index.html`.

3. **`tranmoney/` vs `ultra-3d-web-experience/templates/fintech-mobile-spatial/`** :
   * Une comparaison approfondie (`diff -rq`) confirme que le code HTML/JS/CSS et l'ensemble des 11 visuels sont **100% identiques**.
   * Seul le fichier `README.md` était présent dans `tranmoney/`.
   * **Action appliquée** : Copie du `README.md` vers le template source, puis archivage de `tranmoney/` dans `_archive/tranmoney/`.

---

## 5. Synthèse des actions de l'Étape 0.5 (Préparation & Assainissement)

1. `bencium-marketplace` : Licence MIT (redistribution autorisée), purge du dossier `.git/`, transfert dans `third-party/bencium-marketplace/` avec `SOURCE.md`.
2. `ui-ux-pro-max-skill` : `git rm --cached`, transfert dans `_archive/ui-ux-pro-max-skill/` (sans `.git`), tracé dans `THIRD_PARTY_NOTICES.md`.
3. `ui-ux-pro-max` (v2.13.0 racine) : Déplacement vers `_archive/ui-ux-pro-max/`.
4. `index.html` et `assets/` (racine) : Déplacement vers `_archive/`.
5. `stride-lab/` : Déplacement vers `demos/stride-lab/`.
6. `tranmoney/` : Déplacement vers `_archive/tranmoney/`.
