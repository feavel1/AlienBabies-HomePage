import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import customTheme from "../styles/theme";
import Header from "../components/Content/Header/Header";
import ThreeScene from "../components/three/ThreeScene";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
          initialColorMode: "dark",
        }}
      />
      <Header />
      <ThreeScene />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
