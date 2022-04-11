import { Box, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";

export default function Album() {
  return (
    <Layout title="相册">
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <Box>Work in Progress</Box>
      </SimpleGrid>
    </Layout>
  );
}
