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
import { AiOutlineWeibo } from "react-icons/ai";
import Parallax from "../components/Parallax";
import Layout from "../components/Layout/Layout";
import { BioSection, BioYear } from "../components/Content/Paragraph/Bio";

import albumPic2 from "../public/images/album/albumPic4_helloKitty.jpg";

export default function Contact() {
  return (
    <Layout title="联系">
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title">
            联系方式
          </Heading>
          <p>网络艺术( 化妆师 / 可爱 / 室内设计 )</p>
        </Box>
        <Parallax speed={-0.5}>
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
              <Image src={albumPic2} alt="Profile image" placeholder="blur" />
            </Box>
          </Box>
        </Parallax>
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

      <List textAlign="right">
        <ListItem>
          <Link
            href="https://www.douyin.com/user/MS4wLjABAAAABZed-RkD7nT5SHozVpyjQJmhZFNXQWWXrh6oTn_sX9E"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="pink"
              rightIcon={<IoLogoTiktok />}
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
              rightIcon={<IoLogoInstagram />}
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
              rightIcon={<AiOutlineWeibo />}
            >
              海洋细菌草莓糖
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Button
            variant="ghost"
            colorScheme="pink"
            rightIcon={<IoLogoWechat />}
          >
            alienbaby
          </Button>
        </ListItem>
      </List>
    </Layout>
  );
}
