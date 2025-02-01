"use client";

import styles from "@/styles/Create.module.css";
import ToolBox from "@/components/ToolBox";
import { FaAsterisk } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Element from "@/components/Element";
export default function Create() {
  const [elements, setElements] = useState([]);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "+") setHide(!hide);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hide]);
  return (
    <>
      {elements.length === 0 && (
        <section className={styles.japanese_text}>
          <FaAsterisk />
        </section>
      )}

      <section className={styles.elements}>
        {elements.map((elem, index) => (
          <Element
            styles={styles}
            element={elem}
            key={index * 10}
            id={index}
            setElements={setElements}
            elements={elements}
          />
        ))}
      </section>
      <ToolBox setElements={setElements} styles={styles} hide={hide} />
    </>
  );
}
