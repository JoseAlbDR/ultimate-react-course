export default function Step({ step, setStep }) {
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
