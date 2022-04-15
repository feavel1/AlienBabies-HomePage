import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";
import albumPic1 from "../public/images/album/albumPic1_helloKitty.jpg";

export default function Works() {
  return (
    <Layout title="作品">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Sound Engeneering and Music Production
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          <WorkGridItem id="no1" thumbnail={albumPic1}></WorkGridItem>
          <WorkGridItem id="no1" thumbnail={albumPic1}></WorkGridItem>
          <WorkGridItem id="no1" thumbnail={albumPic1}></WorkGridItem>
          <WorkGridItem id="no1" thumbnail={albumPic1}></WorkGridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
