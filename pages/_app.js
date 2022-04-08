import Footer from "../components/Content/Footer/Footer";
import Header from "../components/Content/Header/Header";
import ThreeScene from "../components/three/ThreeScene";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
