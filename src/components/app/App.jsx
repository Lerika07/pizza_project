import Categories from "../categories/Categories";
import Header from "../header/Header";
import Pizza from "../pizza-block/Pizza";
import Sort from "../sort/Sort";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        {/* <div className="content-top"> */}
        <div className="container content-top">
          <Categories />
          <Sort />
        </div>
        {/* </div> */}
        <Pizza />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
