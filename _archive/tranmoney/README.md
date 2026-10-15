# 💳 TranMoney — 3D Spatial FinTech & Mobile Neobank Experience

> **Expérience web 3D immersive et vitrine pour application mobile FinTech, conçue selon l'archétype Dipa Inhouse (Clean FinTech Precision) avec scrollytelling spatial vectoriel $(X, Y, Z)$ et pods architecturaux en stade ovale.**

---

## 🌟 Présentation

**TranMoney** incarne le standard d'excellence pour la présentation d'une application de transfert d'argent et de services financiers mobiles modernes :
* **Toile Blanche Éditoriale Libre (`#ffffff`)** : Zéro conteneur lourd ou boîte étouffante autour des sections.
* **Pods Architecturaux Professionnels** : Cadrage des écrans et mockups en **stade ovale continu** (`border-radius: 130px / 85px`), en *squircle* (`46px`) et en dôme cintré, complété par un reflet spéculaire de verre.
* **Profondeur Multi-Planaire le long de l'axe $Z$** :
  * **Couche Orbite ($Z: -35\text{px}$)** : Anneaux orbitaux en pointillés inclinés dans l'espace 3D.
  * **Couche Matériel ($Z: +25\text{px}$)** : Mockup de smartphone et cartes physiques en perspective.
  * **Couche Badges Flottants ($Z: +75\text{px}$ à $+95\text{px}$)** : Badges tactiles en lévitation avec ombre portée de contact.
* **Scrollytelling 3D Vectoriel Réversible à 100%** :
  * Entrées aérodynamiques en piqué depuis le bas droit avec démasquage textuel progressif (`clipPath`).
  * Mouvements de tangage/lacet synchronisés au défilement via GSAP ScrollTrigger (`scrub: 1.2`).
  * Réversibilité mathématique absolue en scrollant vers le haut comme vers le bas.
* **Micro-Éléments Cinétiques en Temps Réel** :
  * Faisceau laser scanner QR luminescent en balayage perpétuel.
  * Ondes radar sonar pulsantes pour le maillage des points relais.
* **Navigation de Haute Précision** :
  * Liens desktop courts en un seul mot percutant (`Transfert`, `Paiements`, `Factures`, `Cash`, `Monde`, `FAQ`) en `white-space: nowrap`.
  * Tiroir mobile animé dès $\le 1024\text{px}$.
* **Intégrité Typographique & Numérique** :
  * Police **Inter** avec `font-variant-numeric: tabular-nums lining-nums;` (bannissement des zéros barrés informatiques sur les devises).

---

## 🚀 Démarrage & Prévisualisation

Pour prévisualiser le site localement dans votre navigateur :

```bash
# Avec npx serve
npx serve .

# Ou avec Python
python3 -m http.server 3457
```

Ouvrez ensuite `http://localhost:3457` dans votre navigateur.

---

## 📁 Architecture des Fichiers

```text
tranmoney/
├── index.html        # Expérience 3D complète (HTML5, Vanilla CSS 3D & GSAP ScrollTrigger)
├── README.md         # Documentation de l'architecture
└── assets/           # Visuels HD et mockups applicatifs
    ├── app-hero.jpg
    ├── hero-phone.png
    ├── hero-phone-on-white.jpg
    ├── instant-pay.jpg
    ├── merchant-qr.jpg
    ├── send-contact.jpg
    ├── bills-airtime.jpg
    ├── cash-agents.jpg
    ├── international.jpg
    └── titanium-card.jpg
```

---

## 🏛️ Template de Référence Monorepo

Ce projet sert de **« Canonical Reference Implementation »** pour les compétences :
* `.agents/skills/bencium-impact-designer`
* `.agents/skills/bencium-controlled-ux-designer`
* `.agents/skills/ultra-3d-web-experience`
* Template officiel : `ultra-3d-web-experience/templates/fintech-mobile-spatial/`
