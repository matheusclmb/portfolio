import * as S from "./Navigation.style.ts";

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
    <>
      <S.Header>
        <nav>
          <ul>
            {links.map((link) => (
              <li>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </S.Header>
    </>
  );
}
