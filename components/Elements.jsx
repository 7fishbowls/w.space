import Image from "next/image";
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function Elements({
  styles,
  elements_,
  setElementIndex,
  setElements,
  editElement,
}) {
  const handleClick = (index) => {
    setElementIndex(index);
    editElement.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleError = (index) => {
    const newArray = [...elements_].filter((_, i) => i !== index);
    setElementIndex(-404);
    setElements(newArray);
  };
  const [error_, setError] = useState(false);
  return (
    <section className={styles.elements}>
      {elements_.map((elem, index) => {
        if (elem.type === "heading")
          return (
            <h2
              key={index}
              style={{ paddingTop: index > 0 ? "0" : "20px" }}
              onClick={() => handleClick(index)}
            >
              {elem.value}
            </h2>
          );
        else if (elem.type === "paragraph")
          return (
            <p
              style={{ paddingTop: index === 0 ? "25px" : "" }}
              key={index}
              onClick={() => handleClick(index)}
            >
              {elem.value}
            </p>
          );
        else if (elem.type === "link")
          return (
            <p
              key={index}
              style={{
                textDecoration: "underline",
                marginTop: index > 0 ? 0 : "25px",
              }}
              onClick={() => handleClick(index)}
            >
              <FaLink size={13} color="#006fff" /> {elem.value}
            </p>
          );
        else if (elem.type === "image")
          return (
            <div key={index}>
              {error_ && (
                <p style={{ marginTop: "25px" }}>
                  Invalid image link, supported image links are : ImgDB,
                  ESAHubble, Nasa.
                </p>
              )}
              <Image
                src={elem.value.trim()}
                style={{
                  marginTop: index > 0 ? 0 : "25px",
                }}
                width={16}
                height={9}
                layout={"responsive"}
                onClick={() => handleClick(index)}
                className={styles.img_}
                alt="."
                onError={() => handleError(index)}
              />
            </div>
          );
        else if (elem.type === "highlight")
          return (
            <h4
              onClick={() => handleClick(index)}
              key={index}
              style={{
                margin: "25px",
                marginTop: index > 0 ? 0 : "25px",
                padding: "15px",
                background: "#0e0e0e",
                lineHeight: "1.6",
                fontWeight: "500",
                color: "grey",
                border: "1px solid #3a3a3a",
              }}
            >
              {elem.value}
            </h4>
          );
      })}
    </section>
  );
}
