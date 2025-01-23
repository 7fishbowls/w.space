import { FaHeading } from "react-icons/fa6";
import { BsTextParagraph } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { FaHighlighter } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AddElements({
  styles,
  setElements,
  elements_,
  elementIndex,
  setElementIndex,
}) {
  const [elementValue, setElementValue] = useState(
    elementIndex >= 0 ? elements_[elementIndex].value : -1
  );
  useEffect(() => {
    if (elementIndex > -1) setElementValue(elements_[elementIndex].value);
  }, [elementIndex]);

  const addHeading = () => {
    setElements((prev) => {
      return [
        ...prev,
        {
          type: "heading",
          value: "Black holes aren't actually black to be honest",
        },
      ];
    });
  };

  const addParagraph = () => {
    setElements((prev) => {
      return [
        ...prev,
        {
          type: "paragraph",
          value:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.",
        },
      ];
    });
  };
  const addLink = () => {
    setElements((prev) => {
      return [
        ...prev,
        {
          type: "link",
          value: "https://blaze-domination.xyz",
        },
      ];
    });
  };
  const addImage = () => {
    setElements((prev) => {
      return [
        ...prev,
        {
          type: "image",
          value: "https://blaze-domination.xyz",
        },
      ];
    });
  };
  const addHighlight = () => {
    setElements((prev) => {
      return [
        ...prev,
        {
          type: "highlight",
          value:
            "So what i want to say is basically, all the pictures are fake.",
        },
      ];
    });
  };
  const saveElement = () => {
    if (!elementValue) {
      setElementValue("Value cannot be empty.");
      return;
    }
    const newArray = [...elements_];
    newArray[elementIndex].value = elementValue;
    setElements(newArray);
  };
  const deleteElement = () => {
    const newArray = [...elements_].filter(
      (elem, index) => index != elementIndex
    );
    setElementValue(-1);
    setElementIndex(-1);
    setElements(newArray);
  };
  return (
    <section className={styles.add_elements}>
      <div className={styles.buttons}>
        <button onClick={addHeading}>
          <FaHeading size={35} />
        </button>
        <button onClick={addParagraph}>
          <BsTextParagraph size={35} />
        </button>
        <button onClick={addLink}>
          <FaLink size={35} />
        </button>
        <button onClick={addHighlight}>
          <FaHighlighter size={35} />
        </button>
        <button onClick={addImage}>
          <FaImage size={35} />
        </button>
        <button>
          <FaImage size={35} />
        </button>
      </div>
      <div className={styles.edit_section}>
        <p>
          Edit {elementIndex >= 0 ? elements_[elementIndex].type : "nothing"}
        </p>

        <textarea
          className={styles.edit_area}
          placeholder="Once upon a time..."
          value={elementIndex >= 0 ? elementValue : "Nothing"}
          disabled={!(elementIndex >= 0)}
          onChange={(e) => setElementValue(e.target.value)}
        ></textarea>

        <div className={styles.changes_btn}>
          <button disabled={!(elementIndex >= 0)} onClick={deleteElement}>
            <IoTrashBin size={20} />
          </button>

          <button disabled={!(elementIndex >= 0)} onClick={saveElement}>
            <FaCheck size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
