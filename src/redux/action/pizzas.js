import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

//ассинхронный экшн () => ()
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy},-desc,-asc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
