import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import classes from "./Header.module.css";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 300,
    height: 300,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [menuOpen, size.width]);

  function menuToggleHandler() {
    setMenuOpen((p) => {
      return !p;
    });
  }

  return (
    <>
      <Box
        className={classes.header}
        bg={useColorModeValue("#F8BBD040", "#880E4F80")}
        css={{ backdropFilter: "blur(10px)" }}
        position="fixed"
        as="nav"
        w="100%"
        top={0}
      >
        <Box className={classes.header__content}>
          <Link href="/" scroll={false}>
            <a className={classes.header__content__logo}>外星宝贝</a>
          </Link>

          <Box
            bg={{
              sm: "#00000000",
              base: useColorModeValue(
                "rgba(248, 187, 208, 0.9)",
                "RGBA(136, 14, 79, 0.95)"
              ),
            }}
            className={`${classes.header__content__nav} ${
              menuOpen && size.width < 768 ? classes.isMenu : ""
            }`}
          >
            <ul>
              <li>
                <Link href="/Works" onClick={menuToggleHandler} scroll={false}>
                  作品
                </Link>
              </li>
              <li>
                <Link href="/Posts" onClick={menuToggleHandler} scroll={false}>
                  帖子
                </Link>
              </li>
              {/* <li>
                <Link href="/Album" onClick={menuToggleHandler} scroll={false}>
                  相册
                </Link>
              </li> */}

              <li>
                <Link
                  href="/Contact"
                  onClick={menuToggleHandler}
                  scroll={false}
                >
                  联系
                </Link>
              </li>
              <li>
                <DarkModeSwitch />
              </li>
            </ul>
          </Box>

          <div className={classes.header__content__toggle}>
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </Box>
      </Box>
      <div className={classes.blank} />
    </>
  );
}
