import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";
import albumPic1 from "../public/images/album/albumPic1_helloKitty.jpg";

export default function Works() {
  return (
    <Layout title="作品">
      <Container>
        <Heading as="h3" fontSize={30} mb={4} textAlign="center">
          Best Of
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} spacing={8} mb={4}>
          <WorkGridItem id="no1" thumbnail={albumPic1} title="work1">
            first work
          </WorkGridItem>
        </SimpleGrid>

        <SimpleGrid columns={[1, 1, 2]} spacing={8} mb={4}>
          <WorkGridItem id="no1" thumbnail={albumPic1} title="work2">
            second work
          </WorkGridItem>
          <WorkGridItem id="no1" thumbnail={albumPic1} title="work3">
            third work
          </WorkGridItem>
        </SimpleGrid>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} mb={4}>
          <WorkGridItem id="no1" thumbnail={albumPic1} title="work2">
            second work
          </WorkGridItem>
          <WorkGridItem id="no1" thumbnail={albumPic1} title="work3">
            third work
          </WorkGridItem>
          <WorkGridItem id="no1" thumbnail={albumPic1} title="work3">
            third work
          </WorkGridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
