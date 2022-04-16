import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { BioSection, BioYear } from "../components/Content/Paragraph/Bio";
import Layout from "../components/Layout/Layout";

export default function Contact() {
  return (
    <Layout title="联系">
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
    </Layout>
  );
}
