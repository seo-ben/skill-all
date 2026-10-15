# Spécification Couleur, Contraste & Effets Visuels

Ce guide de référence approfondit la gestion des couleurs, du contraste accessible et des effets d'atmosphère pour la compétence `design-direction`.

---

## 1. Règle de Contraste Accessible (WCAG AA & AAA)

La lisibilité ne doit jamais être compromise par une intention créative :
* **Texte normal (< 18pt ou < 14pt gras)** : Contraste minimum de **4.5:1** contre son arrière-plan (WCAG AA) ; viser **7:1** pour le standard AAA.
* **Texte large (≥ 18pt ou ≥ 14pt gras)** : Contraste minimum de **3:1** (WCAG AA) ; viser **4.5:1** pour le standard AAA.
* **Éléments d'interface actifs et bordures de champs** : Contraste minimum de **3:1** contre les couleurs adjacentes.
* **Ne jamais communiquer une information par la couleur seule** : toujours associer une étiquette textuelle, une icône distincte ou un motif.

---

## 2. Stratégie Chromatique : Éviter les Clichés SaaS

### 2.1 La règle par défaut
Éviter par défaut :
* Le bleu SaaS standard (`#3B82F6` / `rgb(59, 130, 246)`) et les palettes prévisibles de bibliothèques UI non personnalisées.
* Les dégradés pourpres / violets sur fond blanc immaculé (signature typique des maquettes IA banalisées).
* Les distributions égales de couleurs timides qui affadissent l'interface.

### 2.2 L'exception justifiée
* **Exception de marque établie** : Si le client possède une identité de marque institutionnelle préexistante basée sur le bleu ou le violet, respecter la charte en modernisant les teintes d'accompagnement, les neutres et les contrastes.
* **Expliquer le choix** : Documenter la raison du maintien du code couleur dans le fichier de design ou les variables CSS.

### 2.3 Construction d'une palette distinctive
1. **Neutres de caractère** :
   * Préférer des neutres teintés aux gris neutres froids :
     - Blancs cassés chauds : `#FBFBFA`, `#F7F6F2`
     - Teintes crème / ivoire : `#FAF8F5`, `#F3EFEA`
     - Gris chauds / mastic : `#ECEAE4`, `#DCD8D0`
     - Ardoises profondes : `#1E2229`, `#16191F`
     - Noirs riches / obsidienne : `#0D0E11`, `#0A0A0C`
2. **Accents nets et dominants** :
   * Utiliser une couleur dominante affirmée associée à un accent contrasté net plutôt que 5 couleurs secondaires diluées :
     - *Terre cuite & Anthracite chaud* : `#C85A32` + `#1C1B1A`
     - *Sauge organique & Bleu nuit profond* : `#7D9D8B` + `#0F172A`
     - *Ocre ambré & Carbone* : `#D97706` + `#18181B`
     - *Électrique cyber & Vide cosmique* : `#00F0FF` + `#05050A`

---

## 3. Effets Visuels et Atmosphère (Atmosphere Engine)

L'audace visuelle est encouragée dès lors qu'elle soutient la marque et ne dégrade pas les performances (60 fps) ni la lisibilité.

### 3.1 Dégradés Mesh complexes (Mesh Gradients)
Plutôt qu'un simple dégradé linéaire bicolore à 45°, composer des dégradés multi-radiaux superposés :
```css
.mesh-surface {
  background-color: #0b0f19;
  background-image: 
    radial-gradient(at 0% 0%, hsla(253, 77%, 20%, 0.45) 0px, transparent 50%),
    radial-gradient(at 100% 0%, hsla(190, 80%, 25%, 0.35) 0px, transparent 50%),
    radial-gradient(at 50% 100%, hsla(339, 60%, 20%, 0.3) 0px, transparent 50%);
}
```

### 3.2 Texture de grain SVG (Grain Overlays)
Pour supprimer l'effet numérique lisse des fonds web et apporter une matérialité organique :
```css
.grain-overlay {
  position: relative;
}
.grain-overlay::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

### 3.3 Ombres douces multicouches (Layered Shadows)
Éviter l'ombre brute unique (`box-shadow: 0 4px 6px rgba(0,0,0,0.3)`). Utiliser des ombres décomposées en couches fines :
```css
.card-elevation-high {
  box-shadow:
    0 1px 2px -1px rgba(0, 0, 0, 0.08),
    0 4px 6px -2px rgba(0, 0, 0, 0.06),
    0 12px 16px -4px rgba(0, 0, 0, 0.06),
    0 24px 32px -8px rgba(0, 0, 0, 0.04);
}
```

### 3.4 Ce qu'il faut bannir
* **Glassmorphism opaque amateur** : Les cartes blanches à demi-transparentes floutées (`backdrop-filter: blur(10px)`) appliquées partout sans contraste suffisant pour le texte.
* **Apple Mimicry non assumée** : La reproduction mécanique du style iOS/macOS (coins sur-arrondis, bordures blanches lumineuses fines) sans identité propre.
