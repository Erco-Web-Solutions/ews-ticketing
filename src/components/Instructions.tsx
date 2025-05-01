import React from "react";

const Instructions: React.FC = () => {
  return (
    <div className="prose max-w-none p-4">
      <h1 className="text-3xl font-bold mb-6">
        Application d'Articles React - Projet d'Entretien Technique
      </h1>

      <h2 className="text-2xl font-semibold mb-4">Aperçu</h2>
      <p className="mb-4">
        Il s'agit d'une application React simple avec TypeScript, Vite et
        Tailwind CSS qui permet aux utilisateurs de visualiser, créer, modifier
        et supprimer des articles. L'application est intentionnellement
        incomplète, et votre tâche est d'implémenter les fonctionnalités
        manquantes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Structure du Projet</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <code>src/components/</code> : Contient les composants React que vous
          devez implémenter
        </li>
        <li>
          <code>src/lib/</code> : Contient les données fictives pour
          l'application
        </li>
        <li>
          <code>src/services/</code> : Contient les fichiers de service API qui
          simulent les appels API
        </li>
        <li>
          <code>src/webclient/</code> : Contient la configuration Axios avec les
          intercepteurs de requête et de réponse
        </li>
        <li>
          <code>src/swagger/</code> : Contient la documentation Swagger pour
          l'API
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Votre Tâche</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li className="mb-4">
          <strong>ArticleList</strong> : Implémenter un composant pour afficher
          une liste d'articles
          <ul className="list-disc pl-6 mt-2">
            <li>Récupérer et afficher les articles depuis l'API</li>
            <li>Implémenter la pagination</li>
            <li>
              Ajouter la possibilité de sélectionner un article pour voir les
              détails
            </li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>ArticleDetail</strong> : Implémenter un composant pour
          afficher les détails d'un article
          <ul className="list-disc pl-6 mt-2">
            <li>Récupérer et afficher les détails de l'article depuis l'API</li>
            <li>Ajouter la navigation de retour à la liste des articles</li>
            <li>Ajouter la possibilité de modifier ou supprimer l'article</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>ArticleForm</strong> : Implémenter un formulaire pour créer et
          modifier des articles
          <ul className="list-disc pl-6 mt-2">
            <li>Créer un formulaire avec validations</li>
            <li>
              Implémenter la soumission du formulaire pour créer ou mettre à
              jour un article
            </li>
            <li>Ajouter la fonctionnalité d'annulation</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Critères d'Évaluation</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Qualité du Code</strong> : Code bien organisé, lisible et
          maintenable
        </li>
        <li>
          <strong>Conception des Composants</strong> : Structure appropriée des
          composants et gestion de l'état
        </li>
        <li>
          <strong>Fonctionnalité</strong> : Implémentation correcte des
          fonctionnalités requises
        </li>
        <li>
          <strong>Utilisation de TypeScript</strong> : Utilisation appropriée
          des types et interfaces TypeScript
        </li>
        <li>
          <strong>Gestion des Erreurs</strong> : Gestion appropriée des états de
          chargement et des erreurs
        </li>
        <li>
          <strong>UI/UX</strong> : Interface propre et conviviale utilisant
          Tailwind CSS
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Points Bonus</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Ajout de tests unitaires</li>
        <li>
          Implémentation de fonctionnalités supplémentaires au-delà des
          exigences
        </li>
        <li>Ajout d'animations ou de transitions</li>
        <li>Amélioration de l'UI/UX au-delà des exigences de base</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Limite de Temps</h2>
      <p className="mb-4">
        Vous avez 2 heures pour terminer cette tâche. Concentrez-vous d'abord
        sur l'implémentation des fonctionnalités principales, puis améliorez
        l'interface utilisateur et ajoutez des fonctionnalités supplémentaires
        si le temps le permet.
      </p>
    </div>
  );
};

export default Instructions;
