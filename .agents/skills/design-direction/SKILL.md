---
name: design-direction
description: Guide and execute distinctive, high-end, and accessible interface design directions for web and mobile applications, balancing enterprise rigor with visual impact. Use when designing complete pages, components, or UI design systems. Do not use for minor styling bug fixes or pure art explorations without functional constraints. Do not use alongside innovative-design; if both seem applicable, ask the user which one they prefer.
---

# Design Direction

Compétence centrale d'orientation design : transformer des exigences fonctionnelles en interfaces remarquables, robustes et mémorables, tout en éliminant les esthétiques génériques produites par défaut par les IA.

---

## 1. Philosophie Centrale : Le Protocole en 5 Étapes

Avant d'écrire la moindre ligne de code CSS ou HTML, exécuter ce protocole décisionnel pour ancrer la conception dans un contexte authentique :

### Étape 1 : Reconnaissance du Domaine & du Rôle Produit
Identifier la nature exacte du produit :
* Secteur d'activité, audience cible et niveau d'expertise technique requis.
* Ton de la communication : institutionnel, utilitaire, audacieux, confidentiel ou luxueux.
* Type d'interface : outil transactionnel à forte densité, tableau de bord d'analyse, ou vitrine narrative.

### Étape 2 : Benchmark Sectoriel & État de l'Art
* **Si l'accès au web est disponible ou si l'utilisateur fournit des références** : Analyser les meilleures références contemporaines mondiales dans le secteur visé.
* **Si aucun accès réseau n'est disponible** : Mobiliser les connaissances internes des standards d'excellence du secteur et l'énoncer explicitement : *(« Basé sur les standards de référence de l'industrie pour ce secteur... »)*.
* Ne jamais copier un concurrent : identifier ce qui fait l'autorité visuelle des leaders et s'en inspirer pour créer une solution originale.

### Étape 3 : Éradication des Anti-Patterns Métier
Éliminer les clichés propres au secteur (ex. illustrations vectorielles génériques pour la tech, bleus ternes pour la santé, rouge vif criard pour la sécurité). Remplacer chaque automatisme par une solution typée et contextualisée.

### Étape 4 : Thèse de Différenciation
Définir en deux phrases la proposition visuelle unique :
* Quelle est la tension visuelle dominante (ex. typographie monumentale + vide spatial, ou austérité géométrique + micro-accents vifs) ?
* Pourquoi cette interface restera-t-elle mémorable face à des solutions standards ?

### Étape 5 : Exécution Immédiate & Rigoureuse
Passer au code avec une direction assumée :
* Appliquer les tokens de design dès la première vue.
* Respecter scrupuleusement la hiérarchie et les contrastes WCAG AA.

---

## 2. Principes Directeurs : Préférences par Défaut & Exceptions

Pour concilier cohérence globale et souplesse créative, chaque directive fonctionne comme une préférence forte par défaut assortie d'exceptions documentées :

1. **Typographie de caractère** :
   * *Par défaut* : Éviter les polices par défaut du web (Inter, Roboto, Space Grotesk) comme typographies de titrage ; choisir des polices expressives (Syne, Fraunces, Outfit, Cabinet Grotesk).
   * *Exception* : Si la charte de marque de l'utilisateur impose déjà une police spécifique, la respecter et compenser par une mise en page et un tracking soignés.
   * 👉 *Consulter [typography.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/typography.md) lors de la sélection des fontes et du calcul de l'échelle modulaire.*

2. **Harmonie chromatique & Neutres chauds** :
   * *Par défaut* : Éviter le bleu SaaS standard (`#3B82F6`) et les dégradés violets sur blanc. Préférer des neutres teintés (ivoire, mastic, anthracite chaud) avec des accents tranchants.
   * *Exception* : Si le secteur d'activité ou l'identité existante exige du bleu, l'associer à des neutres profonds et des contrastes nets.
   * 👉 *Consulter [color-and-contrast.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/color-and-contrast.md) pour les ratios de contraste, mesh gradients et textures.*

3. **Mise en page spatiale & Grille 8pt** :
   * *Par défaut* : Structurer sur une grille modulaire de 8px avec des espaces négatifs généreux et des compositions asymétriques.
   * 👉 *Consulter [layout.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/layout.md) pour les métaphores de cadrage spatial et les conteneurs.*

