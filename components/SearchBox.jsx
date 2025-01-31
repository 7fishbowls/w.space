"use client";
import Link from "next/link";
import { useRef, useState } from "react";

export default function SearchBox({ styles }) {
  const keywords = [
    {
      keyword: "black holes",
      link: "/create",
    },
    {
      keyword: "nebulae",
      link: "/",
    },
  ];

  const inputElem = useRef(null);
  const [value, setValue] = useState("");
  const [matchedElements, setMatchedElements] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    const newElements = [...keywords].filter((elem) =>
      elem.keyword.includes(e.target.value.toLowerCase())
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
              <Link href={elem.link} key={index}>
                {elem.keyword}
              </Link>
            ))}
          </section>
        )}
        {matchedElements.length === 0 && value && (
          <section className={styles.results}>
            <p className={styles.no_results}>No results found.</p>
          </section>
        )}
      </section>
    </>
  );
}
