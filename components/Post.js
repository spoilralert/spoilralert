import { useState } from "react";
import { useEffect } from "react";

import Paragraph from "./paragraph";
import Vote from "./Vote";

export default function Post({ spoilrs }) {
  useEffect(() => {
    spoilrs.tags.data.map((tag) => {
      console.log(tag.attributes.tag);
    });
  });
  const [expand, setExpand] = useState(false);
  const username = spoilrs.user.data.attributes.username;

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <div className={`card ${expand ? "expand" : ""}`}>
      <div className="div" onClick={handleToggle}>
        <h4>{spoilrs.title}</h4>
        <div className="card__info">
          <h5>{username}</h5>
          <h5>{spoilrs.createdAt}</h5>
        </div>
        <div className={`card__text ${expand ? "expand-text" : ""}`}>
          <Paragraph text={spoilrs.content} />
          <div className="tags__container">
            {spoilrs.tags.data.map((tag) => (
              <h5 key={tag.id} className="tag">
                {tag.attributes.tag}
              </h5>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Vote spoilrs={spoilrs} />
      </div>
    </div>
  );
}
