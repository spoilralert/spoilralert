import { useState } from "react";

export default function Tags() {
  const [checked, setChecked] = useState([]);
  const checkList = ["Bad", "LOL", "Surprising", "Gory"];

  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  let isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="tags__list">
      <h4>Tags:</h4>
      <div className="tag__container">
        {checkList.map((item, index) => (
          <div key={index} className="tag">
            <span className={isChecked(item)}>{item}</span>
            <input value={item} type="checkbox" onChange={handleCheck} />
          </div>
        ))}
      </div>
    </div>
  );
}
