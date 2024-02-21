// pour utiliser coté serveur
"use server";

import { toast } from "sonner";
import { FIREBASE } from "./constantes";
import { revalidatePath } from "next/cache";

export async function create(title, content) {


  console.log(title, content);
  if (!title || !content) {
    throw new Error("Veuillez remplir tous les champs");
  } else {
    const response = await fetch(FIREBASE + "articles.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Erreur : ", data.message);
    }
    // on vide le cache de la page /blog pour la remettre à jour
    revalidatePath("/blog");
  }
}
