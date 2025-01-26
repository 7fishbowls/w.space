import Link from "next/link";

export default function Menu({ styles, children }) {
  return (
    <header className={styles.menu}>
      <Link className={styles.click} href={"/create"}>
        <h2>{children}</h2>
      </Link>
    </header>
  );
}
