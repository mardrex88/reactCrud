import React, { useState } from 'react'
import UserTable from './Components/UserTable';
import AddUserForm from './Components/AddUserForm';
import EditUserForm from './Components/EditUserForm';
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

  //Eliminar Usuario
  const deleteUser = (id)=>{
    setUser(users.filter(user => user.id !== id));
  }

  //Editar Usuarios
  const [editing,setEditing] = useState(false);

  const [currentUser,setCurrentUser] = useState({
    id: null,
   name: '',
   nameUser:''
  });

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      userName: user.userName
    })
  }

  const updateUser =(id, updateUser)=>{
    setEditing(false);
    setUser(users.map(user => (user.id === id?updateUser : user)));
  }

  return (
   <div className="container">
     <h1> CRUD App with Hooks</h1>
     <div className="flex-row">
       <div className="flex-large">

        {
          editing ?(
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                currentUser = {currentUser}
                updateUser = {updateUser}
              ></EditUserForm>
            </div>
          ):(
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser = {addUser}> </AddUserForm>
            </div>
          )
        }
       </div>
        <div className="flex-large"> 
          <h2>View Users</h2>
          <UserTable users = {users} deleteUser = {deleteUser} editRow ={editRow}/>
        </div>
     </div>
   </div>
  );
}

export default App;
