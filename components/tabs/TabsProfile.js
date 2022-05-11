import Post from "../Post";

export default function TabsProfile() {
  return (
    <div className="tabs container__layout">
      <input type="radio" name="tabs" id="tabone" checked="checked" />
      <label htmlFor="tabone" className="tab__label">
        Added Spoilrs
      </label>
      <div className="tab">
        <Post />
      </div>

      <input type="radio" name="tabs" id="tabtwo" />
      <label htmlFor="tabtwo" className="tab__label"></label>
      <div className="tab"></div>
    </div>
  );
}
