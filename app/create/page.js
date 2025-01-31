"use client";

import styles from "@/styles/Create.module.css";
import ToolBox from "@/components/ToolBox";
import { FaAsterisk } from "react-icons/fa6";
import { useState } from "react";

export default function Create() {
  const [elements, setElements] = useState([]);
  console.log(elements);
  return (
    <>
      {elements.length === 0 && (
        <section className={styles.japanese_text}>
          <FaAsterisk />
        </section>
      )}
      <section className={styles.elements}>
        {elements.map((elem, index) =>
          elem.type === "heading" ? (
            <h1 key={index}>{elem.content}</h1>
          ) : elem.type === "paragraph" ? (
            <p key={index}>{elem.content}</p>
          ) : null
        )}
      </section>
      <ToolBox setElements={setElements} styles={styles} />
    </>
  );
}
