import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";
import albumPic1 from "../public/images/album/albumPic1_helloKitty.jpg";
import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";
import albumPic3 from "../public/images/album/albumPic5_helloKitty.jpg";
import albumPic4 from "../public/images/album/albumPic6_helloKitty.jpg";
import albumPic5 from "../public/images/album/albumPic7_helloKitty.jpg";
import albumPic6 from "../public/images/album/albumPic8_helloKitty.jpg";
import albumPic9 from "../public/images/album/albumPic9_helloKitty.jpg";

export default function Works() {
  return (
    <Layout title="作品">
      <Heading as="h3" fontSize={30} mb={4} textAlign="center" color="pink.500">
        化妆作品
      </Heading>

      {/* <WorkGridItem id="Cute" thumbnail={albumPic9} title="可爱">
          Cute Make-up
        </WorkGridItem>

        <SimpleGrid columns={[1, 1, 2]} spacing={8} mb={4}>
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
        </SimpleGrid> */}
    </Layout>
  );
}
