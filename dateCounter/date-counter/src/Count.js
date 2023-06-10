export default function Count({ count, setCount, step }) {
  function handleNextCount() {
    setCount((c) => c + +step);
  }

  function handlePreviousCount() {
    setCount((c) => c - +step);
  }

  return (
    <div className="info">
      <button onClick={handlePreviousCount}>-</button>
      <input
        type="text"
        value={count}
        onChange={(c) => setCount(+c.target.value)}
      />
      <button onClick={handleNextCount}>+</button>
    </div>
  );
}
