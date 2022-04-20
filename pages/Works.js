import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";

import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";
import albumPic3 from "../public/images/album/albumPic5_helloKitty.jpg";
import albumPic4 from "../public/images/album/albumPic6_helloKitty.jpg";
import albumPic5 from "../public/images/album/albumPic7_helloKitty.jpg";
import albumPic6 from "../public/images/album/albumPic8_helloKitty.jpg";
import albumPic9 from "../public/images/album/albumPic9_helloKitty.jpg";

export default function Works() {
  return (
    <Layout title="作品">
      <Heading
        as="h3"
        fontSize={30}
        textAlign="center"
        color="#880E4F"
        mt="60%"
        mb="60%"
      >
        <Parallax speed={-10}>化妆作品</Parallax>
        <Parallax speed={-7}>↓</Parallax>
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} spacing={8} mt="50%" mb="60%">
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic9} title="可爱">
            Cute Make-up
          </WorkGridItem>
        </Box>
      </SimpleGrid>

      <Parallax speed={-2}>
        <Heading as="h3" variant="section-title" align="center" mt="50%">
          不同类型
        </Heading>
      </Parallax>

      <SimpleGrid columns={[1, 1, 2]} spacing={8} mb="60%">
        <WorkGridItem id="no1" thumbnail={albumPic2} title="哥特">
          Goth Make-up
        </WorkGridItem>

        <WorkGridItem id="no1" thumbnail={albumPic3} title="冷酷">
          Cold and Cool Make-up
        </WorkGridItem>
      </SimpleGrid>

      <Parallax speed={-1.3}>
        <Heading as="h3" variant="section-title" align="center" mt="50%">
          其他化妆
        </Heading>
      </Parallax>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
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
