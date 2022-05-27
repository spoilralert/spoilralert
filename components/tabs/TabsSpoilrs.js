import { useState } from "react";
// import Paragraph from "../paragraph";
import PostForm from "../forms/PostForm";
import Post from "../Post";
// import { LoadSpoilrsForMovie } from "../../lib/strapi";
import { AddSpoilrRequest } from "../../lib/spoilrs";
import { useEffect } from "react";
import { getUserId } from "../../lib/storage";

export default function TabsSpoilrs({ spoilrs, movie, movieId, tags }) {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(null);

  const [spoilrRequest, setSpoilrRequest] = useState(movie.spoilr_request.data);

  useEffect(() => {
    const userId = getUserId();
    if (userId) {
      setUserId(userId);
    }
  }, []);

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

  const handleAddSpoilrRequest = async () => {
    const result = await AddSpoilrRequest(movieId, userId);
    setSpoilrRequest(result);
    console.log(result);
  };

  return (
    <div className="tabs container__layout">
      <input type="radio" name="tabs" id="tabone" defaultChecked={true} />
      <label htmlFor="tabone" className="tab__label">
        Spoilrs
      </label>
      <div className="tab">
        {spoilrs.length === 0 && !spoilrRequest && (
          <div className="request__cta">
            <h5>
              Oh no! There is no spoilrs added yet, do you want to make a
              request?
            </h5>
            <button onClick={handleAddSpoilrRequest} className="tab__cta__btn">
              Add Spoilr request
            </button>
          </div>
        )}
        {spoilrs.length === 0 && spoilrRequest && (
          <div className="request__cta">
            <h5>
              Oh no! There is no spoilrs added yet, but it has been requested.
              Please check back later.
            </h5>
          </div>
        )}
        {spoilrs.length > 0 && (
          <button className="tab__cta__btn show-btn" onClick={handleShow}>
            Show Spoilrs
          </button>
        )}
        <div className={show ? "show" : "hidden"}>
          {spoilrs.map((spoilr, i) => (
            <Post key={i} postKey={i} spoilrs={spoilr.attributes} />
          ))}
        </div>
      </div>
      <input type="radio" name="tabs" id="tabtwo" />
      <label htmlFor="tabtwo" className="tab__label">
        Add spoilr
      </label>
      <div className="tab">
        {userId && (
          <div>
            <PostForm movieId={movieId} tags={tags} />
          </div>
        )}
        {userId === null && (
          <div className="message">
            <h5>You need to log in to add spoilrs</h5>
          </div>
        )}
      </div>
    </div>
  );
}
