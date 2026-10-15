# Master Motion & Fluidity Specification (Dribbble & Awwwards Standard)

Motion should surprise and delight while serving function. Animation is a creative tool of physical presence, weight, and extreme fluidity.

---

## 🌊 1. High-Inertia Easing Curves (The Apple & Framer Standard)

Never use browser defaults (`linear` or generic `ease`). Use curves with natural mass and deceleration:

| Easing Type | CSS Token | Mathematical Curve | Use Case |
| :--- | :--- | :--- | :--- |
| **Cinematic Decel (Default)** | `--ease-fluid` | `cubic-bezier(0.16, 1, 0.3, 1)` | Card lifts, page reveals, modale entrances, camera tweens |
| **Fluid Bounce / Overshoot** | `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Tactile buttons, playful notifications, badges (Outcrowd style) |
| **Accelerated Exit** | `--ease-exit` | `cubic-bezier(0.7, 0, 0.84, 0)` | Disappearing elements, flying exit |
| **Continuous Scrub** | `--ease-none` | `none` | Continuous GSAP ScrollTrigger timeline progress $P \in [0, 1]$ |

---

## 🧮 2. LERP Physics & Amorti (Dampening)

Interactive elements (cursor follow light, 3D orbit, floating parallax layers) must not snap. They interpolate smoothly towards their target:

$$\text{pos} \mathrel{+}= (\text{target} - \text{pos}) \times \text{damp}$$

* For 3D manual rotation drag: dampening factor strictly at **0.92**.
* For magnetic cursor / cursor glow: easing speed at **0.08** à **0.12**.

---

## 🪟 3. Interactive 3D Card Tilt with Specular Spotlight (Roobinium & Linear Standard)

Every card in a showcase or bento grid must support multi-dimensional feedback:

```javascript
const cards = document.querySelectorAll('.fluid-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set custom CSS coordinates for cursor-following specular spotlight
    card.style.setProperty('--spot-x', `${x}px`);
    card.style.setProperty('--spot-y', `${y}px`);
    
    // 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // Max -6 deg
    const rotateY = ((x - centerX) / centerX) * 6;  // Max +6 deg
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});
```

Associated CSS:
```css
.fluid-card {
  position: relative;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease;
  will-change: transform;
}

.fluid-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(
    450px circle at var(--spot-x, -999px) var(--spot-y, -999px),
    rgba(255, 255, 255, 0.15),
    transparent 50%
  );
  pointer-events: none;
  z-index: 2;
}
```

---

## ⚡ 4. Staggered Waterfall Reveals

When a grid, list, or bento layout enters the viewport, elements enter with a cascading delay:

* **Base step delay** : 60ms à 90ms entre chaque élément.
* **Translation vector** : `translateY(30px)` &rarr; `translateY(0)` combiné à un `opacity: 0` &rarr; `1`.
* **Courbe d'arrivée** : `cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 💎 5. The 3 Dribbble Archetype Presets

1. **Dipa Inhouse (Clean SaaS)** :
   * White/ivory surfaces, 1px micro-borders, floating UI card fragments, crisp lift hover (`translateY(-4px)`).
2. **Outcrowd (Claymorphism)** :
   * Soft 3D volume, velvety shadows (`box-shadow: 0 12px 30px rgba(0,0,0,0.06), inset 0 2px 4px rgba(255,255,255,0.6)`), spring-like feedback.
3. **Roobinium (Dark Luxury)** :
   * Deep black background, iridescent liquid metal accents, specular chrome reflections, fine CAD monospace telemetry.

---

## 🚀 6. Cinematic 3D Spatial Scrollytelling Standard (Awwwards & Apple Level)

Modern award-winning websites reject flat, static, 2D slide transitions. They construct **true spatial vector fields** $(X, Y, Z)$ where products, hardware mockups, and micro-interfaces move in perspective:

### 1. Vector Space Kinematics $(X, Y, Z)$
* **Camera Perspective** : Always declare high-depth perspective (`perspective: 1600px; transform-style: preserve-3d;`) on stage containers.
* **Pitch & Yaw Rotation** : Elements rotate along `rotateX` (tangage) and `rotateY` (lacet) angles between $\pm 15^\circ$ and $\pm 48^\circ$ when entering from deep space.
* **Z-Space Plunge & Warp** : Initial states start deep in camera depth (`translateZ(-200px)` to `-500px`) and surge into the viewport at `translateZ(0px)`.
* **100% Bidirectional Scrubbing** : All spatial movements MUST be tethered to GSAP ScrollTrigger with `scrub: 1.2`. Scrolling UP must reverse the 3D trajectory with absolute mathematical fidelity.

### 2. Multi-Planar Z-Space Layering
Interfaces must establish distinct physical depth strata:
* **Background Layer ($Z: -35\text{px}$)** : Planetary dashed orbit rings rotating on inclined 3D planes (`rotateX(60deg) rotateZ(...)`).
* **Median Hardware Layer ($Z: +25\text{px}$)** : Product mockup or device stage with dynamic specular glass glare (`linear-gradient(135deg, rgba(255,255,255,0.45), transparent)`).
* **Elevated Floating Layer ($Z: +75\text{px}$ to $+95\text{px}$)** : Floating micro-pill badges (`+45,00 €`, `Reçu validé`, `Point relais`) hovering inches above the glass with multi-tiered contact shadows.

### 3. Distinct Section Choreographies (Never Repeat the Same Motion)
Never apply a generic copy-pasted animation across all sections. Every section must have an authentic personality:
1. **Divergent Lateral Sweep** : Visual launches from bottom-right with 3D yaw, text unfolds from left.
2. **Banked Aerodynamic Glide (Reverse Section)** : Visual starts far down-right (`x: +240px, y: +160px, z: -320px, rotateY: 42deg`) and banks across the screen into the left column while text progressively types/reveals on the right (`clipPath: polygon(...)`).
3. **Angled Holographic Console** : Stage tilts back into an angled desk (`rotateX: 38deg, z: -260px`), while service cards flip into place in 3D (`rotateY: ±42deg`).
4. **Heavy Vault Door Swivel** : Arched dome stages pivot on an axis like a 3D bank vault door (`rotateY: -48deg, z: -280px`).
5. **Hyperdrive Warp Push** : Visual shoots forward from deep cyberspace (`scale: 0.55, z: -500px`), while corridor items flip down like mechanical split-flap airport Solari boards (`rotateX: -60deg`).
6. **3D Triptych Shields** : Cards fan out in 3D perspective (`rotateY: ±30deg`, center card advanced to $Z: +40\text{px}$).

### 4. Live Kinetic Micro-Elements
Elevate static mockups with real-time interactive physics:
* **Dynamic QR Laser Scanner Beam** : Continuous glowing cyan/blue line sweeping across the QR screen (`animation: scanLaser 2.6s ease-in-out infinite alternate`).
* **Sonar Radar Ping Rings** : Translucent green pulse ripples expanding outward from location badges (`animation: sonarRadar 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite`).
* **Differential Cursor Tilt Parallax** : On mouse move, tilt the pod to $\pm 8^\circ$ and dynamically elevate the floating badge to $Z: +95\text{px}$ with amplified parallax offset.
