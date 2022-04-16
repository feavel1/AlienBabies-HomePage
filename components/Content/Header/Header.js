import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Btn from "../Btn/Btn";
import classes from "./Header.module.css";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

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
  }, [size.width, menuOpen]);

  function menuToggleHandler() {
    setMenuOpen((p) => {
      return !p;
    });
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__content}>
          <Link href="/" scroll={false}>
            <a className={classes.header__content__logo}>外星宝贝</a>
          </Link>

          <nav
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
              <li>
                <Link href="/Album" onClick={menuToggleHandler} scroll={false}>
                  相册
                </Link>
              </li>

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
          </nav>

          <div className={classes.header__content__toggle}>
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
      <div className={classes.blank} />
    </>
  );
}
