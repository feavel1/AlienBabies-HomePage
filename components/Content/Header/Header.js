import { useEffect, useState } from "react";
import { BiMenuAltRight, AiOutlineClose } from "react-icons/bi";

import Link from "next/link";
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
                <Link href="/Works" onClick={menuToggleHandler}>
                  作品
                </Link>
              </li>
              <li>
                <Link href="/Game" onClick={menuToggleHandler}>
                  学习
                </Link>
              </li>
              <li>
                <Link href="/Works/Album" onClick={menuToggleHandler}>
                  相册
                </Link>
              </li>

              <li>
                <Link href="/Works/Album" onClick={menuToggleHandler}>
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
