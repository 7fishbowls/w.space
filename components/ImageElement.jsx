import { useState } from "react";

export default function ImageElement({ index, styles, handleClick, element }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div key={index}>
      {isLoading && <p>Loading...</p>}
      <Image
        src={"https://cdn.esahubble.org/archives/images/screen/heic0206c.jpg"}
        style={{
          marginTop: index > 0 ? 0 : "25px",
        }}
        width={16}
        height={9}
        layout={"responsive"}
        onClick={() => handleClick(index)}
        className={styles.img_}
        onLoad={() => setLoading(false)}
        alt="Your internet sucks"
      />
    </div>
  );
}
