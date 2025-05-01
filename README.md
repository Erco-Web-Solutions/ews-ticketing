# Application d'Articles React - Projet d'Entretien Technique

## Aperçu

Il s'agit d'une application React simple avec TypeScript, Vite et Tailwind CSS qui permet aux utilisateurs de visualiser, créer, modifier et supprimer des articles. L'application est intentionnellement incomplète, et votre tâche est d'implémenter les fonctionnalités manquantes.

## Structure du Projet

Le projet est structuré comme suit :

- `src/components/` : Contient les composants React que vous devez implémenter
- `src/lib/` : Contient les données fictives pour l'application
- `src/services/` : Contient les fichiers de service API qui simulent les appels API
- `src/webclient/` : Contient la configuration Axios avec les intercepteurs de requête et de réponse
- `src/swagger/` : Contient la documentation Swagger pour l'API

## Votre Tâche

Votre tâche est d'implémenter les composants dans le répertoire `src/components/` :

1. **ArticleList** : Implémenter un composant pour afficher une liste d'articles

   - Récupérer et afficher les articles depuis l'API
   - Implémenter la pagination
   - Ajouter la possibilité de sélectionner un article pour voir les détails

2. **ArticleDetail** : Implémenter un composant pour afficher les détails d'un article

   - Récupérer et afficher les détails de l'article depuis l'API
   - Ajouter la navigation de retour à la liste des articles
   - Ajouter la possibilité de modifier ou supprimer l'article

3. **ArticleForm** : Implémenter un formulaire pour créer et modifier des articles
   - Créer un formulaire avec validations
   - Implémenter la soumission du formulaire pour créer ou mettre à jour un article
   - Ajouter la fonctionnalité d'annulation

## Documentation API

La documentation API est disponible dans l'application. Cliquez sur le bouton "API Docs" sur la page principale pour voir la documentation Swagger UI. Cette documentation fournit des informations sur les points de terminaison de l'API, les charges utiles des requêtes et les formats de réponse.

## Services API Simulés

L'application inclut des services API simulés dans le répertoire `src/services/` :

- `articles-api.ts` : Simule les appels API pour les articles (obtenir, créer, mettre à jour, supprimer)
- `auth-api.ts` : Simule les appels API pour l'authentification (connexion, inscription, déconnexion)

Ces services utilisent des données fictives de `src/lib/dummy-data.ts` et ajoutent des délais artificiels pour simuler les requêtes réseau.

## Stack Technologique

- React 19.0.0
- TypeScript 5.7.2
- Vite 6.3.1
- Tailwind CSS 4.1.4
- Axios 1.9.0
- Swagger UI 5.21.0

## Exécution du Projet

1. Installer les dépendances :

   ```
   npm install
   ```

2. Démarrer le serveur de développement :

   ```
   npm run dev
   ```

3. Ouvrir votre navigateur et naviguer vers l'URL affichée dans le terminal (généralement http://localhost:5173)

## Critères d'Évaluation

Vous serez évalué sur :

1. **Qualité du Code** : Code bien organisé, lisible et maintenable
2. **Conception des Composants** : Structure appropriée des composants et gestion de l'état
3. **Fonctionnalité** : Implémentation correcte des fonctionnalités requises
4. **Utilisation de TypeScript** : Utilisation appropriée des types et interfaces TypeScript
5. **Gestion des Erreurs** : Gestion appropriée des états de chargement et des erreurs
6. **UI/UX** : Interface propre et conviviale utilisant Tailwind CSS

## Points Bonus

- Ajout de tests unitaires
- Implémentation de fonctionnalités supplémentaires au-delà des exigences
- Ajout d'animations ou de transitions
- Amélioration de l'UI/UX au-delà des exigences de base

## Limite de Temps

Vous avez 2 heures pour terminer cette tâche. Concentrez-vous d'abord sur l'implémentation des fonctionnalités principales, puis améliorez l'interface utilisateur et ajoutez des fonctionnalités supplémentaires si le temps le permet.

Bonne chance !
