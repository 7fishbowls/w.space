import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa6";

export default function Element({
  styles,
  element,
  setElements,
  id,
  elements,
}) {
  const [its_content, setItsContent] = useState(element.content);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setItsContent(e.target.value);
  };

  const handleClick = () => {
    if (!editing) setEditing(true);
  };

  const handleSave = (e) => {
    let data = e.target.value.trim();

    if (!data) {
      setElements(elements.filter((_, index) => index !== id));
      setEditing(false);
      return;
    }

    if (element.type === "link") {
      data = data.split(" ")[0]; // Extract only the first word if it's a link
    }

    setItsContent(data);
    setElements((prev) => {
      const newArray = [...prev];
      newArray[id] = { ...newArray[id], content: data }; // Ensure immutability
      return newArray;
    });

    setEditing(false);
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
        <p onClick={handleClick}>
          <FaLink className={styles.link_icon} color="#006fff" /> {its_content}
        </p>
      )}
      {editing && (
        <textarea
          className={styles.edit_input}
          type="text"
          value={its_content}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleSave(e)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSave(e) : null)}
        />
      )}
    </>
  );
}
