---
name: 3d-web-experience
description: Construct 3D spatial web experiences with real vectorial geometry, continuous orbital rotation, scrollytelling pinning, and editorial layouts. Use when building interactive 3D showcases, product configurators, or spatial landing pages with Three.js and GSAP. Do not use for simple 2D text pages, non-interactive canvas applications, or low-power embedded devices without WebGL support.
---

# 3D Spatial Web Experience & Design Engine

Engineering specification for constructing interactive 3D digital experiences, spatial layouts, and continuous orbital rotations using Three.js and GSAP.

---

## 1. Core Visual Archetypes

When constructing a spatial experience, select an intentional aesthetic archetype suited to the domain:

1. **Clean SaaS & FinTech Precision** :
   * White/off-white background (`#ffffff`, `#f8f9fa`), fine graphite borders (`1px solid #e5e7eb`), single high-contrast accent.
   * Bento layouts, architectural stage pods, and micro-metric panels floating in space.
2. **Tactile & Organic Brand Experience** :
   * Warm pastel or neutral palettes, matte surfaces with soft-touch PBR lighting, and physical card metaphors.
3. **Dark Modern Luxury & Technical Core** :
   * Deep dark surfaces (`#07080a`, `#0e1015`), directional lighting with metallic reflections, and sharp technical telemetry.

---

## 2. Core Anti-Patterns

1. **No Gratuitous Abstract Floating Shapes** : Every 3D model must serve the narrative or represent a physical subject. Procedural ribbons or concentric rings are appropriate when conveying domain dynamics (e.g. silk ribbons in hair-beauty cosmetics, gyroscope quantum rings in tech), but avoid arbitrary floating toruses or spheres disconnected from the subject.
2. **No Heavy Artificial Frames** : The 3D canvas should be continuous, unboxed, and integrated into the layout flow (`position: fixed; inset: 0; pointer-events: none` or embedded within dedicated section containers).
3. **No Raw Low-Fidelity Primitives** : Never combine unshaded primitive cubes and spheres as a substitute for real product geometry. Use detailed models or procedural geometries with PBR materials (`MeshPhysicalMaterial`, roughness, transmission).

---

## 3. Spatial Geometry & Choreographic Stages

The scrollytelling narrative unfolds across 4 distinct choreographic stages:

1. **Stage 1: Hero in Open Space** :
   * The 3D subject floats in negative space alongside primary editorial typography.
   * Smooth orbital rotation with a starting dampening factor (valeur de départ à ajuster : ~0.08).
2. **Stage 2: Pinned Scrollytelling Timeline** :
   * The viewport pins (`ScrollTrigger: { pin: true, scrub: 1 }`) as the 3D subject rotates across vector axes $(X, Y, Z)$ while contextual annotations enter and exit.
3. **Stage 3: Stacking Cards with Real Depth** :
   * Cards layer progressively using `position: sticky` and adaptable offsets (e.g. starting at `top: clamp(80px, 12vh, 120px)`), revealing specifications and macro imagery.
4. **Stage 4: Exit & Call to Action** :
   * The 3D model translates outward along its trajectory, clearing the viewport for final transactional forms or actions.
   * All scroll timelines are fully bidirectional (`scrub: 1`).

👉 *For detailed pod geometries and Z-space layering specs, consult [pods-and-z-space.md](references/pods-and-z-space.md).*  
👉 *For the complete catalog of included templates and CLI commands, consult [templates.md](references/templates.md).*

---

## 4. Accessibility & Inclusive Design

1. **Alternative Without WebGL (Mandatory Fallback)** :
   * Wrap WebGL renderer creation in `try/catch` to guarantee early exit before any camera triggers, mesh creation, or animation loops execute:
     ```javascript
     const canvas = document.getElementById('webgl-canvas');
     const fallback = document.getElementById('webgl-fallback');
     const sceneControls = document.querySelectorAll('.angle-hud, .hud-telemetry, .scene-controls');

     initThreeScene();

     function initThreeScene() {
       let renderer;
       try {
         renderer = new THREE.WebGLRenderer({
           canvas: canvas,
           antialias: true,
           alpha: true,
           powerPreference: "high-performance"
         });
       } catch (err) {
         canvas.style.display = 'none';
         sceneControls.forEach(el => el.style.display = 'none');
         if (fallback) fallback.style.display = 'flex';
         return; // Exit early: no camera tweens, ScrollTriggers, or animation loop
       }
       // Scene setup, lighting, mesh creation, and animate() follow here...
     }
     ```
   * If WebGL is unavailable or fails to initialize, display high-resolution fallback 2D imagery with equivalent descriptive text in the template language (`role="group"` and `aria-label="..."` on `#webgl-fallback` to preserve inner text accessibility).
   * Provide an `aria-label` or hidden descriptive text element (`<div class="sr-only">`) explaining the 3D subject for screen readers.
