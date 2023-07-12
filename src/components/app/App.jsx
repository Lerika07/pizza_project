import { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import Header from "../header/Header";
import Pizza from "../pizza-block/Pizza";
import Sort from "../sort/Sort";
import axios from "axios";
import { PulseLoader } from "react-spinners";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _url = "https://62e91da601787ec7121197b8.mockapi.io/items";

  useEffect(() => {
    axios
      .get(_url)
      .then((data) => setItems(data.data))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <Header />

      <main className="content">
        <div className="content-top container">
          <Categories />
          <Sort />
        </div>
        <div className="pizzas container">
          {isLoading ? (
            <PulseLoader className="loading" color="#36d7b7" />
          ) : (
            items.map((obj) => <Pizza key={obj.id} {...obj} />)
          )}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
