import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [State, setState] = useState(0);

  useEffect(() => {
    setState(1);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
