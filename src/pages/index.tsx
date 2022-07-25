import { Loading } from "components/Loading";
import { Header } from "components/MainHeader";
import { Navigation } from "components/Navigation";
import type { NextPage } from "next";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const Home: NextPage = () => {
  useEffect(() => {
    document.title = "CLMB";
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <div className="spline-wrapper">
          <Image src="/imgs/cat-rain.gif" width="450px" height="220px"></Image>
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Home;
