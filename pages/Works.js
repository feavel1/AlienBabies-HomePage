import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";
import NextLink from "next/link";

import albumPic1 from "../public/images/works/image1.webp";

import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";
import albumPic3 from "../public/images/album/albumPic5_helloKitty.jpg";
import albumPic4 from "../public/images/album/albumPic6_helloKitty.jpg";
import albumPic5 from "../public/images/album/albumPic7_helloKitty.jpg";
import albumPic6 from "../public/images/album/albumPic8_helloKitty.jpg";
import albumPic9 from "../public/images/album/albumPic9_helloKitty.jpg";

import oilCover from "../public/images/works/1-oil/IMG_4167.jpg";
import redCover from "../public/images/works/2-red/IMG_1042.jpg";
import darkCover from "../public/images/works/3-dark/IMG_4265.jpg";
import metalCover from "../public/images/works/4-metal/IMG_4259.jpg";
import helloweenCover from "../public/images/works/5-helloween/IMG_4267.jpg";
import hairCover from "../public/images/works/6-hair/IMG_4273.jpg";

export default function Works() {
  return (
    <Layout title="作品">
      <Heading as="h3" fontSize={30} textAlign="center" mt="45%" mb="40%">
        <Parallax speed={-1}>化妆作品</Parallax>
        <Parallax speed={-3}>↓</Parallax>
      </Heading>

      <SimpleGrid columns={[2, 2, 2]} spacing={8} mt="50%" mb="40%">
        <WorkGridItem id="Oil" thumbnail={oilCover} title="Oil 亞人大逃殺">
          Oil y2k live show
        </WorkGridItem>

        <WorkGridItem id="Red-Diamond" thumbnail={redCover} title="红钻">
          Red Diamond
        </WorkGridItem>
      </SimpleGrid>

      <Parallax speed={-2}>
        <Heading as="h3" variant="section-title" align="center">
          专辑封面
        </Heading>
      </Parallax>

      <SimpleGrid columns={[1, 1, 1]} spacing={8} mb="30%">
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={darkCover} title="音樂人专辑封面">
            Album Cover
          </WorkGridItem>
        </Box>
      </SimpleGrid>

      <Parallax speed={-0.9}>
        <Heading as="h3" variant="section-title" align="center">
          其他作品
        </Heading>
      </Parallax>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <WorkGridItem id="no1" thumbnail={metalCover} title="金属">
          Metal
        </WorkGridItem>

        <WorkGridItem id="no1" thumbnail={helloweenCover} title="万圣节">
          Helloween
        </WorkGridItem>
        <WorkGridItem id="no1" thumbnail={hairCover} title="染头发">
          hair dye
        </WorkGridItem>
      </SimpleGrid>
      <Box align="center" my="50px">
        <NextLink href="/Posts" passHref scroll={false}>
          <Button colorScheme="pink">我的帖子</Button>
        </NextLink>
      </Box>
    </Layout>
  );
}
