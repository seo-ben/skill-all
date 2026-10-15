# Spécification Layout, Grilles & Cadrage Spatial

Ce guide de référence approfondit le système spatial, les grilles de composition et les modèles de cadrage créatif pour la compétence `design-direction`.

---

## 1. Système Spatial Fondé sur la Grille 8pt

Toutes les dimensions de marges, paddings, espacements inter-éléments et hauteurs de blocs doivent dériver de la grille **8 points** (avec un demi-pas à 4 points pour les ajustements fins) :

```css
:root {
  --space-1: 0.25rem;  /* 4px - Micro espacement */
  --space-2: 0.5rem;   /* 8px - Éléments liés (icône + texte) */
  --space-3: 0.75rem;  /* 12px - Padding interne de petits badges */
  --space-4: 1.0rem;   /* 16px - Padding standard de bouton / input */
  --space-6: 1.5rem;   /* 24px - Gaps internes de cartes */
  --space-8: 2.0rem;   /* 32px - Séparation entre composants */
  --space-12: 3.0rem;  /* 48px - Marges de sections compactes */
  --space-16: 4.0rem;  /* 64px - Espacement vertical standard de section */
  --space-24: 6.0rem;  /* 96px - Séparation de sections d'impact */
  --space-32: 8.0rem;  /* 128px - Espace négatif hero */
}
```

### Règles d'or d'espacement :
* **Proximité sémantique** : L'espace entre un titre et son paragraphe doit être nettement inférieur à l'espace entre le paragraphe et le composant suivant (`mb-2` sous le titre vs `mb-8` sous le groupe).
* **Espace négatif délibéré** : Le vide n'est pas un manque, c'est un séparateur visuel luxueux. Ne surchargez pas chaque centimètre carré de l'écran.

---

## 2. Conteneurs & Largeurs de Grilles

Éviter d'étaler tout le contenu sur la largeur de l'écran ou de le coincer dans un conteneur unique standard de 1200px.

| Type de conteneur | Largeur maximale | Utilisation |
| :--- | :--- | :--- |
| **`container-prose`** | `65ch` (~720px) | Articles, documentation, lecture longue |
| **`container-narrow`** | `960px` | Formulaires centrés, tunnels d'onboarding, pages de login |
| **`container-standard`** | `1200px` | Grilles de fonctionnalités, cartes SaaS, dashboards |
| **`container-wide`** | `1440px` | Grandes vitrines produit, bannières e-commerce |
| **`container-bleed`** | `100%` | Arrière-plans immersifs, navigations, pieds de page |

---

## 3. Prompts de Cadrage Créatif (Creative Reframing Prompts)

Pour échapper à la disposition banale en 3 colonnes avec icône bleue au-dessus du titre, employer ces métaphores de cadrage :

1. **Le Mur de Musée (The Museum Wall)** :
   * Des espaces négatifs massifs, des éléments présentés comme des œuvres d'art uniques avec de petites cartouches descriptives décentrées.
2. **L'Hôtel Boutique (The Boutique Hotel)** :
   * Atmosphère feutrée, bordures fines et élégantes, typographie à fort empattement ou géométrique chic, palette chaude et accueillante.
3. **L'Éditorial Brutaliste (The Brutalist Editorial)** :
   * Typographie monumentale pleine largeur, contrastes acérés, lignes de séparation visibles de 1px, pas de fioritures décoratives superflues.
4. **L'Atelier d'Artisan (The Analog Workshop)** :
   * Matériaux palpables, textures discrètes, teintes papier kraft ou cuir patiné, micro-interactions tactiles.
5. **La Sculpture Cinétique (The Kinetic Sculpture)** :
   * Éléments asymétriques flottants qui réagissent subtilement au scroll, décalages verticaux, superposition calculée de plans.
6. **Le Grand Livre Financier (The Financial Ledger)** :
   * Rigueur géométrique absolue, colonnes rigides, alignements numériques au tabular figures, typographie monospace haute précision.

---

## 4. Variété Structurelle & Rupture d'Uniformité

* **Décaler les colonnes** : Dans une section à deux colonnes, éviter le 50%/50% strict. Préférer un ratio 60%/40% ou 65%/35% pour créer une tension dynamique.
* **Superposition contrôlée** : Laisser une carte ou une image déborder légèrement sur la section suivante (`transform: translateY(-20%)`) pour lier visuellement le récit de la page.
* **Alternance des rythmes** : Ne pas enchaîner trois sections identiques de 3 cartes. Alterner : une section large immersive → une section asymétrique 2 colonnes → une grille condensée → un bandeau de citation typographique géante.
