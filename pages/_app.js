import Header from "../components/Content/Header/Header";
import ThreeScene from "../components/three/ThreeScene";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ThreeScene />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
