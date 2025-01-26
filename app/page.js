import styles from "./page.module.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Link from "next/link";

const Circular = localFont({
  src: "./fonts/title_font.otf",
  display: "swap",
});

const general_sans = localFont({
  src: "./fonts/general_sans.otf",
  display: "swap",
});

const FaArrowRightShort = dynamic(() =>
  import("react-icons/hi2").then((mod) => mod.HiArrowSmallRight)
);
const MdOutlineArrowOutward = dynamic(() =>
  import("react-icons/md").then((mod) => mod.MdOutlineArrowOutward)
);

export default function Home() {
  return (
    <section className={styles.main}>
      <header>
        <h2>#</h2>
        <h3 className={general_sans.className}>
          By{" "}
          <a href="/">
            Shaik Ali{" "}
            <MdOutlineArrowOutward
              style={{ transform: "translateY(2px)", marginLeft: "0px" }}
            />
          </a>
        </h3>
      </header>
      <div className={Circular.className}>
        <p className={styles.main_text}>W.SPACE</p>
      </div>
      <div className={styles.right}>
        <Link href="/explore" style={{ textDecoration: "none", color: "#ddd" }}>
          <h4>
            <FaArrowRightShort size={25} aria-label="GO" />
          </h4>
        </Link>
      </div>
    </section>
  );
}
