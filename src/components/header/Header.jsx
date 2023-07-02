import logo from "../../resources/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">
            <div className="header__logo-item">
              <img src={logo} alt="logo" />
            </div>
          </a>
          <a href="/">Головна</a>
        </div>
        <div className="header__nav">
          <div>
            <button>UKR</button>
          </div>
          <div>
            <button>Увійти</button>
          </div>
          <div className="header__cart">
            <button>Кошик</button>
            <p>0</p>
            <p>0 ₴</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
