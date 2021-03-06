import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collection from "../components/Collection";
import DownloadApp from "../components/DownloadApp";
import FooterVinID from "../components/FooterVinID";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Collection />

      <DownloadApp />

      <FooterVinID />
    </>
  );
}
