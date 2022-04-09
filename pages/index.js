import Layout from "../components/Layout/Layout";
import { Box, Image, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Paragraph from "../components/Content/Paragraph/Paragraph";
import Link from "next/link";
import { BioSection, BioYear } from "../components/Content/Paragraph/bio";

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
                src="/images/albumPic10_helloKitty.jpg"
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
        <Link href="/works/dark-birds-fly" scroll={false}>
          <span style={{ color: "black" }}>查看原文</span>
        </Link>
      </Paragraph>
      <Box align="center" my={4}>
        <Link href="/Works" scroll={false}>
          <Button colorScheme="pink">My portfolio</Button>
        </Link>
      </Box>
      {/*  */}
      {/* 介绍 */}
      {/*  */}
      <Heading as="h3" variant="section-title">
        Bio
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
        开始我的化妆师生涯💋
      </BioSection>
    </Layout>
  );
}
