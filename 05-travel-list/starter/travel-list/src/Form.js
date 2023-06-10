import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Next state depends on current state
  // Cant mutate state
  function handleSubmit(event) {
    event.preventDefault();

    // If no description Guard Clause
    if (!description) return;

    // Create new items
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    // Clear form imputs
    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
