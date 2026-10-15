# Architectural Stage Pods & Multi-Planar Z-Space Layering

This reference guide documents spatial composition techniques for showcasing mobile interfaces, hardware, and physical tactile products in 3D web environments.

---

## 1. Architectural Stage Pod Geometries (Starting Baselines)

Rather than placing mockups inside standard rectangular boxes, construct geometric pods that serve as spatial stages. The following dimensions provide adaptable baseline values:

* **Squircle Pods** (Starting radius: `border-radius: clamp(32px, 5vw, 48px)`):
  - Provides organic curvature matching modern handheld devices.
  - Ideal for general app screens and clean product showcases.
* **Stadium Oval Pods** (Starting radius: `border-radius: 120px / 80px` or `clamp(80px, 10vw, 140px) / clamp(60px, 8vw, 90px)`):
  - Continuous oval curvature suited for circular or dynamic scanning actions (e.g., QR laser modules, NFC interactions).
* **Arched Dome Pods** (Starting radius: `border-radius: 160px 160px 40px 40px`):
  - Cathedral arched top with a flat or slightly rounded base.
  - Well suited for vault, security, credentials, or financial balance cards.

---

## 2. Multi-Planar Z-Space Layering (Z-Depth Separation)

To achieve depth without heavy textures, position layered DOM elements along the Z-axis using CSS 3D transforms (`perspective: 1200px to 1600px; transform-style: preserve-3d;`):

* **Background Orbit Plane (Baseline: $Z \approx -30\text{px}$ to $-50\text{px}$)**:
  - Rotated decorative rings, telemetry grids, or ambient particle planes behind the main subject.
* **Subject Plane (Baseline: $Z = 0$ or $+20\text{px}$ to $+30\text{px}$)**:
  - The primary device mockup or 3D canvas with specular surface sheen:
    ```css
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%);
    ```
* **Floating Annotation Plane (Baseline: $Z \approx +60\text{px}$ to $+90\text{px}$)**:
  - Micro-badges, validation pills, and status tags suspended in front of the device screen.
* **Differential Parallax on Hover**:
  - As the container tilts by $\pm 6^\circ$ to $\pm 10^\circ$, translate the foreground badges further along $(X, Y)$ and lift them to $Z \approx +90\text{px}$ for layered parallax depth.

---

## 3. Kinetic Micro-Elements

* **Real-time Laser Scanner Beam**:
  ```css
  @keyframes scanLaser {
    0% { transform: translateY(0); opacity: 0.2; }
    50% { opacity: 1; }
    100% { transform: translateY(180px); opacity: 0.2; }
  }
  .scanner-line {
    animation: scanLaser 2.4s ease-in-out infinite alternate;
  }
  ```
* **Radar Sonar Ripples**:
  ```css
  @keyframes sonarPulse {
    0% { transform: scale(0.6); opacity: 0.8; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  .sonar-ring {
    animation: sonarPulse 2.0s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  }
  ```
