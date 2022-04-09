import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import customTheme from "../styles/theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      />
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
