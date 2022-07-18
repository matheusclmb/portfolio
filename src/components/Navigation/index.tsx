import { Cat } from "components/icons/cat";
import Image from "next/image";
import Link from "next/link";
import * as S from "./Navigation.style";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

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
      href: "/projects",
    },
    {
      label: "Social",
      href: "/social",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <S.Header>
      <nav>
        <div className="desktop-nav">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} passHref>
                  <a className="nav-links">{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-container">
          <button className="nav-btn" onClick={() => setOpen(!isOpen)}>
            {" "}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
          {isOpen && (
            <div className="mobile-nav">
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} passHref>
                      <a className="nav-links">{link.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </S.Header>
  );
}
