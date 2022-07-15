import * as S from "./MainAbout.style";
import Image from "next/image";

export const MainAbout = () => {
  return (
    <S.MainAbout>
      <div className="about-parent">
        <div className="about-wrapper">
          <Image
            src="/imgs/clmb.jfif"
            width="300px"
            height="300px"
            layout="responsive"
            alt="CLMB"
            className="profile-image"
          ></Image>
        </div>
        <div className="info-wrapper">
          <h1>About me</h1>
          <p>
            Name is Matheus Colombo. Half Italian - Half Brazilian. Born and
            raised in Brazil and living in Europe since 2019. My first touch
            with a computer was very early in my life, around age 6, so ever
            since i've been stuck in my room behind my computer.
            <br />
            First time i heard about programming was when i was looking for
            cheats and hacks for games i used to play (Tibia, Lunia, Combat
            Arms, WoW, MapleStory & others). At the time i didn't know how
            everything worked, but i was stoked to get overpowered in the game.
            I learned about Databases (Mainly SQLite) creating pirated servers
            of Tibia and Mu Online. <br />
            In these many years i learned a lot about random things like Adobe
            PhotoShop, Adobe Premiere Pro, Davinci Resolve & FL Studio for
            random usage. <br />
            2020 arrived with COVID, i was bored of playing and staying at the
            same place everyday so i bought a course of basic Web Development
            and learned about it. I got so bored of it that i decided to quit
            for months. Until i met Python and been having fun ever since. I'm
            currently focused in Django and Django Rest Framework, but i'm
            learning SwiftUI, ReactJS and NextJS in my free time.
          </p>
        </div>
      </div>
    </S.MainAbout>
  );
};
