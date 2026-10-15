---
name: ultra-3d-web-experience
description: Construct 3D spatial web experiences with real vectorial geometry, continuous orbital rotation, scrollytelling pinning, and editorial layouts. Use when building interactive 3D showcases, product configurators, or spatial landing pages with Three.js and GSAP. Do not use for simple 2D text pages, non-interactive canvas applications, or low-power embedded devices without WebGL support.
---

# ⚡ Ultra 3D Spatial Web Experience & Fluid Design Engine (Dribbble & Awwwards Standard)

> **The definitive agent skill to construct luxury, high-performance, three-dimensional digital experiences and hyper-fluid interfaces. Built upon true vector space mathematics $(X, Y, Z)$, continuous orbital rotation, synchronized scroll pinning, card stacking mechanics, and pure editorial design.**

---

## 💎 The 3 Master Design Archetypes (Dribbble Hall of Fame)

Every interface generated through this skill must explicitly commit to one of the three master archetypes:

### 1. The Dipa Inhouse Archetype &mdash; « Clean Product SaaS & FinTech Precision »
* **Palette** : Clean white / off-white (`#ffffff`, `#f8f9fa`), subtle graphite borders (`1px solid #e5e7eb`), single high-contrast accent (cobalt, emerald, or pure black).
* **Composition** : Bento Grids with mathematical spacing, **Floating Micro-UI Fragmentation** (cards, metrics, real graphs, and active buttons suspended in space).
* **Typography** : High-legibility sans-serif with tabular figures (`font-variant-numeric: tabular-nums lining-nums`), surgical micro-labels.
* **Feel** : Institutional trust, modern banking, effortless clarity.

### 2. The Outcrowd Archetype &mdash; « Tactile Clay & Brand Synergy »
* **Palette** : Warm pastel harmony (butter yellow, sage green, soft peach, gentle lavender).
* **Matière** : **3D Claymorphism** and soft-touch skeuomorphism. Velvety, matte, tactile materials that feel like soft rubber or physical cards you want to press.
* **Metaphors** : Humanizing technology with concrete real-world objects (pins, cards, tactile dice, volumetric toggle switches).
* **Feel** : Friendly, playful, inviting, reducing cognitive fatigue.

### 3. The Roobinium Archetype &mdash; « Dark Luxury & Liquid Chrome »
* **Palette** : Deep abyssal black (`#07080a`, `#0e1015`), dramatic directional light falloff, iridescent dichroic highlights (liquid gold, petrol blue, electric cyan).
* **Matière** : **Liquid Metal & Glassmorphism 2.0**. Dense organic fluid core, high refractive index, chrome caustic reflections.
* **Typography** : Monumental editorial title, stark contrast, fine CAD/financial monospace telemetry.
* **Feel** : Power, status, Web3 avant-garde, cybernetic luxury.

---

## 🚫 The 4 Inflexible Anti-Patterns (Zero "AI Slop")

### 1. The "Lifemed" Cliché (Meaningless Abstract 3D Ribbon)
* **Never** place a generic pastel 3D torus, ribbon, or blob floating aimlessly in space.
* Every 3D model must have **semantic and functional relevance** to the product (e.g. real architectural sneaker, real laptop showing actual UI, physical medical data visualization, tactile object).
* **Never** trap a title in the middle of a 3D donut hole.

### 2. No Heavy Boxes or Artificial Frames in the Hero
* The 3D scene is **continuous, fixed, and full-bleed** (`position: fixed; inset: 0; pointer-events: none`).
* The subject and typography float directly in open negative space.

### 3. No Artificial Eyebrow Labels Above Headings
* **Never** stick tiny uppercase tags (`// PERFORMANCE DU FUTUR` or `[01 // INNOVATION]`) above headlines.
* The typography itself must carry 100% of the visual authority.

### 4. No Cartoon Primitives
* Never assemble a raw cube and cone to feign a real commercial product.
* Use multi-layered geometry, real PBR materials (`MeshPhysicalMaterial`, carbon fiber, IOR refraction, anisotropic roughness), and high-resolution studio photography.

---

## 🌊 The Fluid Physics Engine (Extreme Fluidity)

### 1. Cinematic Easing Curves
Never use browser defaults (`linear` or `ease`). Apply high-inertia cubic-bezier curves:
```css
/* Apple & Framer Kinetic Deceleration */
--ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Fluid Transitions */
transition: transform 0.6s var(--ease-fluid), opacity 0.6s var(--ease-fluid);
```

### 2. Damped LERP Inertia (Damping Factor: 0.92)
Coordinates do not snap; they have physical mass:
```javascript
let velX = 0, velY = 0;
// Inside RAF loop:
if (!isDragging) {
  velX *= 0.92;
  velY *= 0.92;
  modelGroup.rotation.y += velX;
  modelGroup.rotation.x += velY;
}
```

### 3. Interactive 3D Card Tilt with Cursor Spotlight Follower
```javascript
const cards = document.querySelectorAll('.interactive-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set CSS custom properties for radial spotlight
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // 3D Tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  });
});
```

Spotlight shader in CSS:
```css
.interactive-card {
  position: relative;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.interactive-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
    rgba(255, 255, 255, 0.12),
    transparent 40%
  );
  pointer-events: none;
}
```

