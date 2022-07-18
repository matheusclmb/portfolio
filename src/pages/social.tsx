import { Navigation } from "components/Navigation";
import { ProjectInfo } from "components/ProjectInfo";
import { SocialInfo } from "components/SocialInfo";
import type { NextPage } from "next";
import { useEffect } from "react";

const Social: NextPage = () => {
  useEffect(() => {
    document.title = "Social | CLMB";
  }, []);

  return (
    <>
      <div>
        <Navigation />
        <SocialInfo />
      </div>
    </>
  );
};

export default Social;
