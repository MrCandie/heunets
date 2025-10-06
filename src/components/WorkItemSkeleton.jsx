import React from "react";

const WorkItemSkeleton = ({ count = 3 }) => {
  return (
    <ul className="divide-y divide-gray-100">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <div className="flex items-center gap-3 py-3 px-2">
            <div className="h-2.5 w-2.5 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WorkItemSkeleton;
