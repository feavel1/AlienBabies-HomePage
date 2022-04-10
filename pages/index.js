import Layout from "../components/Layout/Layout";
import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  IoLogoTiktok,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoWechat,
} from "react-icons/io5";

import { motion } from "framer-motion";
import Paragraph from "../components/Content/Paragraph/Paragraph";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/Content/Paragraph/bio";
import { GridItem } from "../components/Content/Paragraph/GridItem";
import thumbInkdrop from "../public/images/index/albumPic2_helloKitty.jpg";
import thumbYouTube from "../public/images/index/albumPic3_helloKitty.jpg";
import { AiOutlineWeibo } from "react-icons/ai";

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
            <motion.div
              animate={{ rotate: [0, 45, 0, -45, 0] }}
              transition={{ duration: 5 }}
            >
              <Image
                src="/images/index/albumPic10_helloKitty.jpg"
                alt="Profile image"
                width="100%"
                height="100%"
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Heading as="h3" variant="section-title">
        个人目标
      </Heading>
      <Paragraph>
        尊重他人 1.尊重他人是一个人内在修养的外在表现
        2.每个人都是有尊严的个体都希望得到他人的尊重
        3.要想自己被尊重，先尊重别人🫡 .{" "}
        <NextLink href="/works/dark-birds-fly" scroll={false} variant="text">
          查看原文
        </NextLink>
      </Paragraph>
      <Box align="center" my={4}>
        <NextLink href="/works" scroll={false}>
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
        出生在中国🇨🇳，父亲是一名艺术家，母亲是一名艺术家。
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        高中毕业🎓
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        在大学里学习: 室内设计🏡 and 化妆💋
      </BioSection>
      <BioSection>
        <BioYear>2022 - </BioYear>
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
        <GridItem
          href="https://music.163.com/#/playlist?id=5085085377"
          title="我的作品"
          thumbnail={thumbYouTube}
        >
          Photo Album
        </GridItem>
        <GridItem
          href="https://feavel.com"
          title="我最可爱的男朋友"
          thumbnail={thumbInkdrop}
        >
          feavel.com
        </GridItem>
      </SimpleGrid>

      <Box align="center" my={4}>
        <NextLink href="/posts" scroll={false}>
          <Button colorScheme="pink" variant="outline">
            火爆视频
          </Button>
        </NextLink>
      </Box>
    </Layout>
  );
}
