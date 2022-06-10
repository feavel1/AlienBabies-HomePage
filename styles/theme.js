import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  lg: "62em",
});

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#521B41",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    variants: {
      passTo: {
        color: "blue.500",
        ":hover": {
          color: "blue.600",
        },
      },
    },
  },
};

const overrides = {
  config: {
    // initialColorMode: "dark",
    useSystemColorMode: true,
  },
  components,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F8BBD0", "#800060")(props),
        color: mode("black", "white")(props),
      },
    }),
  },

  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
