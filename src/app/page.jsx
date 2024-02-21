/* eslint-disable react/no-unescaped-entities */

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl text-amber-400">Accueil</h1>
      <p className="my-4">Les noms de fichier réservés :</p>
      <ul className="flex flex-col gap-3 my-4 ml-4 ">
        <li>page.jsx / tsx - Ce fichier permet de créer une nouvelle page</li>
        <li>
          layout.jsx / tsx - Ce fichier permet de créer un calque qui se
          superpose aux pages
        </li>
        <li>
          not-found.jsx / tsx - Ce fichier permet de créer une page à montrer
          quand une page demandée n'existe pas ou lorsque nous l'appelons
          manuellement
        </li>
        <li>
          error.jsx / tsx - Ce fichier permet de montrer qu'il y a une erreur
        </li>
        <li>route.js / ts - Ce fichier permet de créer une route d'API</li>
      </ul>
    </div>
  );
}
