import { Box, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";

export default function Cute() {
  return (
    <Layout title="可爱">
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <Box>Work in Progress</Box>
      </SimpleGrid>
    </Layout>
  );
}
