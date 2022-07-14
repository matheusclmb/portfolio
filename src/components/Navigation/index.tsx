import { Cat } from "components/icons/cat";
import Image from "next/image";
import Link from "next/link";
import * as S from "./Navigation.style";

export function Navigation() {
  const links = [
    {
      label: "About Me",
      href: "#",
    },
    {
      label: "Projects",
      href: "#",
    },
    {
      label: "Social",
      href: "#",
    },
  ];
  return (
    <S.Header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-links">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </S.Header>
  );
}
