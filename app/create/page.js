"use client";

import styles from "@/styles/preview.module.css";

//ICONS

import { FaSave } from "react-icons/fa";
import { FaHighlighter } from "react-icons/fa";
import { FaHeading } from "react-icons/fa";
import { BsTextParagraph } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import Element from "@/components/Element";
import { useRef, useState } from "react";

export default function Create() {
  const elems = useRef(null);
  const [elements_, setElements] = useState([]);
  const addHeading = () => {
    setElements([
      ...elements_,
      { type: "heading", value: "Long time no see, what's going on?" },
    ]);
  };

  const addLink = () => {
    setElements([
      ...elements_,
      { type: "link", value: "https://www.blaze-domination.xyz" },
    ]);
  };

  const addPara = () => {
    setElements([
      ...elements_,
      {
        type: "para",
        value:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      },
    ]);
    elems.scrollTop = elems.scrollHeight;
  };

  const addHighlight = () => {
    setElements([
      ...elements_,
      { type: "highlight", value: "That was actually close enough." },
    ]);
  };

  const addImage = () => {
    setElements([
      ...elements_,
      {
        type: "image",
        value:
          "https://cdn.esahubble.org/archives/images/publicationjpg/heic0910e.jpg",
      },
    ]);
  };
  return (
    <>
      <main className={styles.main}>
        <section className={styles.preview} ref={elems}>
          {elements_.map((elem, index) => {
            return (
              <Element
                setElements={setElements}
                elements={elements_}
                key={index}
                styles={styles}
                type={elem.type}
                value={elem.value}
                id={index}
              />
            );
          })}
          {elements_.length === 0 && (
            <p className={styles.no_elem}>No element, add one.</p>
          )}
        </section>
        <section className={styles.elements_box}>
          <section className={styles.text_based}>
            <h1
              onClick={addHeading}
              style={{
                animation: "animate_elem .6s ease forwards",
                animationDelay: "0.1",
              }}
            >
              <FaHeading />
            </h1>
            <h1
              onClick={addPara}
              style={{
                animation: "animate_elem .6s ease forwards",
                animationDelay: "0.3s",
              }}
            >
              <BsTextParagraph />
            </h1>
            <h1
              onClick={addLink}
              style={{
                animation: "animate_elem .6s ease forwards",
                animationDelay: "0.2s",
              }}
            >
              <FaLink />
            </h1>
            <h1
              onClick={addHighlight}
              style={{
                animation: "animate_elem .6s ease forwards",
                animationDelay: "0.4s",
              }}
            >
              <FaHighlighter />
            </h1>
          </section>
          <section className={styles.visual_based}>
            <section className={styles.vb_btn}>
              <h1
                onClick={addImage}
                style={{
                  animation: "animate_elem .6s ease forwards",
                  animationDelay: "0.3s",
                }}
              >
                <FaImage />
              </h1>
              <h1
                style={{
                  animation: "animate_elem .6s ease forwards",
                  animationDelay: "0.5s",
                }}
              >
                <GoGraph />
              </h1>
              <h1
                style={{
                  animation: "animate_elem .6s ease forwards",
                  animationDelay: "0.4s",
                }}
              >
                <FaSave />
              </h1>
              <h1
                style={{
                  animation: "animate_elem .6s ease forwards",
                  animationDelay: "0.6s",
                }}
              >
                <FaArrowRightLong />
              </h1>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
