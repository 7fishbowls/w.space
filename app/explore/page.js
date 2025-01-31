import SearchBox from "@/components/SearchBox";
import styles from "@/styles/Explore.module.css";
import localFont from "next/font/local";
import Link from "next/link";
import { RiBookShelfLine } from "react-icons/ri";
import { IoPencil } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

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
        {/* <h2 className={`${Circular.className} ${styles.logo}`}>W.</h2> */}
        <header>
          <h2 className={Aeonik.className}>
            We research space, not just dream about it.
          </h2>
          <SearchBox styles={styles} />
        </header>
        <section className={styles.researches}></section>
      </section>
      <section className={`${styles.col_2} ${Aeonik.className}`}>
        <section className={styles.tools}>
          <Link href={"/create"}>
            <IoPencil />
          </Link>
          <Link href={"/create"}>
            <RiBookShelfLine />
          </Link>
          <Link href={"/create"}>
            <FaStar />
          </Link>
        </section>
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
