import Layout from "../components/Layout/Layout";
import {
  Box,
  Button,
  Heading,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { IoLogoTiktok, IoLogoInstagram, IoLogoWechat } from "react-icons/io5";
import { AiOutlineWeibo } from "react-icons/ai";
import Paragraph from "../components/Content/Paragraph/Paragraph";
import { BioSection, BioYear } from "../components/Content/Paragraph/Bio";
import {
  GridItem,
  WorkGridItem,
} from "../components/Content/Paragraph/GridItem";
import thumbInkdrop from "../public/images/index/albumPic2_helloKitty.jpg";
import thumbYouTube from "../public/images/index/albumPic3_helloKitty.jpg";
import albumPic10_helloKitty from "../public/images/index/albumPic10_helloKitty.jpg";

export default function Home() {
  return (
    <Layout title="主页">
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
      <Heading as="h3" variant="section-title">
        介绍
      </Heading>
      <Paragraph>
        尊重他人 1.尊重他人是一个人内在修养的外在表现
        2.每个人都是有尊严的个体都希望得到他人的尊重
        3.要想自己被尊重，先尊重别人🫡 .{" "}
        <NextLink href="/Works" passHref scroll={false} variant="text">
          <Link color="pink.200">查看原文</Link>
        </NextLink>
      </Paragraph>
      <Box align="center" my={4}>
        <NextLink href="/Works" passHref scroll={false}>
          <Button colorScheme="pink" variant="outline">
            我的作品
          </Button>
        </NextLink>
      </Box>
      {/*  */}
      {/* 介绍 */}
      {/*  */}
      <Heading as="h3" variant="section-title">
        介绍
      </Heading>
      <BioSection>
        <BioYear>2002</BioYear>
        出生在中国🇨🇳
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        高中毕业🎓
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        大学里学习: 室内设计 and 化妆
      </BioSection>
      <BioSection>
        <BioYear>2018 - </BioYear>
        我的化妆师生涯💋
      </BioSection>

      <Heading as="h3" variant="section-title" mr={0}>
        在网上找到我！
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
          <Button
            variant="ghost"
            colorScheme="pink"
            leftIcon={<IoLogoWechat />}
          >
            Ali3n0702
          </Button>
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

      <Box align="center" my={4}>
        <NextLink href="/Posts" passHref scroll={false}>
          <Button colorScheme="pink" variant="outline">
            火爆视频
          </Button>
        </NextLink>
      </Box>
    </Layout>
  );
}
