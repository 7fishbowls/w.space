import styles from "./page.module.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const Circular = localFont({
  src:"./title_font.otf",
  variable:"--circular-sfont",
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
        <h3>
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
        <h4>
          <FaArrowRightShort size={25} aria-label="GO" />
        </h4>
      </div>
    </section>
  );
}
