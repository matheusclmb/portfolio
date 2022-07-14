import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "components/MainHeader";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [State, setState] = useState(0);

  useEffect(() => {
    setState(1);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />

      <div className="spline-wrapper">
        <Spline
          autoRender
          scene="https://prod.spline.design/RnUQWcvY2nYesoSA/scene.splinecode"
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
