# Third-Party Notices & Attributions

Ce projet intègre ou référence des compétences, outils et ressources développés par des tiers.  
Le tableau ci-dessous et les notices associées détaillent l'auteur, l'URL amont et la licence telle qu'elle est constatée dans le dossier d'origine de chaque composant.

---

## Synthèse des Dépendances & Ressources Tierces

| Composant / Dossier | Auteur / Mainteneur | URL Source | Licence constatée d'origine |
| :--- | :--- | :--- | :--- |
| **`third-party/bencium-marketplace`** | bencium.io | https://github.com/bencium/bencium-marketplace.git | MIT License |
| **`.agents/skills/ui-ux-pro-max`** | Next Level Builder | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git | MIT License |
| **`anthropic-skills`** | Anthropic, PBC | https://github.com/anthropics/skills | **Non trouvée, à vérifier** *(voir avertissement spécifique ci-dessous)* |
| **`aas-core-skills`** | sickn33 / Antigravity User | https://github.com/sickn33/agentic-awesome-skills | MIT License (`LICENSE`) & CC BY 4.0 (`LICENSE-CONTENT`) |
| **`awesome-agent-skills`** | skillcreatorai | https://github.com/skillcreatorai/Ai-Agent-Skills | **Non trouvée, à vérifier** *(déclarée Apache-2.0 dans le README et par sous-dossier)* |
| **`vercel-skills-cli`** | Vercel, Inc. | https://github.com/vercel-labs/skills | MIT License |

---

## Détail des Licences et Avertissements

### 1. `anthropic-skills` (Avertissement spécifique)
* **Auteur** : Anthropic, PBC
* **URL Source** : [https://github.com/anthropics/skills](https://github.com/anthropics/skills)
* **Licence racine** : **Non trouvée, à vérifier** (aucun fichier `LICENSE` n'est présent à la racine du dépôt d'origine).
* **Régime des sous-dossiers** :
  * La majorité des compétences d'exemple (ex. `theme-factory`, `frontend-design`, `mcp-builder`, etc.) comportent un fichier `LICENSE.txt` sous licence **Apache 2.0**.
  * **Attention particulière** : Les compétences documentaires officielles (`skills/docx`, `skills/pdf`, `skills/pptx`, `skills/xlsx`) sont soumises à une licence propriétaire restreinte (*source-available*, non open source) régie par les Conditions d'Utilisation d'Anthropic :
    > *« © 2025 Anthropic, PBC. All rights reserved. Use of these materials (...) is governed by your agreement with Anthropic regarding use of Anthropic's services. »*
  * Ces 4 dossiers ne sont donc pas librement redistribuables sous licence permissive sans accord avec Anthropic.

### 2. `third-party/bencium-marketplace`
* **Auteur** : bencium.io
* **URL Source** : [https://github.com/bencium/bencium-marketplace.git](https://github.com/bencium/bencium-marketplace.git)
* **Licence** : MIT License (`LICENSE`)
```text
MIT License
Copyright (c) 2026 bencium.io
```

### 3. `.agents/skills/ui-ux-pro-max`
* **Auteur** : Next Level Builder
* **URL Source** : [https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git)
* **Licence** : MIT License (`LICENSE` dans le dépôt source)
```text
MIT License
Copyright (c) 2024 Next Level Builder
```

### 4. `aas-core-skills`
* **Auteur** : sickn33 / Antigravity User
* **URL Source** : [https://github.com/sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills)
* **Licences** :
  * Code & Outillage : MIT License (`LICENSE`, Copyright (c) 2026 Antigravity User).
  * Documentation & Contenu écrit original : Creative Commons Attribution 4.0 International (CC BY 4.0, `LICENSE-CONTENT`).

### 5. `awesome-agent-skills`
* **Auteur** : skillcreatorai
* **URL Source** : [https://github.com/skillcreatorai/Ai-Agent-Skills](https://github.com/skillcreatorai/Ai-Agent-Skills)
* **Licence racine** : **Non trouvée, à vérifier** (aucun fichier `LICENSE` global à la racine du dépôt d'origine).
* **Mentions** : Le fichier `README.md` arbore un badge `License: Apache-2.0` renvoyant vers `https://www.apache.org/licenses/LICENSE-2.0`, et plusieurs sous-dossiers comportent un fichier `LICENSE.txt` sous licence Apache 2.0.

### 6. `vercel-skills-cli`
* **Auteur** : Vercel, Inc.
* **URL Source** : [https://github.com/vercel-labs/skills](https://github.com/vercel-labs/skills)
* **Licence** : MIT License (`LICENSE`)
```text
MIT License
Copyright (c) 2026 Vercel, Inc.
```
