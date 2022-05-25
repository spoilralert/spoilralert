export default function Checkbox({ title, items, checked, handleCheck }) {
  let isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="checklist">
      <h4>{title}</h4>
      <div className="checklist__container">
        {items.map((item, index) => (
          <div key={index} className="checklist__item">
            <span className={isChecked(item.id)}>{item.attributes.tag}</span>
            <input value={item.id} type="checkbox" onChange={handleCheck} />
          </div>
        ))}
      </div>
    </div>
  );
}
