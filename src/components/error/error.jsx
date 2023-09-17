import error from "../../resources/error.gif";

import "./error.scss";

const ErrorMessage = () => {
  return (
    <div className="error-block">
      <h1>Вибачте, щось пішло не так</h1>
      <img src={error} alt="error" />
    </div>
  );
};

export default ErrorMessage;
