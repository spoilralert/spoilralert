import Post from "../Post";

export default function TabsProfile({ spoilrs }) {
  return (
    <div className="tabs container__layout">
      <input type="radio" name="tabs" id="tabone" defaultChecked={true} />
      <label htmlFor="tabone" className="tab__label">
        Added Spoilrs
      </label>
      <div className="tab">
        {spoilrs.map((spoilr) =>
          spoilr.attributes.spoilrs.data.map((s) => (
            <Post key={s.id} spoilr={s} />
          ))
        )}
      </div>

      <input type="radio" name="tabs" id="tabtwo" />
      <label htmlFor="tabtwo" className="tab__label"></label>
      <div className="tab"></div>
    </div>
  );
}
