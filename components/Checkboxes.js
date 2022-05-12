import { useState } from "react";

export default function Checkbox(props) {
  const [checked, setChecked] = useState([]);
  const checkList = props.items;

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
    <div className="checklist">
      <h4>{props.title}</h4>
      <div className="checklist__container">
        {checkList.map((item, index) => (
          <div key={index} className="checklist__item">
            <span className={isChecked(item)}>{item}</span>
            <input value={item} type="checkbox" onChange={handleCheck} />
          </div>
        ))}
      </div>
    </div>
  );
}
