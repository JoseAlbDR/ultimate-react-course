import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently Open!</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src={pizzaData[2].photoName} alt={pizzaData[2].name} />
      <h2>{pizzaData[2].name}</h2>
      <p>{pizzaData[2].ingredients}</p>
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
