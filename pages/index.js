import Canvas from "@/components/Canvas";
import Toast from "@/components/Toast";
import UserInput from "@/components/UserInput";
import UserList from "@/components/UserList";
import React, { useCallback, useEffect, useState } from "react";
import useInput from "@/hooks/UseInput";

if (typeof document === 'undefined') {
  React.useLayoutEffect = useEffect;
}

export default function Home() {
  const [name, onNameChange] = useInput("");
  const [age, onAgeChange] = useInput("");
  const [role, onRoleChange] = useInput("User");
  const [inputPage, setInputPage] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const res = await fetch('/api/data');
      const data = await res.json();
      setUsers(data.users);
    }

    fecthData();
  } , []);

  const notify = useCallback((message) => {
    Toast({message});
  }, []);

  const handleSubmit = (user) => {
    user.preventDefault();

    const newUser = {
      name: name,
      age: Number(age),
      role: role,
    };

    setUsers([...users, newUser]);

    onNameChange({ target: { value: "" } });
    onAgeChange({ target: { value: "" } });

    notify('User added!');
  }

  const handleChange = (event) => {
    event.preventDefault();
    setInputPage(!inputPage);
  }

  const handleDelete = async (name) => {
    setUsers(users.filter((user) => user.name !== name));
  };

  const handleSave = async () => {
    await fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify(users),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    notify('Data saved!');
  }

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {
              inputPage ? (
                <UserInput name={name} onNameChange={onNameChange} age={age} onAgeChange={onAgeChange} role={role} onRoleChange={onRoleChange} handleSubmit={handleSubmit} handleChange={handleChange} />
              ) : (
                <UserList users={users} onDelete={handleDelete} handleChange={handleChange} handleSave={handleSave} />
              )
            }
          </div>
        </div>
        <div className="flex-1">
          <div className="border-solid border-l-2 border-indigo-600">
            <Canvas users={users} />
          </div>
        </div>
      </div>
    </>
  )
}