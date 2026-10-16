# Spécification Typographique & Sélection de Fontes

Ce guide de référence détaille les règles de sélection, d'échelle modulaire et de mise en page typographique pour la compétence `design-direction`.

---

## 1. Philosophie & Sélection Typographique

La typographie est l'armature principale de toute identité visuelle.

### 1.1 Règle par défaut pour le choix des fontes
* **Éviter par défaut les polices banalisées en titrage** : Inter, Roboto, Arial, Helvetica, Space Grotesk sont massivement générées par les LLMs et les gabarits SaaS interchangeables.
* **Interdiction stricte des serifs fragiles / académiques (Anti-pattern)** : Ne JAMAIS utiliser Cormorant Garamond, Times New Roman, ou des serifs hairlines de livre. Ils nuisent à la lisibilité sur écran, vieillissent l'interface et renvoient une image académique poussiéreuse.
* **Interdiction des étiquettes / eyebrows de titrage** : Aucun micro-label au-dessus ou sous les titres.
* **Privilégier un binôme de caractère contemporain** :
  - **Police Display / Titre** : Choisir une typographie expressive, singulière et immédiatement mémorable (ex: Plus Jakarta Sans, Outfit, Syne, Cabinet Grotesk, Clash Display, Fraunces).
  - **Police de Corps (Body)** : Choisir une fonte très lisible, optimisée pour les longs paragraphes et les tailles denses (14px - 16px), avec un excellent espacement de caractères (ex: Plus Jakarta Sans, Satoshi, DM Sans, Source Sans 3).
* **Maximum 2 à 3 fontes** : Une display, une de corps, et éventuellement une monospace stylisée pour la donnée ou le code.
* **3 graisses maximum par famille** : ex. Regular (400), Medium (500), Bold (700) pour préserver le poids de la page.

### 1.2 Exceptions justifiées
* **Charte client imposée** : Si le projet s'intègre dans un système préexistant imposant une police spécifique, l'utiliser avec un travail de tracking rigoureux et des contrastes de graisses affirmés.
* **Performance extrême / Systèmes embarqués** : Si aucun chargement réseau de fonte n'est toléré, utiliser la stack système moderne (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`) et documenter la contrainte.

---

## 2. Échelle Modulaire & Ratios

Pour garantir une harmonie mathématique entre les différents niveaux de titres, utiliser une échelle basée sur un ratio cohérent :

| Rôle | Ratio 1.250 (Major Third) | Ratio 1.333 (Perfect Fourth) | Ratio 1.414 (Augmented Fourth) |
| :--- | :--- | :--- | :--- |
| **Micro / Caption** | 12.8px (0.8rem) | 12.0px (0.75rem) | 11.3px (0.71rem) |
| **Body (Base)** | **16.0px (1.0rem)** | **16.0px (1.0rem)** | **16.0px (1.0rem)** |
| **Subhead / H4** | 20.0px (1.25rem) | 21.3px (1.33rem) | 22.6px (1.41rem) |
| **H3** | 25.0px (1.56rem) | 28.4px (1.78rem) | 32.0px (2.00rem) |
| **H2** | 31.2px (1.95rem) | 37.9px (2.37rem) | 45.3px (2.83rem) |
| **H1** | 39.0px (2.44rem) | 50.5px (3.16rem) | 64.0px (4.00rem) |
| **Display Hero** | 48.8px - 64px (4rem) | 67.3px - 84px (5.2rem) | 90.5px - 110px (6.5rem) |

### Recommandations par contexte :
* **Applications denses / Dashboards** : Ratio **1.250** (Major Third) pour éviter les écarts démesurés.
* **Marketing / Sites vitrines / Landing pages** : Ratio **1.333** ou **1.414** pour maximiser l'impact visuel des accroches.

---

## 3. Typographie Fluide & Règles CSS

### 3.1 Dimensionnement fluide avec `clamp()`
Ne pas figer les titres en pixels fixes. Utiliser la fonction CSS `clamp(min, val, max)` :
```css
:root {
  --font-display: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-h3: clamp(1.4rem, 1.25rem + 0.75vw, 1.75rem);
  --text-h2: clamp(1.85rem, 1.5rem + 1.75vw, 2.5rem);
  --text-h1: clamp(2.4rem, 1.8rem + 3vw, 4rem);
  --text-display: clamp(3rem, 2rem + 5vw, 6.5rem);
}
```

### 3.2 Rythme vertical et hauteurs de ligne (`line-height`)
* **Grands titres (Display, H1, H2)** : Hauteur de ligne resserrée entre **1.05 et 1.2** pour éviter que les mots ne flottent. Tracking légèrement négatif (`letter-spacing: -0.02em` à `-0.04em`).
* **Corps de texte (Body)** : Hauteur de ligne aérée entre **1.5 et 1.65** pour assurer le confort de lecture oculaire. Tracking neutre (`letter-spacing: 0`).
* **Micro-texte / Majuscules (Caps/Labels)** : Hauteur de ligne standard **1.4**, mais tracking positif (`letter-spacing: 0.05em` à `0.1em`).

### 3.3 Longueur de ligne (Measure)
* Pour les paragraphes de lecture continue, restreindre la largeur entre **45 et 75 caractères** (`max-width: 65ch`). Une ligne trop longue fatigue l'œil ; une ligne trop courte casse le rythme de lecture.
