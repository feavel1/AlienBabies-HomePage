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
import { IoLogoTiktok, IoLogoInstagram, IoLogoWechat } from "react-icons/io5";
import { AiOutlineWeibo, AiOutlineLink } from "react-icons/ai";
import Parallax from "../components/Parallax";
import Layout from "../components/Layout/Layout";
import { BioSection, BioYear } from "../components/Content/Paragraph/Bio";

import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";

export default function Contact() {
  return (
    <Layout title="联系">
      {/* Alien Babies */}

      <Box my={8}>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1} mt={{ base: 4, md: 0 }}>
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
              <Image src={albumPic2} alt="Profile image" placeholder="blur" />
            </Box>
          </Box>

          <Box flexShrink={0} mt={4}>
            <Heading as="h1" variant="page-title">
              Alien Baby
            </Heading>
            <p>化妆艺术( 化妆师 / 服装 / 室内设计 )</p>
          </Box>
        </Box>

        <Heading as="h3" variant="section-title" align="center">
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

        <Heading as="h3" variant="section-title" align="center">
          社交平台
        </Heading>

        <List textAlign="left" mt={4}>
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
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="pink"
              leftIcon={<IoLogoWechat />}
            >
              alienbaby
            </Button>
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
}
