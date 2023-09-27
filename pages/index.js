import Canvas from "@/components/Canvas";
import UserInput from "@/components/UserInput";
import UserList from "@/components/UserList";
import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";

if (typeof document === 'undefined') {
  React.useLayoutEffect = useEffect;
}

export default function Home() {
  const useInput = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const onValueChangeHandler = (event) => {
      setValue(event.target.value);
    };

    return [value, onValueChangeHandler];
  }

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

  const handleSubmit = (user) => {
    user.preventDefault();

    const newUser = {
      name: name,
      age: age,
      role: role,
    };

    setUsers([...users, newUser]);

    onNameChange({ target: { value: "" } });
    onAgeChange({ target: { value: "" } });

    toast.success('🦄 Wow so easy!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleChange = () => {
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

    console.log('save clicked');
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