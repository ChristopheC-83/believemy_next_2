export const metadata = {
    title: "le Blog",
    description: "Envie d'en savoir plus sur le développement web ? C'est par ici !",
  };


export default function layout({ children }) {
  return <div className="text-purple-400 bg-neutral-800">{children}</div>;
}
