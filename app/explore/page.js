import styles from "@/styles/Explore.module.css";
import localFont from "next/font/local";

const general_sans = localFont({
  src: "../fonts/general_sans.otf",
  display: "swap",
});

export default function Explore() {
  return (
    <section className={styles.parent}>
      <section className={styles.col_1}></section>
      <section className={styles.col_2}></section>
    </section>
  );
}
