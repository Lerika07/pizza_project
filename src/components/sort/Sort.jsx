import { useState } from "react";
import "./sort.scss";

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const sortList = ["популярності", "ціні", "алфавіту"];
  const sortName = sortList[selected];

  const onActive = (i) => {
    setSelected(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      Сортування по: <b onClick={() => setOpen(!open)}>{sortName}</b>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((item, i) => (
              <li
                key={i}
                onClick={() => onActive(i)}
                className={selected === i ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Sort;
