# TranMoney — 3D Spatial FinTech & Mobile Neobank Experience

> Expérience web 3D et vitrine pour application mobile FinTech avec scrollytelling spatial vectoriel $(X, Y, Z)$ et pods architecturaux géométriques.

---

## Présentation

Structure architecturale pour la présentation d'une application de services financiers mobiles :
* **Toile Blanche Éditoriale Libre (`#ffffff`)** : Zéro conteneur lourd ou boîte étouffante autour des sections.
* **Pods Architecturaux Modulables (Valeurs de départ adaptables)** : Cadrage des écrans et mockups en **stade ovale** (valeur de départ : `border-radius: clamp(80px, 10vw, 140px) / clamp(60px, 8vw, 90px)`), en *squircle* (`clamp(32px, 5vw, 48px)`) et en dôme cintré (`border-radius: 160px 160px 40px 40px`), complété par un reflet spéculaire.
* **Profondeur Multi-Planaire le long de l'axe $Z$ (Repères étagés)** :
  * **Couche Orbite ($Z \approx -30\text{px}$ à $-50\text{px}$)** : Anneaux orbitaux en pointillés inclinés dans l'espace 3D.
  * **Couche Matériel ($Z \approx +20\text{px}$ à $+30\text{px}$)** : Mockup de smartphone et cartes physiques en perspective.
  * **Couche Badges Flottants ($Z \approx +60\text{px}$ à $+95\text{px}$)** : Badges tactiles en lévitation avec ombre portée de contact.
* **Scrollytelling 3D Vectoriel Réversible** :
  * Démasquage textuel progressif (`clipPath`).
  * Mouvements de tangage/lacet synchronisés au défilement via GSAP ScrollTrigger (`scrub: 1.2`).
  * Réversibilité complète en scroll montant et descendant.
* **Micro-Éléments Cinétiques en Temps Réel** :
  * Faisceau laser scanner QR luminescent en balayage continu.
  * Ondes radar sonar pulsantes pour le maillage des points relais.
* **Navigation Adaptative** :
  * Liens desktop courts (`Transfert`, `Paiements`, `Factures`, `Cash`, `Monde`, `FAQ`) en `white-space: nowrap`.
  * Tiroir mobile animé pour résolutions $\le 1024\text{px}$.
* **Intégrité Typographique & Numérique** :
  * Police **Inter** avec `font-variant-numeric: tabular-nums lining-nums;`.

---

## Démarrage & Prévisualisation

Pour prévisualiser le site localement dans votre navigateur :

```bash
# Avec npx serve
npx serve .

# Ou avec Python
python3 -m http.server 3457
```

Ouvrez ensuite `http://localhost:3457` dans votre navigateur.

---

## Architecture des Fichiers

```text
fintech-mobile-spatial/
├── index.html        # Expérience 3D complète (HTML5, Vanilla CSS 3D & GSAP ScrollTrigger)
├── README.md         # Documentation de l'architecture
└── assets/           # Visuels et mockups applicatifs
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

## Intégration dans le Monorepo

Ce template est intégré dans la compétence :
* `.agents/skills/3d-web-experience`
* Chemin source : `.agents/skills/3d-web-experience/templates/fintech-mobile-spatial/`

