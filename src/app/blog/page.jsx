import { FIREBASE } from "@/actions/constantes";
import { Suspense } from "react";

export default async function BlogPage() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // version static side generation
  // toujours les mêmes articles / même nb proposés à chaque rafraichissement
  // autre pb, pour un blog par exemeple
  // si un article est mis à jour en DB, nous n'aurons jamais la MAJ sur notre site.
  //  il faut passer par ISG (Incremental Static Generation) pour régler ce pb
  const response = await fetch(
    `https://dummyjson.com/posts?limit=${randomNumber}`
  );
  const { posts } = await response.json();

  // version server side rendering
  // explique à next qu'on veut faire du rendu coté serveur, pas une page static
  // A chaque rafraichiseement, nous aurons bien une nouvelle liste d'articles / nb d'articles différent
  const response2 = await fetch(
    `https://dummyjson.com/posts?limit=${randomNumber}`,
    { cache: "no-store" }
  );
  const { posts: posts2 } = await response2.json();

  // version server side rendering avec revalidation : Incremental Static Generation
  // je veux une page static pour une UX fluide
  // mais je veux aussi que les données soient à jour toutes les X secondes
  // revalidation toutes les 5 secondes SSI la page est visitée !
  // si personne, pas de remise à jour !
  const response3 = await fetch(
    FIREBASE+"articles.json"
    // `https://dummyjson.com/posts?limit=${randomNumber}`,
    
  );
  const  data  = await response3.json();
  console.log(data)
  let posts3 = [];
  for (const key in data) {
    posts3.push({ id: key, ...data[key] });
  }
  console.log(posts3)

  return (
    <div>
      <h1 className="text-3xl">Liste des articles du blog</h1>
      <br />
      <div className="text-amber-200">
        <h2 className="text-2xl text-amber-400">Static side Generation</h2>
        <div className="flex flex-col gap-2 p-4">
          {posts.map((post) => (
            <div key={post.id}>
              <h2 className="text-2xl font-semi-bold">
                {post.id} - {post.title}
              </h2>
            </div>
          ))}
        </div>
        <br />
        <h2 className="text-2xl text-amber-400">Server Side Rendering</h2>
        <div className="flex flex-col gap-2 p-4">
          {posts2.map((post2) => (
            <div key={post2.id}>
              <h2 className="text-2xl font-semi-bold">
                {post2.id} - {post2.title}
              </h2>
            </div>
          ))}
        </div>
        <br />
        <h2 className="text-2xl text-amber-400">
          Incremental Static Generation
        </h2>
        <div className="flex flex-col gap-2 p-4">
          {posts3.map((post3, index) => (
            <div key={post3.id}>
              <h2 className="text-2xl font-semi-bold">
                {index+1} - {post3.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
