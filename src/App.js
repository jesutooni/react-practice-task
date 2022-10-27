import { useState } from "react";

import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUser = () => {

  }

  return (
    <div className="App bg-gray-800 py-16 h-screen space-y-5">
      <AddUser onAddUser={addUser} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
