"use client";

import { useState } from "react";

export default function Counter() {
  function clickMe() {
    setCount((prev) => prev + 1);
    console.log("clic !");
  }

  // state et function necessitent "use client" pour fonctionner
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center mr-3">
      <p className="text-2xl">{count}</p>
      <button
        className="px-4 py-2 m-2 font-bold bg-blue-500 rounded hover:bg-blue-700"
        onClick={clickMe}
      >
        Click Me !
      </button>
    </div>
  );
}
