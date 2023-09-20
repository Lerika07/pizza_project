import Header from "../header/Header";
import { Home } from "../../pages/Home";
import Cart from "../../pages/cart/Cart";

import { Routes, Route } from "react-router-dom";
import Page404 from "../../pages/404/Page404";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart/*" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
