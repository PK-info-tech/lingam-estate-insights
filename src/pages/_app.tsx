"use client";

import type { AppProps } from "next/app";
import { Providers } from "@/app/providers";
import "@/app/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;
