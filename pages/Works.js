import classes from "./WorkMenu.module.css";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

export function WorkCard(p) {
  return <div className={classes.services__card}>{p.children}</div>;
}

function WorkButton(p) {
  return (
    <div className={classes.services__btn}>
      <Link href={p.linkTo} passHref scroll={false}>
        <button>{p.children}</button>
      </Link>
    </div>
  );
}

export default function WorkMenu() {
  return (
    <Layout title="Works">
      <div className={classes.services} id="services">
        <h1>我们的项目</h1>
        <div className={classes.services__wrapper}>
          <WorkCard>
            <h2>Photo Book</h2>
            <p>化妆图册</p>
            <WorkButton linkTo="Works/Album">点击查看</WorkButton>
          </WorkCard>
          <WorkCard>
            <h2>Learning Program</h2>
            <p>化妆教学</p>
            <WorkButton linkTo="/Contact">点击学习</WorkButton>
          </WorkCard>
          <WorkCard>
            <h2>Play Game</h2>
            <p>点我玩游戏</p>
            <WorkButton linkTo="/Contact">点我开始</WorkButton>
          </WorkCard>
          <WorkCard>
            <h2>Contact Me</h2>
            <p>我的联系方式</p>
            <WorkButton linkTo="/Contact">点我联系</WorkButton>
          </WorkCard>
        </div>
      </div>
    </Layout>
  );
}
