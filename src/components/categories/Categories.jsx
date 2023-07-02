import "./categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Всі</li>
        <li>М'ясні</li>
        <li>Вегетаріанські</li>
        <li>Гострі</li>
      </ul>
    </div>
  );
};
export default Categories;
