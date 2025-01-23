import styles from "@/styles/Explore.module.css";

import { FaAsterisk } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";

export default function Explore() {
  return (
    <section className={styles.parent}>
      <header>
        <h2>W.</h2>
        <input type="text" placeholder="Search Anything Here..." />
        <h2>
          <FaAsterisk size={15} />
        </h2>
      </header>
      <main>
        <section className={styles.first_row}>
          <section className={styles.explore}>
            <IoIosSearch size={50} />
          </section>
          <section className={styles.create}>
            <HiPencil size={50} />
          </section>
        </section>

        <section className={styles.second_row}>
          <section className={styles.account}>
            <HiPencil size={50} />
          </section>
          <section className={styles.manage}>
            <HiPencil size={50} />
          </section>
          <section className={styles.instagram}>
            <HiPencil size={50} />
          </section>
        </section>
      </main>
    </section>
  );
}
