import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";
import NextLink from "next/link";

import oilCover from "../public/images/works/1-oil/IMG_4167.jpg";
import redCover from "../public/images/works/2-red/IMG_4299.jpg";
import darkCover from "../public/images/works/3-dark/IMG_4265.jpg";
import metalCover from "../public/images/works/4-metal/IMG_4259.jpg";
import helloweenCover from "../public/images/works/5-helloween/IMG_4267.jpg";

export default function Works() {
  return (
    <Layout title="作品">
      <Heading as="h3" fontSize={30} textAlign="center" mt="45%" mb="40%">
        <Parallax speed={-1}>化妆作品</Parallax>
        <Parallax speed={-3}>↓</Parallax>
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} spacing={8} mt="50%" mb="40%">
        <WorkGridItem id="Oil" thumbnail={oilCover} title="Oil 亞人大逃殺">
          Oil y2k live show
        </WorkGridItem>

        <WorkGridItem id="Red-Diamond" thumbnail={redCover} title="红钻">
          Red Diamond
        </WorkGridItem>
      </SimpleGrid>

      <Parallax speed={-2}>
        <Heading as="h3" variant="section-title" align="center">
          活动化妆
        </Heading>
      </Parallax>

      <SimpleGrid columns={[1, 2, 2]} spacing={8} mb="30%">
        <WorkGridItem id="Metal" thumbnail={metalCover} title="金属">
          Metal
        </WorkGridItem>

        <WorkGridItem id="Helloween" thumbnail={helloweenCover} title="万圣节">
          Helloween
        </WorkGridItem>
      </SimpleGrid>

      <Parallax speed={-0.9}>
        <Heading as="h3" variant="section-title" align="center">
          其他作品
        </Heading>
      </Parallax>
      <SimpleGrid columns={[1, 1, 1]} spacing={8}>
        <Box mb={4}>
          <WorkGridItem
            id="Dark-Birds-Fly"
            thumbnail={darkCover}
            title="专辑封面"
          >
            Album Cover
          </WorkGridItem>
        </Box>
      </SimpleGrid>
      <Box align="center" my="50px">
        <NextLink href="/Posts" passHref scroll={false}>
          <Button colorScheme="pink">我的帖子</Button>
        </NextLink>
      </Box>
    </Layout>
  );
}
