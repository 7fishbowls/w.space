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
  const [isImage, setIsImage] = useState(type === "image" ? true : false);
  const inputFeild = useRef(null);
  const height_ = type === "para" ? "300px" : "100%";

  const handleClick = () => {
    setEditable(true);
  };

  const handleInput = (e) => {
    if (!e.target.value) {
      const newArray = [...elements].filter((_, index) => index !== id);
      setElements(newArray);
      return;
    }

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
      {type === "link" && !editable && (
        <h1 onClick={handleClick} style={{ textDecoration: "underline" }}>
          {value.split(" ")[0]}
        </h1>
      )}
      {type === "highlight" && !editable && (
        <h1
          className={styles.highlight}
          style={{ color: "#0e0e0e" }}
          onClick={handleClick}
        >
          {value}
        </h1>
      )}
      {editable && (
        <textarea
          value={value.trimStart()}
          className={styles.edit_area}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSave();
            } else if (e.key === " " && (type === "image" || type === "link")) {
              e.preventDefault();
            }
          }}
          onBlur={() => setEditable(false)}
          ref={inputFeild}
          style={{ height: height_ }}
        />
      )}
      {type === "image" && isImage && <h1>Loading....</h1>}
      {type === "image" && (
        <Image
          onClick={handleClick}
          className={styles.image_}
          src={value}
          alt="Fix your internet or stop entering broken image URLs!"
          width={1000}
          height={600}
          onLoad={() => setIsImage(false)}
        />
      )}
    </div>
  );
}
