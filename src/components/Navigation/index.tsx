import { Cat } from "components/icons/cat";
import Image from "next/image";
import Link from "next/link";
import * as S from "./Navigation.style";

export function Navigation() {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Projects",
      href: "#",
    },
    {
      label: "Social",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
  ];
  return (
    <S.Header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} passHref>
                <a className="nav-links">{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </S.Header>
  );
}
