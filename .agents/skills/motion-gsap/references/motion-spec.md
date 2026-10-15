# Spécification Complète du Mouvement & Micro-Interactions (Motion Spec)

Cette référence technique fusionne les spécifications de mouvement des standards d'entreprise et d'impact créatif sans redondance.

---

## 1. Table des Courbes d'Inertie (High-Inertia Easings)

Ne jamais utiliser les courbes par défaut des navigateurs (`linear` ou `ease`). Utiliser des courbes dotées d'une masse physique naturelle :

| Nom du Token | Valeur CSS / GSAP | Formule Mathématique | Cas d'utilisation |
| :--- | :--- | :--- | :--- |
| **`--ease-fluid`** | `cubic-bezier(0.16, 1, 0.3, 1)` | Décélération cinématographique | Élévation de cartes, modales, entrées de page |
| **`--ease-bounce`** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Dépassement / Ressort élastique | Boutons tactiles, notifications d'alerte, badges |
| **`--ease-exit`** | `cubic-bezier(0.7, 0, 0.84, 0)` | Accélération de sortie | Fermetures de volets, éléments qui disparaissent |
| **`--ease-linear`** | `linear` | Linéaire constant | Barres de chargement indéterminées, marquees |

---

## 2. Table des Durées par Type d'Interaction

| Type d'Interaction | Durée Cible | Easing Recommandé | Justification Psychologique |
| :--- | :--- | :--- | :--- |
| **Micro-interaction (Hover/Focus)** | `150ms – 200ms` | `--ease-fluid` | Feedback quasi-immédiat sans sensation de latence |
| **Clic / Pression (Active)** | `80ms – 120ms` | `--ease-fluid` | Sensation mécanique d'enfoncement physique |
| **Menu déroulant / Tooltip** | `200ms – 250ms` | `--ease-fluid` | Déploiement vif orientant le regard |
| **Volet latéral / Modale** | `300ms – 400ms` | `--ease-fluid` | Changement de contexte spacieux |
| **Notification Toast** | `250ms (in) / 200ms (out)` | `--ease-bounce` | Accroche de l'attention sans être agressive |
| **Révélation au Scroll** | `500ms – 800ms` | `--ease-fluid` | Entrée théâtrale progressive |

---

## 3. Physique LERP (Linear Interpolation) & Amortissement

Pour tout élément suivant le curseur ou rotation 3D continue, interpoler la position actuelle vers la cible pour supprimer tout à-coup mécanique :

$$\text{current} = \text{current} + (\text{target} - \text{current}) \times \text{factor}$$

```javascript
// Boucle d'animation fluide
let currentX = 0, targetX = 0;
const dampening = 0.08; // Facteur d'amortissement optimal

function render() {
  currentX += (targetX - currentX) * dampening;
  element.style.transform = `translate3d(${currentX}px, 0, 0)`;
  requestAnimationFrame(render);
}
```

* **Curseur magnétique / Halo lumineux** : facteur de **0.08 à 0.12**.
* **Glissement d'orbite 3D (Drag rotation)** : amortissement strict de **0.08** (conserve 92% d'inertie).

---

## 4. Animations Spécifiques aux États (State-Specific Animations)

### 4.1 États de Survol (Hover)
```css
.card {
  transition: transform 220ms var(--ease-fluid), box-shadow 220ms var(--ease-fluid);
}
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.12);
  }
}
```

### 4.2 États de Focus Clavier (Focus Visible)
Ne jamais masquer l'anneau de focus sans fournir d'alternative visible. Utiliser un pulse ou une expansion d'anneau :
```css
:focus-visible {
  outline: 2px solid var(--accent, #6366f1);
  outline-offset: 3px;
  transition: outline-offset 120ms ease-out;
}
```

### 4.3 Retours de Validation de Formulaire
* **Erreur (Secousse subtile / Shake)** :
  ```css
  @keyframes field-shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-4px); }
    40%, 80% { transform: translateX(4px); }
  }
  .input-error {
    animation: field-shake 300ms cubic-bezier(0.36, 0.07, 0.19, 0.97);
    border-color: #ef4444;
  }
  ```
* **Succès (Validation verte avec morphing d'icône)** :
  ```css
  .icon-check {
    stroke-dasharray: 20;
    stroke-dashoffset: 20;
    animation: stroke-draw 350ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes stroke-draw {
    to { stroke-dashoffset: 0; }
  }
  ```

---

## 5. Principes de Gestalt Appliqués au Mouvement

1. **Proximité (Common Fate)** : Les éléments appartenant au même groupe logique doivent se déplacer ensemble avec une synchronisation forte.
2. **Continuité** : Une transition de page ou d'écran doit conserver un élément d'ancrage visuel continu (Shared Element Transition).
3. **Figure / Fond** : L'arrière-plan doit s'assombrir ou se flouter légèrement lors de l'ouverture d'une modale pour diriger l'attention sans ambiguïté.
