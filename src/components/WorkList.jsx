import ListItem from "./ListItem";

export default function WorkList({ items = [] }) {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item) => (
        <ListItem key={item?.id} item={item} />
      ))}
    </ul>
  );
}
