# Guide des Restaurants

Ce projet a été restructuré pour être plus simple et optimisé pour la mise en ligne.

## 📂 Structure du Projet

- **`dist/`** : **Dossier prêt à être mis en ligne.** Contient la version optimisée et minifiée du site.
  - Glissez simplement ce dossier sur Netlify, Vercel ou votre hébergeur statique.
- **`scripts/`** : Contient les utilitaires de traitement de données (extraction PDF, géocodage).
- **`data/`** : Contient les données brutes (PDF, JSONs intermédiaires).
- **Racine** : Contient les fichiers sources (non minifiés) pour le développement.

## 🚀 Mise en Ligne Rapide

1. Prenez le contenu du dossier **`dist/`**.
2. Hébergez-le (par exemple sur Netlify Drop).
3. C'est tout !

## 🛠 Développement

Pour modifier le site, éditez les fichiers à la racine (`index.html`, `style.css`, `script.js`).
Si vous voulez régénérer la version `dist`, copiez simplement vos modifications (ou utilisez un script de build si vous en ajoutez un plus tard).
