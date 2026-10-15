# Spécification Interaction & Modèles UX

Ce guide de référence régit les composants interactifs, les états de feedback, les formulaires et la gestion de la profondeur visuelle pour la compétence `design-direction`.

---

## 1. Modèles UX des Composants Interactifs

### 1.1 Hiérarchie des Boutons
Ne jamais utiliser plusieurs boutons d'action primaire concurremment dans un même champ visuel.

* **Primaire (Primary CTA)** :
  - Un seul par écran ou par section critique.
  - Couleur d'accent tranchante, contraste de texte fort (≥ 4.5:1).
  - Déclenche l'action décisive (ex. « Créer un compte », « Payer », « Valider »).
* **Secondaire (Secondary Action)** :
  - Style avec contour (outline) ou fond neutre doux.
  - Accompagne le primaire pour les actions alternatives (ex. « Annuler », « En savoir plus »).
* **Tertiaire / Fantôme (Ghost Button)** :
  - Sans contour ni fond par défaut ; réagit au survol par une légère teinte d'arrière-plan.
  - Idéal pour les actions discrètes dans les en-têtes ou barres d'outils.
* **Destructeur (Destructive)** :
  - Réservé aux actions irréversibles (suppression de compte, purge de données).
  - Teinte d'avertissement nette (rouge brique / écarlate profond, pas rouge néon criard), exigeant une confirmation modale.

### 1.2 États Interactifs Complets (Obligatoires)
Chaque élément cliquable doit définir 5 états visuels distincts :
1. **Défaut (Default)** : Clarté et affordance immédiate (forme identifiable comme cliquable).
2. **Survol (Hover)** : Feedback instantané (changement d'opacité, micro-élévation `translateY(-1px)` ou changement de teinte). *Uniquement actif sur pointeurs fins via `@media (hover: hover)`*.
3. **Actif / Clic (Active / Pressed)** : Compression tactile subtile (`transform: scale(0.98)`).
4. **Focus visible (Focus Visible)** : Anneau de focus net de 2px ou 3px avec offset de 2px (`outline: 2px solid var(--accent); outline-offset: 2px;`) pour la navigation clavier accessible.
5. **Désactivé (Disabled)** : Opacité réduite (40-50%), curseur `not-allowed`, suppression des événements de pointeur. Toujours expliquer pourquoi le bouton est désactivé si l'utilisateur tente d'interagir.

---

## 2. Formulaires & Saisie de Données

* **Étiquettes permanentes (Labels)** : Ne jamais remplacer une vraie étiquette (`<label>`) par un simple texte indicatif (`placeholder`). Les placeholders disparaissent dès la saisie et nuisent à l'accessibilité.
* **Retour de validation en temps réel** :
  - Valider au moment opportun : après que l'utilisateur a quitté le champ (`blur`) ou après une saisie complète, pas à chaque frappe prématurée.
  - Afficher le message d'erreur sous le champ avec une icône explicite, sans déplacer brutalement le reste de la page (`min-height` réservé).
* **Cibles tactiles** : Minimum **44x44px** pour tout élément interactif sur écran tactile.

---

## 3. Clarté Fonctionnelle vs Profondeur Atmosphérique

Pour concilier rigueur d'entreprise et impact esthétique :

### 3.1 Approche sobre et fonctionnelle (Par défaut pour applications denses & SaaS)
* **Quand l'appliquer** : Tableaux de bord de données denses, CRM, outils de gestion financière, applications administratives.
* **Caractéristiques** :
  - Fond neutre épuré, aplats de couleur clairs.
  - Espacements millimétrés et lisibilité maximale.
  - Ombres réservées uniquement aux superpositions flottantes (menus déroulants, modales).
  - Pas de dégradés décoratifs superflus qui parasitent l'analyse des métriques.

### 3.2 Approche atmosphérique expressive (Pour landings, vitrines & marques affirmées)
* **Quand l'appliquer** : Landing pages produit, sites vitrines, applications grand public avec forte identité de marque, lancements de campagnes.
* **Caractéristiques** :
  - Ombres diffuses multicouches douces créant une réelle sensation de relief physique.
  - Dégradés complexes (mesh gradients) en fond pour poser une ambiance lumineuse.
  - Fin grain analogique texturé pour casser la froideur des aplats numériques.
  - Décoration au service de l'émotion de marque, sans jamais enfreindre le contraste WCAG AA.

---

## 4. Principes de Mouvement & Renvoi vers `motion-gsap`

* **Intentionnalité** : Chaque animation doit avoir un but fonctionnel (orienter le regard, signaler un changement d'état, lier deux vues).
* **Durées naturelles** :
  - Micro-interactions (hover, boutons, toggles) : **150ms à 250ms**.
  - Transitions moyennes (ouvertures de volets, dropdowns, accordéons) : **250ms à 350ms**.
  - Grandes transitions de page et modales : **350ms à 450ms**.
* **Courbes d'accélération (Easings)** : Bannir le linéaire (`linear`). Utiliser `cubic-bezier(0.16, 1, 0.3, 1)` pour une décélération fluide et naturelle.
* **Animations complexes & Scroll cinétique** : Pour toute mise en œuvre d'animations avancées, de scroll épinglé ou d'effets ScrollTrigger GSAP, se référer au skill dédié **`motion-gsap`**.
