import Canvas from "@/components/Canvas";
import UserInput from "@/components/UserInput";
import UserList from "@/components/UserList";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
  const [inputPage, setInputPage] = useState(true);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    // Add more users as needed
  ]);

  const handleSubmit = (user) => {
    user.preventDefault();

    const newUser = {
      id: new Date().getTime(),
      name: name,
      age: age,
    };

    setUsers([...users, newUser]);

    toast.success("User added successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      className: "bg-green-500 text-white font-semibold",
    });

    onNameChange({ target: { value: "" } });
    onAgeChange({ target: { value: "" } });
  }

  const handleChange = () => {
    setInputPage(!inputPage);
  }

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <ToastContainer />
      <div className="flex">
        <div className="flex-1">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {
              inputPage ? (
                <UserInput name={name} onNameChange={onNameChange} age={age} onAgeChange={onAgeChange} handleSubmit={handleSubmit} handleChange={handleChange} />
              ) : (
                <UserList users={users} onDelete={handleDelete} handleChange={handleChange} />
              )
            }
          </div>
        </div>

        <div className="flex-1">
          <div className="border-solid border-l-2 border-indigo-600">
            <Canvas />
          </div>
        </div>
      </div>
    </>
  )
}