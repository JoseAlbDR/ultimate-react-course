export default function Step({ step, setStep }) {
  return (
    <div className="info">
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(s) => setStep(+s.target.value)}
      />
      <span>{step}</span>
    </div>
  );
}
