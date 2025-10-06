export default function ListItem({ item }) {
  const priorityColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  const statusColors = {
    pending: "text-yellow-600 bg-yellow-100",
    "in-progress": "text-blue-600 bg-blue-100",
    completed: "text-green-600 bg-green-100",
  };

  return (
    <li className="p-4 mb-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-800 capitalize font-medium text-sm sm:text-base">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          )}
        </div>

        {/* Status Badge */}
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize ${
            statusColors[item.status] || "text-gray-600 bg-gray-100"
          }`}
        >
          {item.status || "pending"}
        </span>
      </div>

      {/* Priority indicator */}
      <div className="flex items-center gap-2 mt-3">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            priorityColors[item.priority] || "bg-gray-400"
          }`}
        ></span>
        <span className="text-xs text-gray-600 capitalize">
          Priority: {item.priority || "medium"}
        </span>
      </div>
    </li>
  );
}
