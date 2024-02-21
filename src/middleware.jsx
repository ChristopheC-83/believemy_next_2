// se met dans src, pas dans app

import { NextResponse } from "next/server";

export default function middleware(request) {
  console.log(request);

  //   exemple : user authenticated ?
  let isAuthenticated = false;
  if (!isAuthenticated) {
    // navigate to login page
  }
  // si authticated, on laisse l'affichage de la requete se faire
  
  return NextResponse.next();
}
