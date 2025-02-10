import styles from "@/styles/Explore.module.css";
export default function Explore() {
  return (
    <section className={styles.temp}>
      <p style={{ color: "grey" }}>No saved researches found.</p>
    </section>
  );
}
