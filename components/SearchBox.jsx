"use client";
import { useRef, useState } from "react";

export default function SearchBox({ styles }) {
  const keywords = [
    "black holes",
    "space",
    "secrets",
    "nasa",
    "billions",
    "stars",
    "nebulae",
  ];

  const inputElem = useRef(null);
  const [value, setValue] = useState("");
  const [matchedElements, setMatchedElements] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    const newElements = [...keywords].filter((elem) =>
      elem.includes(e.target.value.toLowerCase())
    );
    setMatchedElements(newElements);
  };

  return (
    <>
      <section className={styles.search_box}>
        <input
          type="text"
          placeholder="Search Anything Here..."
          ref={inputElem}
          onChange={(e) => handleChange(e)}
          value={value}
        />
        {matchedElements.length > 0 && value && (
          <section className={styles.results}>
            {matchedElements.map((elem, index) => (
              <p key={index}>{elem}</p>
            ))}
          </section>
        )}
        {value && matchedElements.length === 0 && (
          <p className={styles.no_results}>No results found.</p>
        )}
      </section>
    </>
  );
}
