import Link from "next/link";

export default function LinkComponent({ href, children }) {
  return (
    <li className="header-link">
      <Link href={href}>{children}</Link>
    </li>
  );
}
