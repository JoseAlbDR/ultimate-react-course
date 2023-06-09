import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <p>Show date based on count from Today.</p>
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
      <p>
        {!count
          ? `Today is ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </p>
    </div>
  );
}

function Count({ count, setCount, step }) {
  function handleNextCount() {
    setCount((c) => c + step);
  }

  function handlePreviousCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="info">
      <button onClick={handlePreviousCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleNextCount}>+</button>
    </div>
  );
}

function Step({ step, setStep }) {
  function handlePreviousStep() {
    if (step >= 1) setStep((s) => s - 1);
  }

  function handleNextStep() {
    if (step >= 0) setStep((s) => s + 1);
  }
  return (
    <div className="info">
      <button onClick={handlePreviousStep}>-</button>
      <span className="stepCount">Step: {step}</span>
      <button onClick={handleNextStep}>+</button>
    </div>
  );
}

// function Step() {
//   const [step, setStep] = useState(1);

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function handleNext() {
//     if (step > 1) setStep((s) => s + 1);
//   }

//   return (
//     <div>
//       <button onClick={handlePrevious}>-</button>
//       <span>Step:{step}</span>
//       <button onClick={handleNext}>+</button>
//     </div>
//   );
// }

// function Count() {
//   const [count, setCount] = useState(0);

//   function handleNext() {
//     setCount((c) => c + 1);
//   }

//   function handlePrevious() {
//     setCount((c) => c - 1);
//   }

//   return (
//     <div>
//       <button onClick={handlePrevious}>-</button>
//       <span>Count: {count}</span>
//       <button onClick={handleNext}>+</button>
//     </div>
//   );
// }
