import error from "../../resources/error.gif";

import "./error.scss";

const ErrorMessage = () => {
  return (
    <div className="error__block">
      <h1 className="error__title">Вибачте, щось пішло не так</h1>
      <img className="error__img" src={error} alt="error" />
    </div>
  );
};

export default ErrorMessage;
