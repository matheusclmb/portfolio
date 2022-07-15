import { Loading } from "components/Loading";
import { Header } from "components/MainHeader";
import { Navigation } from "components/Navigation";
import type { NextPage } from "next";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {loading && <Loading />}

      <div>
        <div className="spline-wrapper">
          <Spline
            autoRender
            scene="https://prod.spline.design/LPOT3zf8GdsiNsZo/scene.splinecode"
          />
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Home;
