export default function Step({ step, setStep }) {
  function handlePreviousStep() {
    if (step >= 1) setStep((s) => s - 1);
  }

  function handleNextStep() {
    if (step >= 0) setStep((s) => s + 1);
  }
  return (
    <div className="info">
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      />
      <span>{step}</span>
    </div>
  );
}
