import Layout from "../components/Layout/Layout";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import Parallax from "../components/Parallax";
import NextLink from "next/link";
import {
  WorkGridItem,
  GridItem,
} from "../components/Content/Paragraph/GridItem";

import PostPic1 from "../public/images/posts/1-daniil/dan.jpg";
import PostPic2 from "../public/images/posts/2-cool/IMG_4054.jpg";
import PostPic3 from "../public/images/posts/3-dark/IMG_4313.jpg";

export default function Posts() {
  return (
    <Layout title="帖子">
      <Heading as="h3" fontSize={30} textAlign="center" mt="45%" mb="45%">
        <Parallax speed={-1}>我的火热🔥帖子</Parallax>
        <Parallax speed={-3}>↓</Parallax>
      </Heading>
      <SimpleGrid columns={[1, 3, 3]} spacing={8} mt="30%">
        <Box mb={4}>
          <GridItem
            href="https://www.douyin.com/video/7073839728801484073?modeFrom=userPost&secUid=MS4wLjABAAAABZed-RkD7nT5SHozVpyjQJmhZFNXQWWXrh6oTn_sX9E"
            thumbnail={PostPic1}
            title="#恋爱日常 #cute"
          >
            最近是素颜糖🍬💕
          </GridItem>
        </Box>
        <Box mb={4}>
          <GridItem
            href="https://www.douyin.com/video/7092731450738380032?modeFrom=userPost&secUid=MS4wLjABAAAABZed-RkD7nT5SHozVpyjQJmhZFNXQWWXrh6oTn_sX9E"
            thumbnail={PostPic2}
            title="#女明星"
          >
            #浪漫不死 亞人类大逃杀第三名就是我！
          </GridItem>
        </Box>
        <Box mb={4}>
          <WorkGridItem
            href="https://www.douyin.com/video/7007036591206190371?modeFrom=userPost&secUid=MS4wLjABAAAABZed-RkD7nT5SHozVpyjQJmhZFNXQWWXrh6oTn_sX9E"
            thumbnail={PostPic3}
            title="#暗黑系"
          >
            #哥特 #亚文化 又是营业的一天
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
