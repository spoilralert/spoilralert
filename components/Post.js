import { useState } from "react";

import Paragraph from "./paragraph";
import Vote from "./Vote";

export default function Post({ spoilrs }) {
  const [expand, setExpand] = useState(false);
  const username = spoilrs.user.data.attributes.username;

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <div className={`card ${expand ? "expand" : ""}`}>
      <h4 onClick={handleToggle}>{spoilrs.title}</h4>
      <div className="card__info">
        <h5>{username}</h5>
        <h5>{spoilrs.createdAt}</h5>
      </div>
      <div className={`card__text ${expand ? "expand-text" : ""}`}>
        <Paragraph text={spoilrs.content} />
      </div>

      <div>
        <Vote spoilrs={spoilrs} />
      </div>
    </div>
  );
}
