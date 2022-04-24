import classes from "./Footer.module.css";
import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box className={classes.footer}>
      <a>© 2022 Feavel & Tang</a>
      <a>All Rights Reserved.</a>
    </Box>
  );
}
