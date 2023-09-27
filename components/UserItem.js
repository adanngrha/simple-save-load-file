import React from "react";

export default function UserItem({ user, onDelete }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <div>
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-gray-500">{user.age} years old</p>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
};
