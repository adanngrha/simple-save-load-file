// components/UserList.js
import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onDelete }) => {
  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-5">User List</h2>
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No user found.</p>
      ) : (
        users.map((user) => (
          <UserItem key={user.id} user={user} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default UserList;
