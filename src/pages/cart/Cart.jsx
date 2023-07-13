import "../../style/style.scss";
import "./cart.scss";

const Cart = () => {
  return (
    <div className="cart container">
      <div className="cart__header">
        <i className="fas fa-shopping-cart"></i>
        <h1 className="cart__title">Кошик</h1>
      </div>
      <div className="cart__clear">
        <i className="fa fa-trash"></i>
        <p cart__clear-button>Очистити кошик</p>
      </div>
    </div>
  );
};

export default Cart;
