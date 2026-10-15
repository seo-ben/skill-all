---
name: motion-gsap
description: Guide and implement performant web animations, interactive GSAP ScrollTrigger timelines, and refined micro-interactions at 60 fps. Use when crafting fluid view transitions, kinetic scroll reveals, interactive cards, and physics-based motion. Do not use for text-only documentation websites without animations, nor for data-dense applications where motion impedes transactional input efficiency.
---

# Motion & GSAP Interaction

Spécification technique de mouvement pour des interfaces vivantes, réactives et accessibles à 60 images par seconde.

---

## 1. Tokens Fondamentaux de Mouvement

Ne jamais employer les courbes par défaut du navigateur. Utiliser ces variables physiques :

```css
:root {
  /* Courbes d'inertie physique */
  --ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);     /* Décélération cinématographique */
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1); /* Ressort élastique */
  --ease-exit: cubic-bezier(0.7, 0, 0.84, 0);       /* Sortie rapide */

  /* Durées standards */
  --duration-instant: 120ms;
  --duration-micro: 200ms;
  --duration-medium: 350ms;
  --duration-page: 600ms;
}
```

* **Physique LERP (Amorti)** : `position += (cible - position) * 0.08` (inertie à 92%).
* 👉 *Consulter [motion-spec.md](references/motion-spec.md) pour les tables complètes de durées par composant et états.*

---

## 2. Six Recettes Clés Prêtes pour la Production

### Recette 1 : Tilt 3D de Carte avec Spotlight Spéculaire
Effet physique de carte réagissant à la souris avec éclairage spéculaire en variable CSS :
```javascript
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    card.style.setProperty('--spot-x', `${x}px`);
    card.style.setProperty('--spot-y', `${y}px`);
    const tiltX = (y - rect.height / 2) / 15;
    const tiltY = (rect.width / 2 - x) / 15;
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
});
```

### Recette 2 : Curseur Magnétique
Attraction physique douce d'un bouton vers le pointeur :
```javascript
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
  });
});
```

### Recette 3 : Révélation de Texte par `clipPath`
Révélation éditoriale sans débordement de boîte :
```css
.reveal-text {
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  transition: clip-path 700ms var(--ease-fluid), transform 700ms var(--ease-fluid);
  transform: translateY(20px);
}
.reveal-text.is-inview {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transform: translateY(0);
}
```

### Recette 4 : Entrées au Scroll (ScrollTrigger GSAP)
Animation cadencée en cascade lors de l'arrivée dans le viewport :
```javascript
gsap.from('.stagger-card', {
  scrollTrigger: { trigger: '.cards-grid', start: 'top 80%' },
  y: 40,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
  ease: 'power3.out'
});
```

### Recette 5 : Scroll Épinglé avec Progression (`scrub`)
Section immobilisée le temps que l'utilisateur parcoure l'animation :
```javascript
gsap.timeline({
  scrollTrigger: {
    trigger: '.pinned-section',
    start: 'top top',
    end: '+=150%',
    pin: true,
    scrub: 1
  }
}).to('.hero-3d-model', { rotateY: 180, scale: 1.1 });
```

### Recette 6 : Empilement de Cartes en `position: sticky`
Empilement naturel de cartes avec réduction d'échelle au défilement :
```css
.sticky-card {
  position: sticky;
  top: clamp(80px, 12vh, 120px);
}
```
```javascript
document.querySelectorAll('.sticky-card').forEach((card, i) => {
  gsap.to(card, {
    scale: 0.95 - (i * 0.02),
    scrollTrigger: {
      trigger: card,
      start: 'top top+=100',
      end: 'bottom top',
      scrub: true
    }
  });
});
```

---

## 3. Accessibilité et Performance (Obligatoire)

### 3.1 Prise en compte de `prefers-reduced-motion`
Toute animation non essentielle doit être désactivée ou remplacée par un fondu discret :

**En CSS pur** :
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**En JavaScript / GSAP** :
```javascript
const mm = gsap.matchMedia();

mm.add({
  motionOK: '(prefers-reduced-motion: no-preference)',
  reduceMotion: '(prefers-reduced-motion: reduce)'
}, (context) => {
  const { motionOK } = context.conditions;
  if (motionOK) {
    // Initialiser les trajectoires, rotations et ScrollTriggers riches
    initAdvancedMotion();
  } else {
    // Repli accessible : simples apparitions en fondu
    gsap.set('.animated-item', { opacity: 1, y: 0 });
  }
});
```

### 3.2 Appareils Tactiles & Détection de Pointeurs
Bannir le tilt 3D et les curseurs personnalisés sur écrans tactiles :
```css
@media (hover: hover) and (pointer: fine) {
  /* Activer les effets de survol, curseurs personnalisés et halos */
  .cursor-glow { display: block; }
}
```

### 3.3 Règle des 60 FPS & Démontage Propre
* **Propriétés autorisées** : N'animer que `transform` (`translate3d`, `scale`, `rotate`) et `opacity`. Proscrire l'animation de `width`, `height`, `top`, `margin` qui forcent le recalcul du layout (*layout thrashing*). Utiliser `will-change: transform` avec parcimonie sur les éléments en mouvement continu.
* **Nettoyage ScrollTrigger** : Dans les composants dynamiques (React/Vue/Svelte), toujours détruire les triggers lors du démontage pour éviter les fuites mémoire :
```javascript
// Au démontage du composant
ScrollTrigger.getAll().forEach(trigger => trigger.kill());
```

### 3.4 Scroll Épinglé Adaptatif
* **Mobile** : Réduire la distance de `pin` (ex. `+=80%` au lieu de `+=200%`) pour éviter de piéger l'utilisateur dans un scroll trop long.
* **Clavier** : S'assurer que la touche `Tab` permet de traverser normalement les éléments épinglés sans bloquer le focus.

---

## 4. Références & Guides Avancés

* 👉 [motion-requirements.md](references/motion-requirements.md) : Modèles d'animation de listes, arrière-plans ambiants, compteurs et marquees infinis.
* 👉 [visual-effects.md](references/visual-effects.md) : Gradient meshes, textures de grain SVG, ombres multicouches dramatiques.
* 👉 [motion-spec.md](references/motion-spec.md) : Tableaux exhaustifs des durées, états interactifs de formulaire et lois de Gestalt.
