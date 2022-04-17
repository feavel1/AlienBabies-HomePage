import classes from "./Footer.module.css";
import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box className={classes.footer}>
      © 2022 Feavel & Tang. All Rights Reserved.
    </Box>
  );
}
