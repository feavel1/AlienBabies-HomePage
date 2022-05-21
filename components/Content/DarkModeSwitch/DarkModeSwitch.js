import { useColorMode, IconButton } from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <BiSun /> : <BiMoon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    />
  );
};

export default DarkModeSwitch;
