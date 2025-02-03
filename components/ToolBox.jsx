import { FaHeading } from "react-icons/fa";
import { BsTextParagraph } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export default function Create({ styles, setElements, hide, elements }) {
  const addHeading = () => {
    setElements((prev) => [
      ...prev,
      {
        _id: uuidv4(),
        type: "heading",
        content: "Black holes are actully real.",
      },
    ]);
  };

  const addParagraph = () => {
    setElements((prev) => [
      ...prev,
      {
        _id: uuidv4(),
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]);
  };

  const addLink = () => {
    setElements((prev) => [
      ...prev,
      {
        _id: uuidv4(),
        type: "link",
        content: "https://blaze-domination.xyz",
      },
    ]);
  };

  const addImage = () => {
    setElements((prev) => [
      ...prev,
      {
        _id: uuidv4(),
        type: "image",
        content:
          "https://cdn.esahubble.org/archives/images/large/heic0503a.jpg",
      },
    ]);
  };
  return (
    <section
      className={styles.tool_box}
      style={{ display: hide ? "none" : "grid" }}
    >
      <button onClick={addHeading}>
        <FaHeading />
      </button>
      <button onClick={addParagraph}>
        <BsTextParagraph />
      </button>
      <button onClick={addLink}>
        <FaLink />
      </button>
      <button onClick={addImage}>
        <FaImage />
      </button>
    </section>
  );
}
