import Categories from "../categories/Categories";
import Header from "../header/Header";
import Pizza from "../pizza-block/Pizza";
import Sort from "../sort/Sort";
import pizzas from "../test/pizzas.json";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <div className="content-top container">
          <Categories />
          <Sort />
        </div>
        <div className="pizzas container">
          {pizzas.map((obj) => (
            <Pizza key={obj.id} {...obj} />
          ))}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
