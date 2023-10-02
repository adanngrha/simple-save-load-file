import React from "react";
import UserItem from "./UserItem";

export default function UserList({ users, onDelete, handleSave, handleChange }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-5">User List</h2>
      {users.length === 0 ? (
        <>
          <p className="text-center text-gray-500">No user found.</p>
          <div>
            <button
              onClick={handleSave}
              className="flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
          <div>
            <button
              onClick={handleChange}
              className="flex mt-5 w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Back to Add User
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="h-30 overflow-y-scroll">
            {users.map((user) => (
              <UserItem key={user.name} user={user} onDelete={onDelete} />
            ))}
          </div>
          <div>
            <button
              onClick={handleSave}
              className="flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
          <div>
            <button
              onClick={handleChange}
              className="flex mt-5 w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Back to Add User
            </button>
          </div>
        </>
      )}
    </div>
  );
};
