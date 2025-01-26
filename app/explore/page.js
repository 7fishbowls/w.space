import Menu from "@/components/Menu";
import styles from "@/styles/Explore.module.css";
import localFont from "next/font/local";
import { BiSearchAlt } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { IoPencil } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";

const Circular = localFont({
  src: "../fonts/title_font.otf",
  display: "swap",
});

const General_sans = localFont({
  src: "../fonts/general_sans.otf",
  display: "swap",
});

export default function Explore() {
  return (
    <main className={styles.parent}>
      <section className={styles.col_1}>
        <header className={styles.explore_header}>
          <h2 className={Circular.className}>W.SPACE</h2>
        </header>
        <section className={styles.menu_container}>
          <Menu styles={styles}>
            <BsPlusLg size={30} />
          </Menu>
          <Menu styles={styles}>
            <IoPencil size={30} />
          </Menu>
          <Menu styles={styles}>
            <FaUserLarge size={30} />
          </Menu>
        </section>
      </section>
      <section className={styles.col_2}>
        <header className={styles.search_bar}>
          <input type="text" placeholder="eg., Black Holes" />
          <button>
            <BiSearchAlt />
          </button>
        </header>
        <section className={styles.top_researches}>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
          <section className={styles.research}></section>
        </section>
      </section>
    </main>
  );
}
