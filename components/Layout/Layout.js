import classes from "./Layout.module.css";
import { motion } from "framer-motion";
import Footer from "../Content/Footer/Footer";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 50 },
};

function Layout(p) {
  return (
    <>
      <Head>
        <title>{p.title} - Alien Baby</title>
        <meta name="twitter:title" content={p.title} />
        <meta property="og:title" content={p.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={p.title} />
        <meta name="author" content="Feavel" />
        <link rel="apple-touch-icon" href="apple-touch-icon.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Feavel18" />
        <meta name="twitter:creator" content="@Feavel18" />
        <meta name="twitter:image" content="/card.png" />
      </Head>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.8, type: "easeInOut" }}
        style={{ position: "relative" }}
        className={classes.container}
      >
        <Container maxW="lg">
          {p.children}
          <Footer />
        </Container>
      </motion.div>
    </>
  );
}

export default Layout;
