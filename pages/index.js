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
import { IoLogoTiktok, IoLogoInstagram } from "react-icons/io5";
import { AiOutlineWeibo } from "react-icons/ai";
import Paragraph from "../components/Content/Paragraph/Paragraph";
import {
  GridItem,
  WorkGridItem,
} from "../components/Content/Paragraph/GridItem";
import thumbInkdrop from "../public/images/index/image.webp";
import thumbYouTube from "../public/images/index/image2.webp";
import albumPic10_helloKitty from "../public/apple-touch-icon.jpg";

export default function Home() {
  return (
    <Layout title="主页">
      {/* Head */}
      <Box display={{ md: "flex" }} my={10}>
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
      {/* 介绍 */}
      <Heading as="h3" variant="section-title" textAlign="left">
        自我介绍
      </Heading>
      <Paragraph>我是一名来自深圳的化妆师,</Paragraph>
      <Paragraph>为自己的工作负责, </Paragraph>{" "}
      <Paragraph>帮助有需要的人,</Paragraph>
      <Paragraph>
        <NextLink
          href="https://baike.baidu.com/item/%E9%A9%AC%E5%85%8B%E6%80%9D%E4%B8%BB%E4%B9%89%E5%93%B2%E5%AD%A6/165367?fr=aladdin"
          passHref
          scroll={false}
          variant="text"
        >
          <Link color="pink.300" target="_blank">
            查看原文.
          </Link>
        </NextLink>
      </Paragraph>
      <Box align="center" my={4}>
        <NextLink href="/Works" passHref scroll={false}>
          <Button colorScheme="pink">我的作品</Button>
        </NextLink>
      </Box>
      {/* 联系 */}
      <Heading as="h3" variant="section-title" mr={0} textAlign="lleft">
        如何联系我？
      </Heading>
      <List textAlign="left">
        <ListItem>
          <Link href="https://v.douyin.com/FRdVhqo/" target="_blank">
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
      <Box align="center" my={6}>
        <NextLink href="/Contact" passHref scroll={false}>
          <Button colorScheme="pink">联系方式</Button>
        </NextLink>
      </Box>
      {/* Grid */}
      <SimpleGrid columns={[1, 1, 2]} gap={6} mt={3}>
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
      <Box align="center" my={6}>
        <NextLink href="/Posts" passHref scroll={false}>
          <Button colorScheme="pink">帖子</Button>
        </NextLink>
      </Box>
    </Layout>
  );
}
