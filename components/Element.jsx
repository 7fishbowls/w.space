import Image from "next/image";
import { useRef, useState } from "react";
import { FaLink } from "react-icons/fa6";

export default function Element({
  styles,
  element,
  setElements,
  id,
  index,
  elements,
}) {
  const [its_content, setItsContent] = useState(element.content);
  const [editing, setEditing] = useState(false);
  const element_ref = useRef(null);

  const handleChange = (e) => {
    setItsContent(e.target.value);
  };

  const handleClick = () => {
    if (!editing) setEditing(true);
    console.log(element_ref);
  };

  const handleSave = (e) => {
    let data = e.target.value.trim();

    if (!data) {
      setElements(elements.filter((elem) => elem._id !== id));
      setEditing(false);
      return;
    }

    if (element.type === "link") {
      data = data.split(" ")[0];
    }

    setItsContent(data);
    setElements((prev) => {
      prev[index] = { ...prev[index], content: data };
      return [...prev];
    });

    setEditing(false);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setElements((prev) => {
      return prev.filter((elem) => elem._id !== id);
    });
  };

  return (
    <>
      {element.type === "heading" && !editing && (
        <h1 onClick={handleClick}>{its_content}</h1>
      )}
      {element.type === "paragraph" && !editing && (
        <p onClick={handleClick}>{its_content}</p>
      )}
      {element.type === "link" && !editing && (
        <div className={styles.link_box}>
          <FaLink className={styles.link_icon} color="#006fff" />
          <p onClick={handleClick} className={styles.link}>
            {its_content}
          </p>
        </div>
      )}
      {element.type === "image" && !editing && (
        <div className={styles.image_}>
          <Image
            onClick={handleClick}
            alt={"Your Internet Sucks!"}
            src={its_content}
            fill
          />
        </div>
      )}
      {editing && (
        <textarea
          className={styles.edit_input}
          type="text"
          style={{
            height: element.type === "paragraph" ? "300px" : "65px",
          }}
          value={its_content}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleSave(e)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSave(e) : null)}
        />
      )}
    </>
  );
}
