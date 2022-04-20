import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";
import albumPic3 from "../public/images/album/albumPic5_helloKitty.jpg";
import albumPic4 from "../public/images/album/albumPic6_helloKitty.jpg";
import albumPic5 from "../public/images/album/albumPic7_helloKitty.jpg";
import albumPic6 from "../public/images/album/albumPic8_helloKitty.jpg";
import albumPic9 from "../public/images/album/albumPic9_helloKitty.jpg";

function Parallax({ speed, children }) {
  const { scrollYProgress } = useViewportScroll();

  const yValue = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ y: yValue }}
    >
      {children}
    </motion.div>
  );
}

export default function Works() {
  return (
    <Layout title="作品">
      <Heading
        as="h3"
        fontSize={30}
        mt="50%"
        mb="50%"
        textAlign="center"
        color="#880E4F"
      >
        <Parallax speed={-4}>化妆作品</Parallax>
        <Parallax speed={10}>↓</Parallax>
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} spacing={8} mb="4">
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic9} title="可爱">
            Cute Make-up
          </WorkGridItem>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2]} spacing={8} mb="4">
        <WorkGridItem id="no1" thumbnail={albumPic2} title="哥特">
          Goth Make-up
        </WorkGridItem>

        <WorkGridItem id="no1" thumbnail={albumPic3} title="冷酷">
          Cold and Cool Make-up
        </WorkGridItem>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={4}>
        <WorkGridItem id="no1" thumbnail={albumPic4} title="婚礼">
          Wedding Make-up
        </WorkGridItem>

        <WorkGridItem id="no1" thumbnail={albumPic5} title="各种眼妆">
          Eyes Make-up
        </WorkGridItem>
        <WorkGridItem id="no1" thumbnail={albumPic6} title="服装">
          Clothes and other
        </WorkGridItem>
      </SimpleGrid>
    </Layout>
  );
}
