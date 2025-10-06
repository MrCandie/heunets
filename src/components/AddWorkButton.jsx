import { FiPlus } from "react-icons/fi";

export default function AddWorkButton({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-blue-700 transition-all"
    >
      <FiPlus size={18} /> Add Work Item
    </button>
  );
}
