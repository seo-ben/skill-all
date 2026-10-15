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

1. **No Abstract Floating Shapes Without Purpose** : Every 3D model must represent a real product, hardware device, physical mechanism, or meaningful data visualization. Never place generic floating toruses or ribbons that serve no narrative function.
2. **No Heavy Artificial Frames** : The 3D canvas should be continuous, unboxed, and integrated into the layout flow (`position: fixed; inset: 0; pointer-events: none` or embedded within dedicated section containers).
3. **No Raw Low-Fidelity Primitives** : Never combine unshaded primitive cubes and spheres as a substitute for real product geometry. Use detailed models or procedural geometries with PBR materials (`MeshPhysicalMaterial`, roughness, transmission).

---

## 3. Spatial Geometry & Choreographic Stages

The scrollytelling narrative unfolds across 4 distinct choreographic stages:

1. **Stage 1: Hero in Open Space** :
   * The 3D subject floats in negative space alongside primary editorial typography.
   * Smooth orbital rotation with a baseline dampening factor of `0.08` (retaining ~92% momentum).
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
   * Detect WebGL support prior to mounting the scene:
     ```javascript
     function isWebGLAvailable() {
       try {
         const canvas = document.createElement('canvas');
         return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
       } catch (e) {
         return false;
       }
     }
     ```
   * If WebGL is unavailable or fails to initialize, display high-resolution fallback 2D imagery with equivalent descriptive text.
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
2. **Descriptive Image & Canvas Fallbacks** :
   * Include `<canvas role="img" aria-label="3D Interactive Product Model">` with semantic captions.

---

## 6. Performance Budget & Resource Limits

1. **Asset Size Limits** :
   * 3D Geometry: Compressed glTF/GLB models using Draco or Meshopt compression, keeping initial payload below **3 MB**.
   * Textures: Maximum resolution of **2048x2048** for hero textures, **1024x1024** for secondary maps; prefer WebP or KTX2 formats.
2. **Pixel Ratio & GPU Optimization** :
   * Cap device pixel ratio to prevent GPU overload on 3x/4x mobile screens:
     ```javascript
     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
     ```
3. **Low-Power GPU Graceful Degradation** :
   * Monitor frame rate with a moving average. If render loop falls below 30 fps, disable shadow maps (`renderer.shadowMap.enabled = false`), lower anti-aliasing, and reduce particle counts.
4. **Memory Cleanup** :
   * On component unmount, dispose geometries, materials, and textures to prevent WebGL context leaks:
     ```javascript
     scene.traverse(obj => {
       if (obj.geometry) obj.geometry.dispose();
       if (obj.material) {
         if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
         else obj.material.dispose();
       }
     });
     renderer.dispose();
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
