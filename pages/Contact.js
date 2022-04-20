import { Box, Button, Heading, ListItem, SimpleGrid } from "@chakra-ui/react";
import { IoLogoTiktok, IoLogoInstagram, IoLogoWechat } from "react-icons/io5";
import Layout from "../components/Layout/Layout";
import { BioSection, BioYear } from "../components/Content/Paragraph/Bio";

export default function Contact() {
  return (
    <Layout title="联系">
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

      <Button variant="ghost" colorScheme="pink" leftIcon={<IoLogoWechat />}>
        Ali3n0702
      </Button>
    </Layout>
  );
}
