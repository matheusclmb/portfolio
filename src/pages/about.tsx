import { FavStack } from "components/FavStack";
import { MainAbout } from "components/MainAbout";
import { Header } from "components/MainHeader";

import { Navigation } from "components/Navigation";
import { Technologies } from "components/Technologies";
import type { NextPage } from "next";
import { useEffect } from "react";

const About: NextPage = () => {
  useEffect(() => {
    document.title = "About | CLMB";
  }, []);

  return (
    <>
      <div>
        <Navigation />
        <MainAbout />
        <Technologies />
        <FavStack />
      </div>
    </>
  );
};

export default About;