---

## 📐 The 4 Choreographic Stages of the Page

1. **Stage 1 : Hero in Free Space** &mdash; Monumental typography, unboxed continuous 3D canvas, free 360° orbit with dampening at 0.92, instant camera preset HUD (Profil, Face, Semelle, Talon).
2. **Stage 2 : Pinned 3D Scrollytelling (300vh–400vh)** &mdash; Viewport pins, 3D object rotates continuously across axes $(\vec{i}, \vec{j}, \vec{k})$ while technical annotations reveal and exit in sequence.
3. **Stage 3 : Stacking Cards** &mdash; Cards stack physically with `position: sticky` and offsets (`top: 12vh`, `16vh`, `20vh`), layering real macro imagery and specifications.
4. **Stage 4 : Dynamic Flying Exit** &mdash; The 3D model soars smoothly upward into the sky (`y: +9.0, z: -4.0`), clearing the viewport for the grand finale CTA.
5. **100% Bidirectional Reversibility** &mdash; Tied to GSAP ScrollTrigger with `scrub: 1.0` or `1.2`. Scrolling up rewinds the animation without jumps or jitter.

---

## 🏛️ 5. Architectural 3D Stage Pods & Multi-Planar Z-Space Layering

When showcasing mobile apps, hardware, or tactile fintech products, reject simple flat rectangular cards. Implement multi-layered 3D spatial stages:

### 1. Bespoke Architectural Geometries
* **Squircle Pods** (`border-radius: 46px`) : Modern Apple/Linear organic curvature.
* **Stadium Oval Pods** (`border-radius: 130px / 85px`) : True continuous oval stadium curvature for dynamic mobile/QR features.
* **Arched Dome Pods** (`border-radius: 170px 170px 46px 46px`) : Arched cathedral top with soft base for vault/cash/security features.

### 2. Multi-Planar Z-Space Separation
Always place child layers at distinct physical Z-depths (`perspective: 1600px; transform-style: preserve-3d;`):
* **Layer 0 ($Z: -35\text{px}$)** : Planetary dashed neon orbit ring rotating with continuous 3D inclination.
* **Layer 1 ($Z: +25\text{px}$)** : Physical device mockup with 3D specular glass reflection sheen (`linear-gradient(135deg, rgba(255,255,255,0.45) 0%, transparent 60%)`).
* **Layer 2 ($Z: +75\text{px}$ to $+95\text{px}$)** : Floating micro-pill confirmation badges suspended inches in front of the screen.

### 3. Directional 3D Scrollytelling & Progressive Text Unmasking
* **Banked Glide Across the Screen** : Visual starts far bottom-right in high-G bank (`x: +240px, y: +160px, z: -320px, rotateY: 42deg, rotateX: -18deg`) and sweeps across diagonally into the left column.
* **Progressive Typewriter / Clip-Path Text Reveal** : While the image sweeps into place, text on the opposite side types/unmasks from left to right (`clipPath: polygon(...)`).
* **Live Kinetic Micro-Elements** :
  * Real-time glowing QR laser scanner beam (`animation: scanLaser 2.6s ease-in-out infinite alternate`).
  * Sonar radar ripple rings pulsing from geographic/agent badges (`animation: sonarRadar 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite`).
* **Enhanced Cursor Physics with Differential Parallax** : On card mouse hover, tilt the pod to $\pm 8^\circ$ and dynamically elevate the floating badge to $Z: +95\text{px}$ with amplified parallax translation.

---

## 📂 6. The 6 Reference Templates & Implementation Mapping

When generating production code, directly leverage or scaffold the core template architectures:

1. **`fintech` (Mobile FinTech & Neobank 3D Spatial)**:
   - Path: `templates/fintech-mobile-spatial/index.html`
   - Key Features: Pure `#ffffff` canvas, squircle/stadium oval/arched dome stage pods, multi-planar Z-space, live QR laser scanner beam, sonar radar rings, banked 3D scrollytelling, single-word navbar with mobile drawer.
2. **`sneakers` (Luxury Footwear & 3D Configurator)**:
   - Path: `templates/sneaker-configurator/index.html`
   - Key Features: 360° orbital shoe viewer, bidirectional exploded view on scroll, live colorway switcher.
3. **`agency` (Creative Agency & 3D Chromatic Crystal)**:
   - Path: `templates/agency-creative/index.html`
   - Key Features: Floating chromatic crystal torus knot, kinetic typography, magnetic cursor dot.
4. **`tech` (Deep Tech & AI Quantum Core)**:
   - Path: `templates/tech-futuristic/index.html`
   - Key Features: Concentric gyroscope rings expanding on scroll, neural data packets, telemetry HUD.
5. **`hair-beauty` (Beauty & Glass Dropper Physics)**:
   - Path: `templates/beauty-hair-flow/index.html`
   - Key Features: Frosted glass serum dropper, animated pipette lifting & serum droplet physics, 3D silk ribbons.
6. **`fashion` (Haute Couture & Parametric Cloth Simulation)**:
   - Path: `templates/fashion-lookbook/index.html`
   - Key Features: Parametric 3D draped cloth simulation with vertex noise waves, dark luxury editorial layout.
