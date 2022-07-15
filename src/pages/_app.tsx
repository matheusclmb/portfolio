import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import React, { useEffect, useState } from "react";
import { Header } from "components/MainHeader";
import { Loading } from "components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <GlobalStyle />
      {loading && <Loading />}
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
