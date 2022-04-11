import { Box, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/Content/Paragraph/GridItem";
import Layout from "../components/Layout/Layout";

export default function Works() {
  return (
    <Layout title="作品">
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <Box>Work in Progress</Box>
      </SimpleGrid>
    </Layout>
  );
}
