import Header from "../header/Header";
import { Home } from "../../pages/Home";
import Cart from "../../pages/cart/Cart";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <Home />
        {/* <Cart /> */}
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
