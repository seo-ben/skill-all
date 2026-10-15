# Exigences & Patterns de Mouvement (Motion Requirements)

Ces modèles de mouvement et d'animation sont issus de la compétence originale `bencium-impact-designer`. Ils fournissent des recettes pratiques et des listes de contrôle pour animer les interfaces web avec fluidité et intention.

---

## 1. Animations Déclenchées au Scroll (Scroll-Triggered Animations)

* **Intersection Observer API** : Utiliser l'API native `IntersectionObserver` ou `gsap.ScrollTrigger` pour détecter l'entrée des éléments dans la zone de visualisation avec un coût de calcul minimal.
* **Déclenchement contextuel** : Ne jamais animer tous les blocs au chargement de la page (`window.onload`). Attendre que l'utilisateur approche de l'élément pour animer son entrée.
* **Implémentation standard CSS/JS** :
  ```javascript
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  ```

---

## 2. Révélations Séquentielles en Cascade (Staggered Reveals)

* Appliquer un décalage progressif (`animation-delay` ou `gsap.to(..., { stagger: 0.08 })`) pour les listes, grilles de cartes et groupes de statistiques.
* **Principes de cadencement** :
  - **Délai de base (Base delay)** : 50ms à 150ms entre chaque élément (50ms = dynamique et rapide, 150ms = majestueux et élégant).
  - **Durée totale de la séquence** : Ne jamais dépasser 1.0 seconde au total pour l'ensemble du groupe, sous peine de lasser l'utilisateur.
  - **Motifs de distribution** : Linéaire (ordonné), ralenti/accéléré (easing), ou concentrique (du centre vers les bords).
  - **Orientation** : De gauche à droite, de haut en bas, en diagonale ou du centre vers l'extérieur.

---

## 3. Atmosphère et Micro-Mouvements d'Arrière-Plan (Background Atmosphere)

* Créer des orbes ou halos lumineux flottants animés en CSS pur pour donner une respiration spatiale sans impacter le thread JS :
  ```css
  @keyframes orb-float {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(20px, -30px, 0) scale(1.08);
    }
  }

  .ambient-orb {
    animation: orb-float 16s ease-in-out infinite;
    will-change: transform;
    pointer-events: none;
  }
  ```
* **Principes du mouvement ambiant** :
  - **Durée** : 8s à 25s pour les arrière-plans (les mouvements très lents apportent de la sérénité).
  - **Transformations** : `translate3d` (flottement), `scale` (respiration), `rotate` (orbite lente).
  - **Intensité** : Mouvements subtils (5px à 30px d'amplitude) pour les éléments d'ambiance.
  - **Parallaxe multicouche** : Superposer 2 à 3 couches à vitesses différentes pour générer une véritable sensation de profondeur.

---

## 4. Animation des Dispositions en Grille (Layout Animation)

* Utiliser des grilles Bento asymétriques avec des cadencements d'apparition différenciés.
* Animer les cartes individuellement plutôt que le conteneur global.
* Favoriser les révélations en diagonale ou en cascade directionnelle.

---

## 5. Visualisation de Données & Compteurs (Data Visualization Motion)

* **Barres de progression animées** : Remplissage fluide déclenché au scroll via `transform: scaleX(progress)` (origine à gauche) pour des performances 60 fps optimales.
* **Compteurs numériques incrémentaux** :
  ```javascript
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      obj.innerHTML = Math.floor(easeOutQuad * (end - start) + start);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }
  ```

---

## 6. Transformations au Survol (Hover State Transformations)

* Élévation subtile : `translateY(-3px)` ou `translateY(-4px)` combiné à une échelle minimale (`scale(1.015)`).
* Toujours spécifier une transition fluide utilisant les courbes d'inertie :
  ```css
  .interactive-surface {
    transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  @media (hover: hover) and (pointer: fine) {
    .interactive-surface:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
  ```

---

## 7. Bandeaux Défilants Infinis (Social Proof & Marquee Motion)

* Défilement infini sans à-coup pour les logos partenaires, avis clients ou flux financiers.
* **Règle absolue d'accessibilité** : L'animation DOIT se mettre en pause au survol de la souris (`:hover`) et à la prise de focus clavier (`:focus-within`).
  ```css
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 35s linear infinite;
  }

  .marquee-wrapper:hover .marquee-track,
  .marquee-wrapper:focus-within .marquee-track {
    animation-play-state: paused;
  }
  ```
