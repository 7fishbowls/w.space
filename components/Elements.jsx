import { FaAsterisk } from "react-icons/fa";

export default function Elements({ styles, elements_, setElementIndex }) {
  return (
    <section className={styles.elements}>
      {elements_.map((elem, index) => {
        if (elem.type === "heading")
          return (
            <h2
              key={index}
              style={{ paddingTop: index > 0 ? "0" : "20px" }}
              onClick={() => setElementIndex(index)}
            >
              {elem.value}
            </h2>
          );
        else if (elem.type === "paragraph")
          return (
            <p
              style={{ paddingTop: index === 0 ? "25px" : "" }}
              key={index}
              onClick={() => setElementIndex(index)}
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
              onClick={() => setElementIndex(index)}
            >
              {elem.value}
            </p>
          );
        else if (elem.type === "image")
          return (
            <div key={index}>
              <img
                src={
                  "https://cdn.esahubble.org/archives/images/screen/heic0206c.jpg"
                }
                style={{
                  marginTop: index > 0 ? 0 : "25px",
                }}
                onClick={() => setElementIndex(index)}
                className={styles.img_}
                alt="Your internet sucks"
              />
            </div>
          );
        else if (elem.type === "highlight")
          return (
            <h4
              onClick={() => setElementIndex(index)}
              key={index}
              style={{
                margin: "25px",
                marginTop: index > 0 ? 0 : "",
                padding: "5px",
              }}
            >
              <FaAsterisk size={10} /> {elem.value}
            </h4>
          );
      })}
    </section>
  );
}
