import { Link } from "react-router-dom";
import logo from "../../resources/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <nav className="header__nav">
            <Link className="header__logo-item" to="/">
              <div>
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <Link className="header__main" to="/">
              Головна
            </Link>
          </nav>
        </div>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <button className="header__menu-link">Увійти</button>
            </li>
          </ul>
          <div className="header__cart">
            <Link to="/cart" className="header__cart-link">
              <i className="fas fa-shopping-cart"></i>
              <span className="header__cart-count"> 0 грн</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
