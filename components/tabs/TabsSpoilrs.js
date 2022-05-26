import { useState } from "react";
// import Paragraph from "../paragraph";
import PostForm from "../forms/PostForm";
import Post from "../Post";
// import { LoadSpoilrsForMovie } from "../../lib/strapi";
import { AddSpoilrRequest } from "../../lib/spoilrs";

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
        {spoilrs.length === 0 && (
          <div className="request__cta">
            <h5>
              Oh no! There is no spoilrs added yet, do you want to make a
              request?
            </h5>
            <button onClick={AddSpoilrRequest} className="tab__cta__btn">
              Add Spoilr request
            </button>
          </div>
        )}
        {spoilrs.length > 0 && (
          <button className="tab__cta__btn show-btn" onClick={handleShow}>
            Show Spoilrs
          </button>
        )}
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
        <PostForm movieId={movieId} tags={tags} />
      </div>
    </div>
  );
}
