import logo from "../../resources/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a className="header__logo-item" href="/">
            <div>
              <img src={logo} alt="logo" />
            </div>
          </a>
          <a className="header__main" href="/">
            Головна
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <button className="header__menu-link">UKR</button>
            </li>
            <li className="header__menu-item">
              <button className="header__menu-link">Увійти</button>
            </li>
          </ul>
          <div className="header__cart">
            <a href="#" className="header__cart-link">
              <i className="fas fa-shopping-cart"></i>
              <span className="header__cart-count"> 0 грн</span>
            </a>
          </div>
        </nav>

        {/* <div className="header__nav">
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
        </div> */}
      </div>
    </header>
  );
};

export default Header;
