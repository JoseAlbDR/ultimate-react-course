export default function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      {/* Update item */}
      <input
        onChange={() => onUpdateItem(item.id)}
        type="checkbox"
        checked={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Delete item */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
