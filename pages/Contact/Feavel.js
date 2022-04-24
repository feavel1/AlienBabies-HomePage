import { Box, Button, Heading, Link, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import Layout from "../../components/Layout/Layout";
import { BioSection, BioYear } from "../../components/Content/Paragraph/Bio";
import albumPic2 from "../../public/images/album/albumPic4_helloKitty.jpg";

export default function Feavel() {
  return (
    <Layout title="联系">
      {/* feavel */}

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
              Feavel
            </Heading>
            <p>网络艺术( 互联网应用 / 音乐 / 摄影 )</p>
          </Box>
        </Box>

        <Heading as="h3" variant="section-title" align="center">
          介绍
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          出生在俄罗斯🇷🇺
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          音乐学院毕业🎓
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          大学里学习: 互联网应用开发
        </BioSection>
        <BioSection>
          <BioYear>2018 - </BioYear>
          网络工程师 / 音乐后期
        </BioSection>

        <Heading as="h3" variant="section-title" align="center">
          社交网络
        </Heading>

        <List textAlign="left" mt={4}>
          <ListItem>
            <Link href="https://feavel.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<AiOutlineLink />}
              >
                feavel.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
}
