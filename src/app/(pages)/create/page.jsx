/* eslint-disable react/no-unescaped-entities */
"use client";

import { create } from "@/actions/create-article";
import Button from "@/components/postForm/Button";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Create() {
  const router = useRouter();
  const title = useRef("");
  const content = useRef("");
  const form = useRef("");

  const [enabled, setEnabled] = useState(true);

  async function prepareNewArticle() {
    setEnabled(false);
    try {
      await create(title.current.value, content.current.value);
      toast.success("Article créé avec succès");
      form.current.reset();
      setTimeout(() => {
        setEnabled(true);
      }, 1000);
    } catch (e) {
      toast.error(e.message);
      setTimeout(() => {
        setEnabled(true);
      }, 1000);
      return
    }
    router.push("/blog");
  }
  return (
    <div className="w-full p-4">
      <h1 className="text-3xl text-center text-amber-400">
        Création d'un post
      </h1>
      <div className="w-[500px] mx-auto mt-10 border-2 border-amber-200 rounded-lg p-4 bg-slate-700">
        <form ref={form} action={prepareNewArticle}>
          <div className="">
            <input
              type="text"
              placeholder="title"
              className="input-custom"
              ref={title}
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Contenu du post"
              className="input-custom"
              rows="5"
              ref={content}
            ></textarea>
          </div>
          <div className="">
            <Button enabled={enabled}>Envoyer</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
