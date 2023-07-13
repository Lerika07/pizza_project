import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "../components/pizza-block/Skeleton";
import Pizza from "../components/pizza-block/Pizza";
import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _url = "https://62e91da601787ec7121197b8.mockapi.io/items";

  useEffect(() => {
    axios
      .get(_url)
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content-top container">
        <Categories />
        <Sort />
      </div>
      <div className="pizzas container">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <Pizza key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
