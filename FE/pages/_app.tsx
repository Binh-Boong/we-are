import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../src/styles/tailwind.css";
import "../src/styles/global.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="⚡️WE ARE⚡️, we are us, we find joy after tiring moments at work" />
        <meta name="keywords" content="aris, aris-vn, aris vn, we are, aris team, we team, we teams" />
        <meta name="author" content="BinhNA, We are members" />
        <meta name="generator" content="BinhNA v1.0.0" />
        <meta name="distribution" content="Global" />
        <meta name="subject" content="We are one team"></meta>
        <meta name="rating" content="General" />
        <meta property="og:title" content="💗 → WE ARE ® ← 💗" />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content="https://aris-vn.net/" />
        <meta property="og:image" content="https://aris-vn.net/we_show.jpg" />
        <meta property="og:description" content="We are a non-profit group. All for one goal of relieving stress after work. laugh more laugh. us of the present." />
        <meta property="og:site_name" content="WE ARE Co.,Ltd." />
        <meta property="fb:app_id" content="1559343007594130" />
        <title>WE ARE</title>
        <link rel="shortcut icon" href="/we_logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
