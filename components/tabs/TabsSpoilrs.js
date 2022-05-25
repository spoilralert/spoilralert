import { useState } from "react";
// import Paragraph from "../paragraph";
import PostForm from "../forms/postForm";
import Post from "../Post";
import { LoadSpoilrsForMovie } from "../../lib/strapi";

export default function TabsSpoilrs({ spoilrs, movieId, tags }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
    const button = document.querySelector(".show-btn");

    if (!show) {
      setShow(!show);
      button.innerText = "Hide spoilrs";
    } else {
      setShow(!show);
      button.innerText = "Show spoilrs";
    }
  };

  return (
    <div className="tabs container__layout">
      <input type="radio" name="tabs" id="tabone" checked="checked" />
      <label htmlFor="tabone" className="tab__label">
        Spoilrs
      </label>
      <div className="tab">
        {/* <h2>Spoilrs</h2> */}
        <button className="show-btn" onClick={handleShow}>
          Show Spoilrs
        </button>
        <div className={show ? "show" : "hidden"}>
          {spoilrs.map((spoilr, i) => (
            <Post key={i} spoilrs={spoilr.attributes} />
          ))}
        </div>
      </div>
      <input type="radio" name="tabs" id="tabtwo" />
      <label htmlFor="tabtwo" className="tab__label">
        Add spoilr
      </label>
      <div className="tab">
        {/* <h2>Add spoilr</h2> */}
        <PostForm movieId={movieId} tags={tags} />
      </div>
    </div>
  );
}
