import "./pizza.scss";
import "../../style/style.scss";
import { useState } from "react";

const Pizza = ({ title, prices, image, sizes, types }) => {
  const [index, setIndex] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);
  const onActive = (i) => {
    setIndex(i);
  };
  const onActiveType = (i) => {
    setTypeIndex(i);
  };

  return (
    <div className="pizza">
      <img className="pizza__img" src={image} alt="pizza" />
      <h2 className="pizza__title">{title}</h2>
      <div className="pizza__about">
        <div className="pizza__selector">
          <ul>
            {types.map((type, i) => (
              <li
                key={i}
                onClick={() => onActiveType(i)}
                className={typeIndex === i ? "active" : ""}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza__size">
          <ul>
            {sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => onActive(i)}
                className={index === i ? "active" : ""}
              >
                {size} см
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pizza__bottom">
        <div className="pizza__price">{prices[index]} ₴</div>

        <div className="pizza__button">У кошик</div>
      </div>
    </div>
  );
};
export default Pizza;
