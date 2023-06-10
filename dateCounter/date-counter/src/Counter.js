import Step from "./Step";
import { useState } from "react";
import Count from "./Count";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <a href="https://jadr-datecounterv2.netlify.app/">Version 2.0</a>
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
    </div>
  );
}
