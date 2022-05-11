import Paragraph from "../paragraph";
import PostForm from "../forms/postForm";
import Post from "../Post";

export default function TabsSpoilrs() {
  return (
    <div className="tabs container__layout">
      <input type="radio" name="tabs" id="tabone" checked="checked" />
      <label htmlFor="tabone" className="tab__label">
        Spoilrs
      </label>
      <div className="tab">
        <h2>Spoilrs</h2>
        <button>Show Spoilrs</button>
        <Post />
      </div>
      <input type="radio" name="tabs" id="tabtwo" />
      <label htmlFor="tabtwo" className="tab__label">
        Add spoilr
      </label>
      <div className="tab">
        <h2>Add spoilr</h2>
        <PostForm />
      </div>
    </div>
  );
}
