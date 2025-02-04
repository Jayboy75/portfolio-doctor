import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';
import DatasetContextProvider from '../data/data-context';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DatasetContextProvider>
      <Layout>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </DatasetContextProvider>
  );
}
