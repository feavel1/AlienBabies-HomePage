import Head from "next/head";
import DarkModeSwitch from "../components/Content/DarkModeSwitch/DarkModeSwitch";
import Footer from "../components/Content/Footer/Footer";
import Header from "../components/Content/Header/Header";
import ThreeScene from "../components/three/ThreeScene";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alien Babies</title>
        <meta name="description" content="Created by FEAVEL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ThreeScene />
      <Footer />
    </>
  );
}
