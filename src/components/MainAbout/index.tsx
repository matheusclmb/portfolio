import * as S from "./MainAbout.style";
import Image from "next/image";

export const MainAbout = () => {
  return (
    <S.MainAbout>
      <div className="about-parent">
        <div className="about-wrapper">
          <Image
            src="/imgs/clmb.jfif"
            width="10px"
            height="10px"
            layout="responsive"
            alt="CLMB"
            className="profile-image"
          ></Image>
        </div>
        <div className="info-wrapper">
          <h1>About me</h1>
          <p>
            Name is Matheus Colombo. 24 years old. Half-italian/Half-Brazilian.
            <br />
            <br />
            I'm driven by curiosity. Everything I learned it's because something
            sparked my interest and I pursued it until I got what I wanted. I'm
            a fast learner with no problems diving into new technology.
            <br />
            <br />
            Aspiring to be a full-stack developer, currently focused on back-end
            using Python and Django/Django REST. In a near future i want to
            learn and experiment using only JavaScript (NextJS & NodeJS). I'm
            always looking to expand my knowledge and refine my skills.
          </p>
        </div>
      </div>
    </S.MainAbout>
  );
};
