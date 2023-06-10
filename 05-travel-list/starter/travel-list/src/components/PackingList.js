import { useState } from "react";
import Item from "./Item";
import Sort from "./Sort";

export default function PackingList({
  items,
  onDeleteItem,
  onUpdateItem,
  onResetItems,
}) {
  // sortBy STATE (default id => Creation order)
  const [sortBy, setSortBy] = useState("id");

  function onSortBy(e) {
    setSortBy(e.target.value);
  }

  // Sort
  let sortedItems;

  if (sortBy === "id") sortedItems = items.slice();
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <Sort sortBy={sortBy} onSortBy={onSortBy} onResetItems={onResetItems} />
    </div>
  );
}
