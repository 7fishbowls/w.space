import styles from "@/styles/preview.module.css";

//ICONS

import { FaPencil } from "react-icons/fa6";
import { ImBin2 } from "react-icons/im";
import { FaHighlighter } from "react-icons/fa";
import { FaHeading } from "react-icons/fa";
import { BsTextParagraph } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Create() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.preview}>
          <div className={styles.element}>
            <div className={styles.element_pos}>
              <p>1</p>
            </div>
            <h1>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </h1>
          </div>
          <div className={styles.element}>
            <div className={styles.element_pos}>
              <p>2</p>
            </div>
            <h1>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </h1>
          </div>
          <div className={styles.element}>
            <div className={styles.element_pos}>
              <p>3</p>
            </div>
            <h1>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </h1>
          </div>
          <div className={styles.element}>
            <div className={styles.element_pos}>
              <p>4</p>
            </div>
            <header>
              <h2>Black aren't actually real.</h2>
            </header>
          </div>
          <div className={styles.element}>
            <div className={styles.element_pos}>
              <p>5</p>
            </div>
            <h1>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </h1>
          </div>
        </section>
        <section className={styles.elements_box}>
          <section className={styles.text_based}>
            <h1>
              <FaHeading />
            </h1>
            <h1>
              <BsTextParagraph />
            </h1>
            <h1>
              <FaLink />
            </h1>
            <h1>
              <FaHighlighter />
            </h1>
          </section>
          <section className={styles.visual_based}>
            <section className={styles.vb_btn}>
              <h1>
                <FaImage />
              </h1>
              <h1>
                <GoGraph />
              </h1>
            </section>
            <span>
              <FaArrowRightLong />
            </span>
          </section>
        </section>
      </main>
    </>
  );
}
