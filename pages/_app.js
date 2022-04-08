import ThreeScene from "../components/three/ThreeScene";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThreeScene />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
