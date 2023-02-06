import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css'
import Layout from "../Components/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Layout>
      <Head>
        <title>WTX - Tech challenge</title>
        <meta name="description" content="Generated by WTX team" />
        <link rel="icon" href="/favicon.png" />
      </Head>
        <div id="modal-root"></div>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://wtx.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by WTX
        </a>
      </footer>
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
