import { FavStack } from "components/FavStack";
import { MainAbout } from "components/MainAbout";
import { Header } from "components/MainHeader";

import { Navigation } from "components/Navigation";
import { ProjectInfo } from "components/ProjectInfo";
import { Technologies } from "components/Technologies";
import type { NextPage } from "next";
import { useEffect } from "react";

const Projects: NextPage = () => {
  useEffect(() => {
    document.title = "Projects | CLMB";
  }, []);

  return (
    <>
      <div>
        <Navigation />
        <ProjectInfo />
      </div>
    </>
  );
};

export default Projects;
