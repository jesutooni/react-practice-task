import { useState } from "react";

import Button from "./Button";
import Card from "./Card";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUser = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(username, age);
    setAge("");
    setUsername("");
  };

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const ageChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <label htmlFor="username" className="font-bold my-1">
          Username
        </label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={usernameChange}
          className="border border-gray-400 w-full"
        />
        <br />
        <label htmlFor="age" className="font-bold my-1">
          Age (Years)
        </label>
        <br />
        <input
          type="number"
          id="age"
          value={age}
          onChange={ageChange}
          className=" border border-gray-400 w-full"
        />
        <br />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