4. **Clarté d'interaction & Profondeur** :
   * *Par défaut* : Interface épurée et fonctionnelle pour les outils denses ; profondeur atmosphérique (ombres diffuses, textures fines) pour les vitrines et landings. Proscrire le glassmorphism opaque générique.
   * 👉 *Consulter [interaction.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/interaction.md) pour les états de boutons, la saisie et les retours d'état.*

5. **Accessibilité universelle non négociable** :
   * Tout contenu doit être navigable au clavier, respecter le contraste WCAG AA (4.5:1 / 3:1) et inclure des étiquettes sémantiques complètes.
   * 👉 *Consulter [accessibility.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/accessibility.md) pour la checklist de conformité WCAG AA et les modèles ARIA.*

6. **Adaptabilité multi-écrans** :
   * Penser d'abord mobile, puis déployer les enrichissements pour tablette et bureau avec des cibles tactiles minimales de 44x44px.
   * 👉 *Consulter [responsive.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/responsive.md) pour les points de rupture et grilles adaptatives.*

7. **Structure du Design System** :
   * Définir des tokens clairs (couleurs, rayons, espacements, ombres) pour assurer la maintenabilité.
   * 👉 *Consulter [design-system-template.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/design-system-template.md) pour l'architecture complète des tokens.*

8. **Gabarits & Études de Cas** :
   * 👉 *Consulter [examples.md](file:///Users/tabtech/Documents/skill-all/.agents/skills/design-direction/references/examples.md) pour des modèles concrets de composants, de paires typographiques et de palettes.*

9. **Mouvement & Animations** :
   * Pour toute animation avancée, scroll cinétique ou intégration GSAP ScrollTrigger, se référer au skill dédié **`motion-gsap`**.

---

## 3. Anti-Patterns & Pièges à Éviter

| Piège à éviter | Pourquoi c'est une erreur | Ce qu'il faut faire |
| :--- | :--- | :--- |
| **Banalisation automatique (AI Sameness)** | Générer les mêmes cartes à 3 colonnes avec icône bleue et ombre floue. | Choisir un parti pris esthétique clair et varier les rythmes de composition. |
| **Glassmorphism opaque partout** | Dégrade le contraste, fatigue la lecture et nuit à l'accessibilité. | Utiliser des aplats solides ou des contrastes marqués avec bordures précises. |
| **Placeholders comme étiquettes** | Disparaît à la saisie, perturbe l'utilisateur et désoriente les lecteurs d'écran. | Conserver toujours des `<label>` visibles et permanents au-dessus des champs. |
| **Animations qui ralentissent l'action** | Frustre l'utilisateur lors de tâches transactionnelles récurrentes. | Réserver les animations aux transitions de contexte et garder les durées courtes (150-250ms). |
| **Couleurs d'accent éparpillées** | Perte de hiérarchie visuelle quand tout attire l'œil en même temps. | Utiliser une seule couleur d'accent décisive pour l'action primaire. |

---

## 4. Quand Déroger aux Règles (When to Break the Rules)

Une règle de design n'est pas un dogme rigide, mais un garde-fou. Il est légitime de s'en écarter si et seulement si :
1. **L'intention narrative ou artistique le justifie** : Ex. une landing page événementielle peut assumer une densité extrême ou des superpositions expérimentales pour créer un sentiment d'abondance.
2. **L'audience cible l'attend** : Un outil financier pour traders professionnels exige une densité d'information très serrée en contradiction avec les espaces négatifs de luxe.
3. **L'accessibilité reste préservée** : Toute transgression esthétique doit continuer à respecter les critères d'accessibilité (contraste, lisibilité, navigabilité).

---

## 5. Checklist Finale de Validation

Avant de livrer une interface ou un composant, valider ces 7 points :
* [ ] **Objectif** : Chaque élément à l'écran remplit-il un rôle fonctionnel ou narratif explicite ?
* [ ] **Hiérarchie** : L'élément le plus important attire-t-il immédiatement le regard ?
* [ ] **Accessibilité** : Tous les textes respectent-ils le contraste minimum WCAG AA (4.5:1 / 3:1) ?
* [ ] **Typographie** : Les polices ont-elles du caractère sans compromettre le confort de lecture ?
* [ ] **Cohérence** : Les tokens de couleur, d'espacement et de bordure sont-ils harmonisés ?
* [ ] **Responsivité** : L'expérience est-elle aussi fluide et tactile sur mobile que sur bureau ?
* [ ] **Singularité** : Le résultat échappe-t-il aux clichés du SaaS générique ?
