import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import NextLink from "next/link";

import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";

export default function Album() {
  return (
    <Layout title="相册">
      <Heading
        as="h3"
        fontSize={30}
        textAlign="center"
        color="#880E4F"
        mt="45%"
        mb="60%"
      >
        <Parallax speed={-4}>相册</Parallax>
        <Parallax speed={3}>↓</Parallax>
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} spacing={8} mb="60%">
        <WorkGridItem id="no1" thumbnail={albumPic2} title="纪念活动的照片">
          Memories
        </WorkGridItem>

        <WorkGridItem id="no1" thumbnail={albumPic2} title="一些照片">
          some photos
        </WorkGridItem>
      </SimpleGrid>
      <Box align="center" my="50px">
        <NextLink href="/Contact" passHref scroll={false}>
          <Button colorScheme="pink">联系方式</Button>
        </NextLink>
      </Box>
    </Layout>
  );
}
