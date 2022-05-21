import { AnimatePresence } from "framer-motion";
import Header from "../components/Content/Header/Header";
import ThreeScene from "../components/three/ThreeScene";
import { Chakra } from "../styles/Chakra";

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ThreeScene />
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Chakra>
  );
}

export default MyApp;
