import React from "react";
import { Tags } from "./ts/MovieTypes";

interface Props {
  title: string;
  items: Tags[];
  checked: Array<number>;
  handleCheck: (e: React.ChangeEvent) => Promise<void>
}

export default function Checkbox({ title, items, checked, handleCheck }: Props) {
  let isChecked = (item: number) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="checklist">
      <h4>{title}</h4>
      <div className="checklist__container">
        {items.map((item, index) => (
          <div key={index} className="checklist__item">
            <span className={isChecked(item.id)}>{item.attributes.name}</span>
            <input value={item.id} type="checkbox" onChange={handleCheck} />
          </div>
        ))}
      </div>
    </div>
  );
}
