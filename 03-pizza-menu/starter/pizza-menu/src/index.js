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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
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
        <Pizza
          name={pizzaData[0].name}
          ingredients={pizzaData[0].ingredients}
          photoName={pizzaData[0].photoName}
          price={+pizzaData[0].price}
        />
        <Pizza
          name={pizzaData[1].name}
          ingredients={pizzaData[1].ingredients}
          photoName={pizzaData[1].photoName}
          price={+pizzaData[1].price}
        />
        <Pizza
          name={pizzaData[2].name}
          ingredients={pizzaData[2].ingredients}
          photoName={pizzaData[2].photoName}
          price={+pizzaData[2].price}
        />
        <Pizza
          name={pizzaData[3].name}
          ingredients={pizzaData[3].ingredients}
          photoName={pizzaData[3].photoName}
          price={+pizzaData[3].price}
        />
      </div>
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price + 3}€</span>
    </div>
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

// REact v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
