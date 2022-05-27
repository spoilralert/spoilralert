import { useState } from "react";
import { useEffect } from "react";

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
      <div className="card__content" onClick={handleToggle}>
        <div>
          <h4>{spoilrs.title}</h4>
          <div className="card__info">
            <h5>{username}</h5>
            <h5>{spoilrs.createdAt}</h5>
          </div>
          <div className={`card__text ${expand ? "expand-text" : ""}`}>
            <Paragraph text={spoilrs.content} />
          </div>
        </div>
        <div className="tags__container">
          {spoilrs.tags.data.map((tag, i) => (
            <h5 key={i} className="tag">
              {tag.attributes.name}
            </h5>
          ))}
        </div>
      </div>

      <div>
        <Vote spoilrs={spoilrs} />
      </div>
    </div>
  );
}
