import Layout from "../components/Layout/Layout";
import {
  Box,
  Button,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { IoLogoTiktok, IoLogoInstagram, IoLogoWechat } from "react-icons/io5";
import { AiOutlineWeibo } from "react-icons/ai";
import Paragraph from "../components/Content/Paragraph/Paragraph";
import {
  GridItem,
  WorkGridItem,
} from "../components/Content/Paragraph/GridItem";
import Parallax from "../components/Parallax";
import thumbInkdrop from "../public/images/index/albumPic2_helloKitty.jpg";
import thumbYouTube from "../public/images/index/albumPic3_helloKitty.jpg";
import albumPic10_helloKitty from "../public/images/index/albumPic10_helloKitty.jpg";

export default function Home() {
  return (
    <Layout title="主页">
      {/* Head */}
      <Parallax speed={-1.5}>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title">
              Alien Baby
            </Heading>
            <p>网络艺术( 化妆师 / 可爱 / 室内设计 )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="100%"
              overflow="hidden"
            >
              <Image
                src={albumPic10_helloKitty}
                alt="Profile image"
                placeholder="blur"
              />
            </Box>
          </Box>
        </Box>
      </Parallax>

      {/* 介绍 */}
      <Parallax speed={-1.25}>
        <Heading as="h3" variant="section-title">
          个人介绍
        </Heading>
        <Paragraph>
          我是一名来自深圳的化妆师，为自己的工作负责，帮助有需要的人。善于和人交流，对每一份🫡
          .{" "}
          <NextLink href="/Works" passHref scroll={false} variant="text">
            <Link color="pink.200">查看原文</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/Works" passHref scroll={false}>
            <Button colorScheme="pink">我的作品</Button>
          </NextLink>
        </Box>
      </Parallax>

      {/* 联系 */}
      <Parallax speed={-1}>
        <Heading as="h3" variant="section-title" mr={0}>
          如何联系我？
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.douyin.com/user/MS4wLjABAAAABZed-RkD7nT5SHozVpyjQJmhZFNXQWWXrh6oTn_sX9E"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoTiktok />}
              >
                Ali3nbabies
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/iloveali3nbabies/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoInstagram />}
              >
                iloveali3nbabies
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://weibo.com/u/5537617622" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<AiOutlineWeibo />}
              >
                海洋细菌草莓糖
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/Contact" passHref scroll={false}>
            <Button colorScheme="pink">联系方式</Button>
          </NextLink>
        </Box>
      </Parallax>

      {/* Grid */}
      <Parallax speed={-0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={3}>
          <WorkGridItem id="" title="我的作品" thumbnail={thumbYouTube}>
            Photo Album
          </WorkGridItem>

          <GridItem
            href="https://feavel.com"
            title="我最可爱的男朋友"
            thumbnail={thumbInkdrop}
          >
            feavel.com
          </GridItem>
        </SimpleGrid>
        <Box align="center" my={2}>
          <NextLink href="/Posts" passHref scroll={false}>
            <Button colorScheme="pink">帖子</Button>
          </NextLink>
        </Box>
      </Parallax>
    </Layout>
  );
}
