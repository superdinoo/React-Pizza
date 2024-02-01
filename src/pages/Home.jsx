import React, { useCallback, useEffect } from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PlaceholderBlock,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/action/pizzas";
import { addPizzaToCart } from "../redux/action/cart";

import { setCategory, setSortBy } from "../redux/action/filters";

const categoryNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [sortBy, category]);

  const onSelectCategory = useCallback((name) => {
    dispatch(setCategory(name));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                onClickAddPizza={handleAddPizza}
                addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                {...pizza}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PlaceholderBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
