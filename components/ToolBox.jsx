import { FaHeading } from "react-icons/fa";
import { BsTextParagraph } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export default function Create({ styles, setElements, hide }) {
  const paragraph_types = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  ];

  const heading_types = [
    "We research space, not just look at it.",
    "Out here, hesitation kills.",
    "Stars don’t shine, they burn.",
  ];

  const addHeading = () => {
    setElements((prev) => [
      ...prev,
      {
        _id: uuidv4(),
        type: "heading",
        content:
          heading_types[Math.floor(Math.random() * heading_types.length)],
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
          paragraph_types[Math.floor(Math.random() * paragraph_types.length)],
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
