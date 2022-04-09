import { Box } from "@chakra-ui/react";

export function BioYear({ children }) {
  return (
    <Box style={{ fontWeight: "bold", marginRight: "1em" }}>{children}</Box>
  );
}

export function BioSection({ children }) {
  return (
    <Box style={{ paddingLeft: "3.4em", textIndent: "-3.4em" }}>{children}</Box>
  );
}
