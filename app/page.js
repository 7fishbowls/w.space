import styles from "./page.module.css";
import { FaAngleDown } from "react-icons/fa6";

export default function Home() {
  return (
    <section className={styles.main}>
      <p>W.SPACE</p>
      <h4>
        <FaAngleDown size={30} />
      </h4>
    </section>
  );
}
