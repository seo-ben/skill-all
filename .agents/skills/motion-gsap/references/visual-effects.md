# Spécification Effets Visuels & Shaders CSS (Visual Effects Checklist)

Cette référence reprend intégralement les techniques d'effets atmosphériques issues de la compétence originale `bencium-impact-designer`.

---

## 1. Arrière-Plans en Dégradé Mesh (Gradient Mesh Backgrounds)

Créer une sensation de lumière vivante par la superposition de plusieurs gradients radiaux asymétriques :
* **Nombre de couches** : 2 à 4 gradients radiaux (plus = richesse chromatique, moins = légèreté et netteté).
* **Positionnement** : Décentrer des coins ou des bords (placer le centre à 20-30% des bords génère une tension dynamique).
* **Opacité** : 0.1 à 0.4 pour les arrière-plans discrets de contenu ; 0.5 à 0.8 pour les sections Hero à fort impact.
* **Formes** : Ellipses organiques déformées pour éviter l'aspect artificiel d'un cercle parfait.
* **Animation subtile des positions** : Déplacer lentement les foyers lumineux (10% à 25% de déplacement sur une boucle de 20s à 30s) pour rendre l'interface vivante sans distraire la lecture.

```css
.hero-mesh {
  background-color: #090a0f;
  background-image:
    radial-gradient(ellipse at 15% 20%, rgba(99, 102, 241, 0.25) 0px, transparent 55%),
    radial-gradient(ellipse at 85% 80%, rgba(236, 72, 153, 0.20) 0px, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.15) 0px, transparent 60%);
}
```

---

## 2. Ombres Dramatiques & Élévation Distinctive (Dramatic Shadows)

Rompre avec les ombres plates imperceptibles en construisant un étagement de plans maîtrisé :
* Utiliser des ombres multicouches composées pour dissocier l'occlusion ambiante de la projection lumineuse directe :
  ```css
  .card-dramatic-elevation {
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.04),
      0 8px 16px -2px rgba(0, 0, 0, 0.08),
      0 24px 48px -12px rgba(0, 0, 0, 0.14);
  }
  ```
* **Ombres teintées** : Injecter une touche de la couleur d'accent dans l'ombre pour réchauffer la surface (ex. `rgba(200, 90, 50, 0.15)` au lieu d'un gris neutre sale).
* **Filtres `drop-shadow`** : Préférer `filter: drop-shadow(...)` pour les éléments détourés, transparents ou vectoriels non rectangulaires.

---

## 3. Transparences Superposées & Profondeur (Layered Transparencies)

* Empiler des surfaces découpées avec des arrière-plans en `rgba()` ou `hsla()`.
* **Utilisation sobre de `backdrop-filter`** : Limiter l'usage de `backdrop-filter: blur(...)` aux barres de navigation flottantes et aux fenêtres modales. Éviter d'en placer sur des dizaines de cartes en boucle de rendu, en raison de son coût GPU sur les appareils mobiles.
* Veiller à ce que le contraste du texte au-dessus de la surface floutée atteigne toujours le ratio WCAG AA (≥ 4.5:1).

---

## 4. Texture de Grain Analogique (Grain & Noise Overlays)

* Appliquer une texture de bruit ultra-légère pour éliminer l'effet plastique des dégradés numériques :
```css
.noise-texture {
  position: relative;
}
.noise-texture::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  z-index: 1;
}
```

---

## 5. Curseurs Personnalisés & Magnétisme (Custom Cursors)

* Modifier l'aspect du pointeur uniquement sur les ordinateurs équipés d'une souris précise (`@media (hover: hover) and (pointer: fine)`).
* Fournir systématiquement un repli natif (`cursor: url('...'), pointer;`).
* Utiliser `cursor: grab` / `cursor: grabbing` lors de la manipulation de carrousels ou de vues 3D interactives.
