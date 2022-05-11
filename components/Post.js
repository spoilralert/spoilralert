import { useState } from "react";

import Paragraph from "./paragraph";
import Vote from "./Vote";

export default function Post() {
  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <div className={`card ${expand ? "expand" : ""}`}>
      <h4 onClick={handleToggle}>Spoilr title</h4>
      <div className="card__info">
        <h5>username</h5>
        <h5>added date</h5>
        <h5>Points</h5>
      </div>
      <Paragraph
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
      />
      <Paragraph
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
      />
      <div>
        <Vote />
      </div>
    </div>
  );
}
