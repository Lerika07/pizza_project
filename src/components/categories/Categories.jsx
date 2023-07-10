import { useState } from "react";
import "./categories.scss";
const Categories = () => {
  const [index, setIndex] = useState(0);
  const categories = ["Всі", "М'ясні", "Вегетаріанські", "Гострі"];

  const onActive = (index) => {
    setIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onActive(i)}
            className={index === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
