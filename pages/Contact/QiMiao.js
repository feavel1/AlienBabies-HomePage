import { Box, Button, Heading, Link, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineLink, IoLogoInstagram } from "react-icons/ai";
import Layout from "../../components/Layout/Layout";
import { BioSection, BioYear } from "../../components/Content/Paragraph/Bio";
import albumPic2 from "../../public/images/album/albumPic4_helloKitty.jpg";

export default function Contact() {
  return (
    <Layout title="联系">
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
              Qi Miao
            </Heading>
            <p>摄影师( 主编 / 策划 / 运营 )</p>
          </Box>
        </Box>

        <Heading as="h3" variant="section-title" align="center">
          介绍
        </Heading>
        <BioSection>
          <BioYear>2015</BioYear>
          开始学习摄影
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          大学毕业🎓
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          创建影视协会
        </BioSection>
        <BioSection>
          <BioYear>2016 - </BioYear>
          当主编，策划，运营
        </BioSection>

        <Heading as="h3" variant="section-title" align="center">
          社交网络
        </Heading>

        <List textAlign="left" mt={4}>
          <ListItem>
            <Link
              href="https://www.instagram.com/accounts/login/?next=/qmiao_7610/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoInstagram />}
              >
                Qi miao
              </Button>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
}
