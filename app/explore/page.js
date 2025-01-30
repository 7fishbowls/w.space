import SearchBox from "@/components/SearchBox";
import styles from "@/styles/Explore.module.css";
import localFont from "next/font/local";
import { FaAsterisk } from "react-icons/fa6";

const Circular = localFont({
  src: "../fonts/title_font.otf",
  display: "swap",
});

const Aeonik = localFont({
  src: "../fonts/aeonik.otf",
  display: "swap",
});

export default function Explore() {
  return (
    <section className={styles.explore}>
      <section className={styles.col_1}>
        <header>
          <h2 className={Circular.className}>W.</h2>
          <SearchBox styles={styles} />
        </header>
        <p>Hello worlds</p>
      </section>
      <section className={`${styles.col_2} ${Aeonik.className}`}>
        <section className={styles.row_1}>
          <section className={styles.create}></section>
          <div className={styles.special}></div>
        </section>
        <section className={styles.row_2}>
          <div className={styles.special}></div>
          <section className={styles.top_researchers}></section>
        </section>
      </section>
    </section>
  );
}
