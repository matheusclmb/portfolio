import Image from "next/image";
import * as S from "./SocialInfo.style";

export const SocialInfo = () => {
  const socials = [
    {
      label: "Github",
      href: "https://github.com/matheusclmb",
      icon: "/imgs/github.svg",
    },
    {
      label: "Steam",
      href: "https://steamcommunity.com/id/persaiscrying/",
      icon: "/imgs/steam.svg",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matheusclmb/",
      icon: "/imgs/linkedin.svg",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/matheuscolomboc/",
      icon: "/imgs/instagram.svg",
    },
  ];

  return (
    <S.Header>
      <div className="social-container">
        {socials.map((social) => (
          <div className="social-link">
            <a href={social.href} target="_blank">
              <h2>{social.label}</h2>
              <Image src={social.icon} width="80px" height="80px"></Image>
            </a>
          </div>
        ))}
      </div>
    </S.Header>
  );
};
