import Step from "./Step";
import { useState } from "react";
import Count from "./Count";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="container">
      <header>Show date based on count from Today</header>
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
      <p>
        {!count
          ? `Today is ${date.toDateString()}`
          : `${count} days from today ${
              count < 0 ? "was" : "is"
            } ${date.toDateString()}`}
      </p>

      <button
        className={`reset ${step >= 1 && count > 0 ? "" : "hidden"}`}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
