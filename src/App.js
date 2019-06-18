import React, { useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
const App = () => {
  const usersData = [
    { id: 1, name: 'Danny', username: 'RoA'}, 
    { id: 2, name: 'Katie', username: 'kittyP'}, 
    { id: 3, name: 'Eren', username: 'TITANS'}, 
  ]


  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false);

  const initialFormState = {id: null, name: "", username: ""}

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }
  
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({id: user.id, name: user.name, username: user.username});
  }

  const updateUser 

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
  
}

export default App;
