# Exemples d'Implémentation & Études de Cas

Ce guide fournit des exemples complets de composants et de palettes de couleurs prêts pour la production, servant de gabarits concrets pour la compétence `design-direction`.

---

## Exemple 1 : Conception d'un Bouton de Haute Précision

Un composant bouton complet avec gestion des tokens, contrastes accessibles et micro-interactions fluides :

```html
<button class="btn btn-primary" type="button">
  <span>Explorer l'écosystème</span>
  <svg class="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
```

```css
.btn {
  --btn-bg: #18181b;
  --btn-text: #fafafa;
  --btn-border: transparent;
  --btn-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-family: var(--font-body, system-ui, sans-serif);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1;
  color: var(--btn-text);
  background-color: var(--btn-bg);
  border: 1px solid var(--btn-border);
  border-radius: 0.5rem;
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  transition: background-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 120ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
}

/* Survol (uniquement pour souris / pointeurs fins) */
@media (hover: hover) {
  .btn:hover {
    --btn-bg: #27272a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
}

/* Pression / Clic */
.btn:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Focus clavier accessible */
.btn:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* État désactivé */
.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

---

## Exemple 2 : Hiérarchie Typographique & Appariements

### Paire A : Élégance Moderne (Syne + Plus Jakarta Sans)
* **Idéal pour** : Tech innovante, architecture, design studios, luxe moderne.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap" rel="stylesheet">

<div class="editorial-block">
  <span class="eyebrow">Nouvelle Génération</span>
  <h1 class="headline">L'architecture spatiale du web moderne.</h1>
  <p class="lead">Une conception dépouillée de tout artifice, pensée pour allier puissance brute et émotion esthétique.</p>
</div>
```
```css
.editorial-block {
  max-width: 65ch;
}
.eyebrow {
  display: block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c85a32;
  margin-bottom: 0.75rem;
}
.headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.2rem, 1.8rem + 2.5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #0f172a;
  margin: 0 0 1.25rem 0;
}
.lead {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.05rem, 0.95rem + 0.3vw, 1.25rem);
  line-height: 1.6;
  color: #475569;
  margin: 0;
}
```

### Paire B : Clarté Éditoriale Haute Qualité (Fraunces + DM Sans)
* **Idéal pour** : Médias d'analyse, finance premium, recherche scientifique, santé.
* Titres en `Fraunces` (empattements organiques chaleureux) + corps en `DM Sans` (géométrie claire et aérée).

---

## Exemple 3 : Palettes de Couleurs Distinctives Éprouvées

### 1. Palette Terre Cuite & Mastic Organique
* **Fond principal** : `#F9F8F6` (Écru doux)
* **Surface de carte** : `#FFFFFF` (Blanc pur)
* **Texte principal** : `#1C1917` (Anthracite chaud - Contraste 14.8:1 sur écru)
* **Texte secondaire** : `#78716C` (Taupe neutre - Contraste 4.6:1 sur écru)
* **Accent primaire** : `#C2410C` (Terre cuite ardente - Contraste 5.1:1 sur écru)
* **Bordures & Lignes** : `#E7E5E4` (Gris pierre clair)

### 2. Palette Carbone Profond & Émeraude Sage
* **Fond principal** : `#0C0E12` (Noir obsidienne bleuté)
* **Surface de carte** : `#151921` (Gris carbone profond)
* **Texte principal** : `#F1F5F9` (Blanc glacé - Contraste 16.5:1 sur fond)
* **Texte secondaire** : `#94A3B8` (Gris ardoise - Contraste 6.4:1 sur fond)
* **Accent primaire** : `#10B981` (Vert émeraude vif - Contraste 8.2:1 sur fond)
* **Accent secondaire** : `#38BDF8` (Cyan lumineux)
* **Bordures** : `rgba(255, 255, 255, 0.08)`
