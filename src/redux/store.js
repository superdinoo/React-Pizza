import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

//пользование несколькими мидлворами
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//подключение redux thunk для работы с асиинхроными экшенами
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

window.store = store;

export default store;
