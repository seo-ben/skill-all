# Skill-All

> Collection de compétences (skills) modulaires pour agents IA, dédiée au design d'interface, à la typographie, aux expériences 3D spatiales et au mouvement cinétique.

---

<!-- Emplacement pour enregistrement / GIF de prévisualisation -->
<!-- Remplacer par une capture vidéo/GIF réelle lors de la publication -->
<!-- <p align="center"><img src="docs/assets/preview.gif" alt="Démonstration de l'interface Skill-All" width="100%" /></p> -->

---

## Présentation

Skill-All fournit des ensembles d'instructions prêts pour la production, calibrés pour les agents de programmation IA. Au lieu de générer des interfaces répétitives au style arbitraire, les agents équipés de ces compétences appliquent des systèmes de design structurés, des échelles typographiques modulaires, des fallbacks accessibles en cas d'absence de WebGL et des chorégraphies de scroll réversibles sous GSAP.

Le dépôt regroupe :

* **6 compétences originales** spécialisées en design d'interface, typographie, animation et développement 3D.
* **1 moteur de design système intégré** (`ui-ux-pro-max`).
* **Des écosystèmes tiers de référence** regroupés sous `third-party/`, chacun documenté avec sa source et sa licence.

---

## Compétences Originales

Toutes les compétences originales sont situées dans [`.agents/skills/`](./.agents/skills/) :

| Compétence | Objectif | Règles Clés |
| :--- | :--- | :--- |
| **[`3d-web-experience`](./.agents/skills/3d-web-experience/)** | Expériences web 3D spatiales avec Three.js & GSAP | Géométrie vectorielle réelle, 6 templates complets, repli WebGL en `try/catch`, support de `prefers-reduced-motion`. |
| **[`design-direction`](./.agents/skills/design-direction/)** | Design d'interface haut de gamme pour produits | Équilibre rigueur produit et impact visuel ; palettes harmonisées, espacements spatiaux, élévations. |
| **[`innovative-design`](./.agents/skills/innovative-design/)** | Exploration visuelle radicale par la typographie | 10 directions typographiques pures (A à J) dérivées du sujet, sans clichés SaaS. |
| **[`motion-gsap`](./.agents/skills/motion-gsap/)** | Animations web 60 fps et ScrollTrigger | Timelines synchronisées au scroll, révélations progressives, micro-interactions, branche reduced-motion complète. |
| **[`design-audit`](./.agents/skills/design-audit/)** | Audit visuel systématique des interfaces | Analyse de la hiérarchie visuelle, des espacements, du contraste typographique et de l'accessibilité. |
| **[`typography`](./.agents/skills/typography/)** | Systèmes typographiques professionnels pour écrans | Échelles modulaires, combinaisons de polices, ponctuation soignée, alignement optique. |

---

## Choisir entre `design-direction` et `innovative-design`

Ces deux compétences incarnent deux approches complémentaires de la direction artistique et ne doivent pas être chargées en même temps :

* **Utilisez [`design-direction`](./.agents/skills/design-direction/)** pour concevoir des applications web ou mobiles fonctionnelles (SaaS, fintech, e-commerce, tableaux de bord) où les conventions d'usage, les composants interactifs et la rigueur transactionnelle doivent s'allier à une identité visuelle soignée.
* **Utilisez [`innovative-design`](./.agents/skills/innovative-design/)** pour des explorations créatives, des lancements éditoriaux ou des vitrines de marque où vous recherchez une identité graphique originale menée par la typographie pure, sans emprunt aux modèles conventionnels du web contemporain.

Si les deux approches semblent pertinentes, choisissez celle qui correspond à votre priorité : utilité produit (`design-direction`) ou originalité créative (`innovative-design`).

---

## Générateur d'Expériences 3D

La compétence `3d-web-experience` inclut 6 templates complets et exécutables, ainsi qu'un outil CLI d'échafaudage :

### Les 6 Templates Disponibles

1. **`fintech`** (`fintech-mobile-spatial`) : Vitrine pour application mobile financière avec pods architecturaux en stade et scrollytelling CSS 3D.
2. **`sneakers`** (`sneaker-configurator`) : Configurateur de chaussure 3D avec orbite libre, boutons d'angles et chorégraphie au scroll.
3. **`agency`** (`agency-creative`) : Portfolio d'agence studio avec cristal chromatique en lévitation et typographie fluide.
4. **`tech`** (`tech-futuristic`) : Noyau quantique haute densité avec anneaux gyroscopiques concentriques et télémétrie HUD.
5. **`hair-beauty`** (`beauty-hair-flow`) : Sérum de soin capillaire avec physique de goutte d'huile et rubans de soie 3D.
6. **`fashion`** (`fashion-lookbook`) : Lookbook éditorial haute couture avec simulation de drapé textile paramétrique 3D.

### Utilisation du Générateur CLI

Depuis la racine du dépôt :

```bash
# Lister les templates disponibles
node .agents/skills/3d-web-experience/scripts/scaffold-3d.js --list

# Générer un projet autonome à partir d'un preset
node .agents/skills/3d-web-experience/scripts/scaffold-3d.js --preset fintech --out ./mon-site-fintech

# Prévisualiser localement
cd ./mon-site-fintech
npx serve .
# Ou : python3 -m http.server 3000
```

---

## Ressources Tierces

Les dépendances et dépôts tiers de référence sont conservés sous [`third-party/`](./third-party/) sans modification de leur code source :

* **`third-party/bencium-marketplace`** (Licence MIT, bencium.io)
* **`third-party/aas-core-skills`** (MIT / CC BY 4.0, sickn33)
* **`third-party/anthropic-skills`** (Licences mixtes : Apache 2.0 et propriétaire source-available pour les skills bureautiques, Anthropic PBC)
* **`third-party/awesome-agent-skills`** (Apache 2.0 déclarée, skillcreatorai)
* **`third-party/vercel-skills-cli`** (Licence MIT, Vercel Inc.)
* **`.agents/skills/ui-ux-pro-max`** (Licence MIT, Next Level Builder) : moteur d'évaluation de styles et de design systems.

Pour consulter le texte intégral des licences, la provenance de chaque dossier et les conditions applicables aux compétences Anthropic, reportez-vous à [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) et aux fichiers `SOURCE.md` de chaque répertoire.

---

## Installation

### Installation Manuelle

Copiez les compétences souhaitées depuis `.agents/skills/` dans votre environnement de travail :

```bash
# Installation locale dans un projet (emplacement standard)
mkdir -p ./mon-projet/.agents/skills
cp -r .agents/skills/3d-web-experience ./mon-projet/.agents/skills/
cp -r .agents/skills/design-direction ./mon-projet/.agents/skills/

# Ou installation globale pour Claude Code / outils compatibles
mkdir -p ~/.claude/skills
cp -r .agents/skills/3d-web-experience ~/.claude/skills/
```

### Utilisation de la CLI Skills

Si vous utilisez la CLI `skills` de Vercel Labs :

```bash
# Installer une compétence depuis un chemin local
npx skills add ./.agents/skills/3d-web-experience

# Ou installer directement depuis GitHub
npx skills add https://github.com/seo-ben/skill-all --skill 3d-web-experience
```

---

## Licence

* Le contenu original du dépôt est distribué sous [Licence MIT](./LICENSE) © 2026 SEWONET.
* Les composants tiers conservent leurs licences respectives documentées dans [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
