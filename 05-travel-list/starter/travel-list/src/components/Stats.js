export default function Stats({ items }) {
  // Early return when no items yet
  if (!items.length)
    return (
      <footer className="stats">
        <em>No items yet.</em>
      </footer>
    );

  // Items already packaged, all items, and percentage of packaged
  const packed = items.filter((item) => item.packed).length;
  const numItems = items.length;
  const percentage = Math.round((packed / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `💼 You have ${numItems} items on your list, and you already packed ${packed} (${percentage}%)`
          : `You got everything! Ready to go ✈`}
      </em>
    </footer>
  );
}
