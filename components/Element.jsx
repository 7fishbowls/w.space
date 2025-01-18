import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ImBin2 } from "react-icons/im";

export default function Element({
  styles,
  type,
  value,
  id,
  setElements,
  elements,
}) {
  const [editable, setEditable] = useState(false);
  const [value_, setValue] = useState(value);
  const inputFeild = useRef(null);

  const handleClick = () => {
    setEditable(true);
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    const newArray = [...elements];
    newArray[id].value = e.target.value;
    setElements(newArray);
  };

  const handleDelete = () => {
    setElements((prev) => {
      return prev.filter((_, index) => index !== id);
    });
    setValue(value);
  };

  const handleSave = () => {
    setElements((prev) =>
      prev.map((el, index) => (index === id ? { ...el, value: value_ } : el))
    );
    setEditable(false);
  };
  useEffect(() => {
    if (editable && inputFeild.current) {
      inputFeild.current.focus();
    }
    if (inputFeild.current) inputFeild.current.value = value;
    return () => {};
  }, [value_, editable, value]);
  return (
    <div className={styles.element}>
      <div className={styles.element_pos}>
        <p>
          {!editable && id + 1}
          {editable && "*"}
        </p>
        <h5 onClick={handleDelete}>
          <ImBin2 color="#ff3275" style={{ cursor: "pointer" }} />
        </h5>
      </div>
      {type === "para" && !editable && (
        <h1 onClick={() => handleClick()}>{value}</h1>
      )}
      {type === "heading" && !editable && (
        <header onClick={() => handleClick()}>
          <h2>{value}</h2>
        </header>
      )}
      {type === "link" && (
        <a href={value} target="_blank">
          {value}
        </a>
      )}
      {type === "highlight" && !editable && (
        <h1 className={styles.highlight} onClick={handleClick}>
          {value}
        </h1>
      )}
      {editable && (
        <textarea
          value={value}
          className={styles.edit_area}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSave();
            }
          }}
          ref={inputFeild}
        />
      )}
      {type === "image" && (
        <img
          className={styles.image_}
          src={
            "https://cdn.esahubble.org/archives/images/publicationjpg/heic0910e.jpg"
          }
          alt="Your internet sucks!"
        />
      )}
    </div>
  );
}
