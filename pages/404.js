import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Spacer,
} from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";

const NotFound = () => {
  return (
    <Layout title="404">
      <Container centerContent>
        <Heading as="h1" m={6}>
          对不起小可爱😿
        </Heading>

        <Text>但是这里有点出错了</Text>
        <Divider my={8} />
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button colorScheme="pink">点我返回主页</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
