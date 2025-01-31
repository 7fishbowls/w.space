import { FaHeading } from "react-icons/fa";
import { BsTextParagraph } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

export default function Create({ styles, setElements }) {
  const addHeading = () => {
    setElements((prev) => [
      ...prev,
      { type: "heading", content: "Black holes are actully real." },
    ]);
  };
  const addParagraph = () => {
    setElements((prev) => [
      ...prev,
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]);
  };
  return (
    <section className={styles.tool_box}>
      <button onClick={addHeading}>
        <FaHeading />
      </button>
      <button onClick={addParagraph}>
        <BsTextParagraph />
      </button>
      <button>
        <FaLink />
      </button>
      <button>
        <FaImage />
      </button>
    </section>
  );
}
