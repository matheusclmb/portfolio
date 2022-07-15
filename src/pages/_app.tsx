import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import React, { useEffect, useState } from "react";
import { Header } from "components/MainHeader";
import { Loading } from "components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
