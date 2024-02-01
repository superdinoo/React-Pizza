import React from "react";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

// Фетч запрос на получение данных

// fetch("http://localhost:3000/db.json")
//   .then((resp) => resp.json())
//   .then((json) => {
//     setPizzas(json.pizzas);
//   });

export default App;