2. **Prefers-Reduced-Motion** :
   * When `prefers-reduced-motion: reduce` is detected:
     - Halt continuous auto-rotation and camera drift.
     - Replace scroll-driven 3D camera tweens with discrete, instantaneous position snaps or simple fade transitions.
3. **Keyboard & Screen Reader Navigation** :
   * All interactive controls (camera angle toggles, colorway switchers, exploded view buttons) must be native `<button>` elements with clear focus rings and full keyboard accessibility.

---

## 5. SEO Best Practices

1. **Semantic HTML Outside Canvas** :
   * All text content, headings (`<h1>`, `<h2>`), feature descriptions, and navigation links must exist as real semantic HTML elements in the DOM.
   * Never render critical crawlable text exclusively inside WebGL textures or canvas draw routines.
2. **Visible Content Without JavaScript (No FOUC with opacity:0)** :
   * Ensure critical HTML copy remains immediately visible when JavaScript is disabled.
   * Avoid setting initial `opacity: 0` in raw static CSS on elements animated by GSAP; let GSAP hide or unmask elements dynamically during runtime initialization.
3. **Core Web Vitals (LCP & CLS)** :
   * Reserve layout space for the 3D canvas (e.g., explicit aspect-ratio or min-height) to prevent Cumulative Layout Shift; aim for a low CLS (below 0.1).
   * Prioritize rendering above-the-fold HTML/CSS before initializing heavy WebGL scenes to preserve Largest Contentful Paint (LCP).
4. **Descriptive Image & Canvas Fallbacks** :
   * Include `<canvas role="img" aria-label="3D Interactive Product Model">` with semantic captions and accessible descriptions.

---

## 6. Performance Budget & Resource Limits

1. **Asset Size Limits (Starting Baselines / Valeurs de départ à ajuster)** :
   * 3D Geometry: Compressed glTF/GLB models using Draco or Meshopt compression, targeting an initial payload (valeur de départ à ajuster : < 3 MB).
   * Textures: Target resolutions (valeurs de départ à ajuster : 2048x2048 max for hero maps, 1024x1024 for secondary textures; prefer WebP or KTX2 formats).
2. **Pixel Ratio & GPU Optimization** :
   * Cap device pixel ratio to prevent GPU overload on 3x/4x mobile screens:
     ```javascript
     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
     ```
3. **Low-Power GPU Graceful Degradation** :
   * Monitor frame rate with a moving average. If the render loop drops below a baseline threshold (valeur de départ à ajuster : < 30 fps), disable shadow maps (`renderer.shadowMap.enabled = false`), lower anti-aliasing, and reduce particle counts.
4. **Memory Cleanup & Resource Teardown** :
   * On component unmount or route transition, dispose geometries, materials, and textures to prevent WebGL memory leaks, cancel the active `requestAnimationFrame` loop, and delegate ScrollTrigger cleanup to `motion-gsap`:
     ```javascript
     // 1. Cancel animation frame loop
     if (animationFrameId) {
       cancelAnimationFrame(animationFrameId);
       animationFrameId = null;
     }

     // 2. Dispose Three.js scene assets (geometries, materials, textures)
     scene.traverse(obj => {
       if (obj.geometry) obj.geometry.dispose();
       if (obj.material) {
         const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
         materials.forEach(m => {
           // Dispose associated textures
           ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'alphaMap', 'envMap'].forEach(key => {
             if (m[key] && typeof m[key].dispose === 'function') {
               m[key].dispose();
             }
           });
           m.dispose();
         });
       }
     });
     renderer.dispose();

     // 3. Delegate ScrollTrigger lifecycle and context cleanup to motion-gsap
     // (e.g. gsap.matchMedia cleanup or ScrollTrigger.getAll().forEach(t => t.kill()))
     ```

---

## 7. Motion & Interaction Delegation

For 3D card tilt, cursor magnetic followers, text clip-path unmasking, and advanced GSAP ScrollTrigger configurations, refer to the dedicated skill:
👉 **`motion-gsap`**

---

## 8. Pinned Dependency Versions

All templates in this skill use pinned, stable library versions from reputable CDNs:
* **Three.js** : `r128` (`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`)
* **GSAP Core** : `3.12.2` (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`)
* **GSAP ScrollTrigger** : `3.12.2` (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`)
