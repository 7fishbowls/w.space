"use client";
import AddElements from "@/components/AddElements";
import Elements from "@/components/Elements";
import styles from "@/styles/Create.module.css";
import { useState } from "react";

export default function Create() {
  const [elements_, setElements] = useState([]);
  const [elementIndex, setElementIndex] = useState(-1);
  return (
    <section className={styles.create_section}>
      <Elements
        styles={styles}
        elements_={elements_}
        setElementIndex={setElementIndex}
      />
      <AddElements
        styles={styles}
        setElements={setElements}
        elements_={elements_}
        elementIndex={elementIndex}
        setElementIndex={setElementIndex}
      />
    </section>
  );
}
