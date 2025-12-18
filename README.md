# GTA Transit - Application Web

Application web moderne pour **Groupeur Transitaire Associés (GTA)**, spécialiste du transport international (Maritime, Aérien, Routier) et commissionnaire en douane.

Développée avec [Next.js 16](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) et [TypeScript](https://www.typescriptlang.org/).

## 🚀 Fonctionnalités Principales

*   **Présentation des Services** : Pages dédiées pour le Fret Maritime, Aérien, Routier et le transport de véhicules.
*   **Demande de Devis Dynamique** : Formulaire interactif (`/devis`) s'adaptant au mode de transport choisi (Maritime, Aérien, Routier) avec autocomplétion des ports et aéroports mondiaux.
*   **Contenu Riche** : Sections informatives sur le rôle de Commissionnaire, les avantages du groupage, et la présentation de l'entreprise.
*   **Interface Moderne** : Design responsive, animations fluides (Framer Motion) et UX soignée.
*   **Suivi** : Page de tracking (structure en place).

## 🛠️ Stack Technique

*   **Framework** : Next.js 16 (App Router)
*   **Langage** : TypeScript
*   **Styles** : Tailwind CSS v4
*   **Icônes** : Lucide React
*   **Animations** : Framer Motion (`motion`)
*   **Polices** : Geist & Geist Mono

## 📂 Structure du Projet

```
src/
├── app/
│   ├── commissionnaire/   # Page Commissionnaire de transport
│   ├── devis/             # Formulaire de devis (logique + UI)
│   │   ├── locations.ts   # Données des ports et aéroports
│   │   └── page.tsx       # Page principale du devis
│   ├── layout/            # Composants globaux (Header, Footer)
│   ├── maritime/          # Pages Fret Maritime (Groupage, Conteneurs...)
│   ├── aerien/            # Pages Fret Aérien
│   ├── vehicules/         # Pages Transport de Véhicules
│   └── ...
├── public/                # Images et assets statiques
└── ...
```

## ⚡ Installation et Démarrage

1.  **Cloner le dépôt :**

    ```bash
    git clone <votre-repo-url>
    cd gta-transit
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Lancer le serveur de développement :**

    ```bash
    npm run dev
    ```

    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📦 Scripts Disponibles

*   `npm run dev` : Lance le mode développement.
*   `npm run build` : Compile l'application pour la production.
*   `npm run start` : Lance le serveur de production (après le build).
*   `npm run lint` : Vérifie le code avec ESLint.

## 📝 Bonnes Pratiques

*   **Composants** : Utiliser le dossier `src/app/components` pour les composants réutilisables.
*   **Images** : Placer les images dans `public/` et utiliser le composant `Image` de Next.js pour l'optimisation quand c'est possible.
*   **Données** : Les listes statiques (comme les ports/aéroports) sont gérées dans des fichiers TypeScript dédiés (ex: `locations.ts`).

## 📄 Licence

Ce projet est la propriété de GTA Transit.
