import { theme as chakraTheme, useColorModeValue } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  body: ` -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
  heading: ` -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  lg: "62em",
});

const overrides = {
  ...chakraTheme,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("WhiteAlpha100", "#521B41")(props),
        color: mode("black", "white")(props),
      },
    }),
  },
  fonts,
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
