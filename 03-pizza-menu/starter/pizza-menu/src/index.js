import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src={pizzaData[2].photoName} alt={pizzaData[2].name} />
      <h2>{pizzaData[2].name}</h2>
      <p>{pizzaData[2].ingredients}</p>;
    </div>
  );
}

// REact v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
