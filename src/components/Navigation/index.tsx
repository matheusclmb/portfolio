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
        <div className="logo-info">
          <Cat size="20px" />
          <Link href="/" passHref>
            <a>
              <h2>CLMB .dev</h2>
            </a>
          </Link>
        </div>
        <ul>
          {links.map((link) => (
            <li>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </S.Header>
  );
}
