

import LinkComponent from "./LinkComponent";
import Counter from "./Counter";

export default function Header() {


  const links = [
    {
      href: "/",
      label: "Accueil",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/about",
      label: "A propos",
    },
    {
      href: "/test_page",
      label: "TestPage",
    },
    {
      href: "/test_page_2",
      label: "TestPage2",
    },
    {
      href: "/create",
      label: "Création Post",
    },
  ];

  return (
    <div className="flex items-center justify-between my-4">
      <ul className="flex gap-4 m-4 ">
        {links.map((link, index) => (
          <LinkComponent key={index} href={link.href}>
            {link.label}
          </LinkComponent>
        ))}
      </ul>
    <Counter/>
    </div>
  );
}
