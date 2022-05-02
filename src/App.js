import React, { useState } from 'react'
import UserTable from './Components/UserTable';
import AddUserForm from './Components/AddUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const userData =[
    { id: uuidv4(), name: 'Carlos', userName: 'thistheuser'},
    { id: uuidv4(), name: 'Wilson', userName: 'theDark'},
    { id: uuidv4(), name: 'Fabio', userName: 'theCooll'}
  ]

  //State
  const [users,setUser] = useState(userData);

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();    
    setUser([
      ... users,
      user
    ])


  }
  return (
   <div className="container">
     <h1> CRUD App with Hooks</h1>
     <div className="flex-row">
       <div className="flex-large">
         <h2>Add User</h2>
         <AddUserForm addUser = {addUser}>
         </AddUserForm>
       </div>
        <div className="flex-large"> 
          <h2>View Users</h2>
          <UserTable users = {users}/>
        </div>
     </div>
   </div>
  );
}

export default App;
