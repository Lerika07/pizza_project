import { Link } from "react-router-dom";
import error from "../../resources/error.gif";

const Page404 = () => {
  return (
    <div className="error__block">
      <h1 className="error__title">Вибачте, ця сторінка не існує</h1>
      <img className="error__img" src={error} alt="error" />
      <Link className="error__back" to="/">
        <h2 className="error__title">Повернутись на головну сторінку</h2>
      </Link>
    </div>
  );
};

export default Page404;
