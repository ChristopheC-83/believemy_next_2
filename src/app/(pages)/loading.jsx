import { TfiReload } from "react-icons/tfi";


// Mis à la racine de src/app
//  ou dans un dossier spécifique pour chaque page
//  le loeder le plus proche dans l'arborescence sera pris en compte

export default function Loading() {
  return (
    <div className="w-full p-16 min-h-52">
      <TfiReload className="mx-auto font-bold text-blue-500 text-7xl animate-spin" />
    </div>
  );
}
