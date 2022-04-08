import classes from "./Btn.module.css";
import Link from "next/link";

export default function Btn({ children, to }) {
  return (
    <Link href={to} passHref scroll={false}>
      <button className={classes.buttonPink}>{children}</button>
    </Link>
  );
}
