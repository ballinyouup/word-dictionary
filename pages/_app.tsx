import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Words!</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
