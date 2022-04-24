import Layout from "../components/Layout/Layout";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import Parallax from "../components/Parallax";
import NextLink from "next/link";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";

import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";
import albumPic9 from "../public/images/album/albumPic9_helloKitty.jpg";

export default function Posts() {
  return (
    <Layout title="帖子">
      <Heading as="h3" fontSize={30} textAlign="center" mt="45%" mb="45%">
        <Parallax speed={-1}>我的帖子</Parallax>
        <Parallax speed={-3}>↓</Parallax>
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mt="50%" mb={200}>
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic2} title="火辣男朋友">
            Hot Boy Friend
          </WorkGridItem>
        </Box>
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic2} title="出去玩啦">
            Went outside
          </WorkGridItem>
        </Box>
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic2} title="可爱">
            abc
          </WorkGridItem>
        </Box>
      </SimpleGrid>

      <Parallax speed={-2}>
        <Heading as="h3" variant="section-title" align="center">
          走秀
        </Heading>
      </Parallax>

      <SimpleGrid columns={[1, 2, 2]} spacing={8} mb={200}>
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic2} title="红钻">
            Red Diamond
          </WorkGridItem>
        </Box>
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic2} title="亚文化 · 油">
            Oil y2k Culture
          </WorkGridItem>
        </Box>
      </SimpleGrid>

      <Parallax speed={-1.2}>
        <Heading as="h3" variant="section-title" align="center">
          与其他作品
        </Heading>
      </Parallax>

      <SimpleGrid columns={[1, 1, 1]} spacing={8} mb="10%">
        <Box mb={4}>
          <WorkGridItem id="Cute" thumbnail={albumPic2} title="可爱">
            Cute Make-up
          </WorkGridItem>
        </Box>
      </SimpleGrid>
      <Box align="center" my="10%">
        <NextLink href="/Album" passHref scroll={false}>
          <Button colorScheme="pink">我的相册</Button>
        </NextLink>
      </Box>
    </Layout>
  );
}
