import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen =
    hour >= openHour && hour <= closeHour
      ? "We're currently open!"
      : "Sorry we're closed.";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. {isOpen}
    </footer>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src={pizzaData[2].photoName} alt={pizzaData[2].name} />
      <h3>{pizzaData[2].name}</h3>
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
