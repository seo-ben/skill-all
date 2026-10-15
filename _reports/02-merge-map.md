# 🗺️ Tableau de Fusion (Merge Map) : `bencium-impact-designer` + `bencium-controlled-ux-designer` → `design-direction`

**Date** : 15 Octobre 2026  
**Branche** : `refactor/skills-reorg`  
**Objectif** : Fusionner les deux compétences sans perdre aucune règle unique, résoudre les contradictions par des préférences par défaut avec exceptions contextuelles, et modéliser l'architecture progressive (`SKILL.md` < 350 lignes + fichiers sous `references/`).

---

## 1. Vue d'ensemble comparative

| Métrique | `bencium-impact-designer` | `bencium-controlled-ux-designer` | `design-direction` (Cible) |
| :--- | :--- | :--- | :--- |
| **Lignes de `SKILL.md`** | 966 lignes | 804 lignes | **< 350 lignes** (Synthèse exécutive) |
| **Fichiers annexes** | 3 fichiers (`ACCESSIBILITY`, `MOTION-SPEC`, `RESPONSIVE-DESIGN`) | 4 fichiers (+ `DESIGN-SYSTEM-TEMPLATE`) | **8 fichiers** sous `references/` |
| **Philosophie dominante** | Audace visuelle, anti-slop, différenciation agressive | Rigueur d'entreprise, design plat/minimal, accessibilité stricte | **Direction de design contextuelle** : rigueur + audace maîtrisée |
| **Lignes partagées** | ~480 lignes strictement identiques (exemples, checklist, formulaires, etc.) | ~480 lignes | Dédupliquées dans les modules de référence |

---

## 2. Tableau d'analyse Section par Section

