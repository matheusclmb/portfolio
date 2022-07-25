import Image from "next/image";
import * as S from "./SocialInfo.style";

export const SocialInfo = () => {
  const socials = [
    {
      label: "Github",
      href: "https://github.com/matheusclmb",
      icon: "/imgs/sticker-github.svg",
    },
    {
      label: "Steam",
      href: "https://steamcommunity.com/id/persaiscrying/",
      icon: "/imgs/sticker-steam.svg",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matheusclmb/",
      icon: "/imgs/sticker-linkedin.svg",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/matheuscolomboc/",
      icon: "/imgs/sticker-instagram.svg",
    },
  ];

  return (
    <S.Header>
      <div className="social-container">
        {socials.map((social) => (
          <div key={social.label} className="social-link">
            <a href={social.href} target="_blank" rel="noreferrer">
              <h2>{social.label}</h2>
              <Image src={social.icon} width="80px" height="80px"></Image>
            </a>
          </div>
        ))}
      </div>
    </S.Header>
  );
};
