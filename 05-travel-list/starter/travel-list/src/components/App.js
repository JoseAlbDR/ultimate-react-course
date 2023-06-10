import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // Items list STATE
  const [items, setItems] = useState([]);

  // Add items
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  // Delete items
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Update items (packaged)
  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Clear all items
  function handleResetItems() {
    if (items.length > 0)
      if (window.confirm("Are you sure you want to delete al items?")) {
        setItems([]);
      }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onResetItems={handleResetItems}
      />
      <Stats items={items} />
    </div>
  );
}
