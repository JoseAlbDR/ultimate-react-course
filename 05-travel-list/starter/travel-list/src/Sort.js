export default function Sort({ sortBy, onSortBy, onResetItems }) {
  // Sort list id, description, packed or not
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => onSortBy(e)}>
        <option value="id">Sort by input order.</option>
        <option value="description">Sort by description.</option>
        <option value="packed">Sort by packed status.</option>
      </select>
      <button onClick={onResetItems}>Clear List</button>
    </div>
  );
}
