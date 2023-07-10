import "./sort.scss";

const Sort = () => {
  return (
    <div className="sort">
      Сортування по: <span>популярності</span>
      <div className="sort__popup">
        <ul>
          <li className="active">популярності</li>
          <li>ціні</li>
          <li>алфавіту</li>
        </ul>
      </div>
    </div>
  );
};
export default Sort;