| Section / Thème | Statut | Analyse & Contenu spécifique | Décision & Destination cible |
| :--- | :--- | :--- | :--- |
| **Frontmatter & Description** | **Différent** | Impact se concentre sur l'effet « wow » et l'anti-générique. Controlled se positionne sur le standard enterprise et le contrôle UX. | **`SKILL.md`** : Frontmatter standardisé avec critères de déclenchement explicites, cas d'exclusion (« Ne pas utiliser pour… ») et clause de désambiguïsation avec `innovative-design`. |
| **Core Philosophy: Competitive Intelligence Engine** | **Identique** (avec besoin de reformulation) | Protocole en 5 étapes rigide imposant un benchmark web temps réel du top 1% mondial. | **`SKILL.md`** : Conservé dans le protocole en 5 étapes, mais **assoupli** : benchmark web si accès réseau ou si l'utilisateur fournit des URLs ; sinon repli explicite sur les connaissances sectorielles de l'agent. |
| **Foundational Design Principles: Stand Out** | **Différent** | Impact impose de briser les conventions SaaS. Controlled met l'accent sur la clarté et l'utilisabilité. | **`SKILL.md`** : Synthétisé dans les principes fondamentaux. |
| **Creative Reframing Prompts** | **Unique à Impact** | Métaphores de conception créatives (The Museum Wall, The Boutique Hotel, The Brutalist Editorial, etc.). | **`references/layout.md`** et **`references/examples.md`** : Préservé intégralement pour stimuler la créativité. |
| **Force Variety (Anti-Sameness Protocol)** | **Unique à Impact** | Règles pour forcer la variété typographique, chromatique et structurelle entre les générations. | **`SKILL.md`** (règle clé anti-convergence) et **`references/color-and-contrast.md`**. |
| **Core Design Philosophy** | **Différent** | Impact prône la posture audacieuse. Controlled prône la clarté fonctionnelle et le feedback immédiat. | **`SKILL.md`** : Fusionné en un équilibre : fonction d'abord, expression affirmée ensuite. |
| **What This Means in Practice** | **Identique** | Formulations pratiques de l'approche design. | **`SKILL.md`** : Condensé en 5 commandements opérationnels. |
| **Design Decision Checklist** | **Différent** | Impact ajoute un critère d'unicité et de non-convergence. Controlled lie au template design system. | **`SKILL.md`** : Checklist finale unifiée à 7 points. |
| **Visual Design: Color & Contrast** | **Différent / Contradictoire** | Controlled : « Éviter le bleu SaaS sauf si marque ». Impact : « JAMAIS de bleu SaaS ni de dégradé violet sur blanc ». | **`references/color-and-contrast.md`** : Éviter par défaut les palettes SaaS clichés (#3B82F6, gradients pourpres) ; autoriser l'exception si imposé par l'identité de marque existante. |
| **Visual Design: Typography Excellence** | **Différent / Contradictoire** | Impact bannit Inter, Roboto, Space Grotesk. Controlled recommande d'adapter à la marque. | **`references/typography.md`** : Règle par défaut : éviter les polices banalisées (Inter, Roboto) pour le display et privilégier des fontes à forte identité ; exception pour le body text où la lisibilité prime, ou charte imposée. |
| **Visual Design: Layout & Spatial Design** | **Identique** | Grilles 8pt, espacements généreux, hiérarchie visuelle claire. | **`references/layout.md`** : Intégralité des spécifications techniques de layout. |
| **Interaction Design: Minimal vs Bold Expression** | **Contradictoire** | Controlled : « Minimal, Flat design, NO drop shadows, NO gradients for depth ». Impact : « Bold Visual Expression, shadows ALLOWED and encouraged, gradients ALLOWED for depth and atmosphere ». | **`references/interaction.md`** & **`references/color-and-contrast.md`** : Réconcilié en règle d'or : *Flat et épuré par défaut pour les outils denses / SaaS transactionnels ; effets visuels riches (ombres douces, mesh gradients, grain) autorisés et encouragés pour les vitrines, landings et marques expressives.* Pas de glassmorphism générique dans les deux cas. |
| **Interaction Design: Motion & Animation** | **Différent** | Controlled a un tableau complet de timings/courbes CSS/Framer. Impact a une checklist concise et renvoie vers `MOTION-SPEC.md`. | **Renvoi vers `motion-gsap`** : Le code lourd d'animation est externalisé vers le skill dédié `motion-gsap`. Les principes d'interaction UX restent dans **`references/interaction.md`**. |
| **Visual Effects (Mesh, Grain, Shadows)** | **Unique à Impact** | Recettes CSS complètes pour le grain SVG, gradient meshes, ombres douces multi-niveaux. | **`references/color-and-contrast.md`** : Conservé intégralement sans perte. |
| **User Experience Patterns** | **Différent** | Composants interactifs, boutons, états, modales, formulaires. | **`references/interaction.md`** : Préservé et structuré. |
| **Styling Implementation: Component Library & Layout** | **Identique** | Tailwind CSS / Vanilla CSS, structure modulaire. | **`references/layout.md`** et **`references/design-system-template.md`**. |
| **Responsive Design** | **Différent** (Taille) | Controlled fournit 605 lignes de specs exhaustives (breakpoints, fluid typography, touch targets). Impact a 90 lignes résumées. | **`references/responsive.md`** : Reprend la version exhaustive (605 lignes) de Controlled pour garantir une documentation de niveau production. |
| **Accessibility Standards** | **Différent** (Taille) | Controlled fournit 828 lignes exhaustives (WCAG AA, contrastes, navigation clavier, focus, ARIA). Impact a 111 lignes résumées. | **`references/accessibility.md`** : Reprend la version exhaustive (828 lignes) de Controlled. |
| **Design System Framework** | **Unique à Controlled** | `DESIGN-SYSTEM-TEMPLATE.md` (693 lignes) : méta-framework, tokens, mapping fixed/variable. | **`references/design-system-template.md`** : Conservé intégralement. |
| **Design Process & Testing** | **Identique** | Workflow de design en 4 phases et checklist de tests multi-navigateurs. | **`SKILL.md`** (synthèse) et **`references/examples.md`**. |
| **Examples (Button, Typography, Color Palettes)** | **Identique** | 3 exemples détaillés de composants et palettes. | **`references/examples.md`** : Déplacé pour alléger `SKILL.md`. |
| **Common Patterns to Avoid** | **Différent** | Controlled liste des "Don't" souples. Impact liste des "NEVER" stricts. | **`SKILL.md`** : Section « Anti-patterns & Pièges à éviter » formulée sous forme de préférences fortes par défaut avec conditions d'exception. |
| **When to Break the Rules** | **Unique à Impact** | Cadre explicite pour justifier les dérogations aux règles (contexte de marque, public cible, rupture délibérée). | **`SKILL.md`** : Conservé dans le corps principal pour donner de la flexibilité à l'agent. |
| **Version History** | **Unique à Controlled** | Historique de versionnage du skill. | Archivé / documenté dans le changelog de refactorisation. |

---

## 3. Résolution des Contradictions Clés

### Contradiction 1 : Plat / Minimaliste (Controlled) vs Ombres & Dégradés Riches (Impact)
* **Problème** : Controlled interdit les ombres et les dégradés (« No drop shadows, no gradients for depth »). Impact les encourage vivement pour créer de l'atmosphère (« Shadows ALLOWED and encouraged, gradients ALLOWED for depth »).
* **Résolution** :
  > **Règle unifiée** : Adopter une hiérarchie visuelle sobre et nette par défaut (spacing, typographie, aplats). Les effets de profondeur (ombres diffuses multicouches, dégradés d'atmosphère, textures de grain) sont autorisés et bienvenus dès lors qu'ils soutiennent une intention de marque précise (landing pages, vitrines, branding fort) et ne nuisent pas à la lisibilité. Le glassmorphism opaque générique reste proscrit dans tous les cas.

### Contradiction 2 : Interdiction catégorique des couleurs SaaS clichés
* **Problème** : Impact écrit « NEVER use default SaaS blue (#3B82F6) ». Controlled écrit « Avoid default SaaS blue unless it fits your brand ».
* **Résolution** :
  > **Règle unifiée** : Éviter par défaut le bleu standard SaaS (`#3B82F6`) et les dégradés pourpres sur fond blanc, qui trahissent une génération IA sans réflexion. Privilégier des neutres typés (anthracite chaud, écru, ardoise) et des accents contrastés. **Exception acceptée** : si le client dispose déjà d'une charte graphique institutionnelle établie ou demande explicitement cette gamme, l'utiliser avec des accords chromatiques modernes.

### Contradiction 3 : Bannissement des polices de caractères
* **Problème** : Impact bannit complètement Inter, Roboto, Arial, Space Grotesk. Controlled recommande de choisir en fonction du projet.
* **Résolution** :
  > **Règle unifiée** : Ne pas sélectionner par automatisme les polices par défaut du web (Inter, Roboto, Space Grotesk) comme typographies de titrage/display. Choisir une police de titrage distinctive et expressive. Réserver les fontes plus neutres (ou polices système) au corps de texte long où la performance et la lisibilité pure sont prioritaires.

---

## 4. Architecture de la compétence `design-direction`

```
.agents/skills/design-direction/
├── SKILL.md                              (< 350 lignes : principes, protocole 5 étapes, anti-patterns, checklist)
└── references/
    ├── color-and-contrast.md             (palettes, contrastes, mesh, textures, grain)
    ├── typography.md                     (échelles, appariements, sélection, licences)
    ├── layout.md                         (système 8pt, grilles, conteneurs, reframing prompts)
    ├── interaction.md                    (patterns UX, formulaires, modales, feedback)
    ├── examples.md                       (boutons, palettes concrètes, études de cas)
    ├── accessibility.md                  (référentiel WCAG AA exhaustif issu de controlled)
    ├── responsive.md                     (breakpoints, typographie fluide, cibles tactiles)
    └── design-system-template.md         (architecture complète des tokens issue de controlled)
```
