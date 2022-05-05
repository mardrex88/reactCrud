import React, { useState } from 'react'
import {useLocalStorage} from './Utils/useLocalStorage';
import UserTable from './Components/UserTable';
import AddUserForm from './Components/AddUserForm';
import EditUserForm from './Components/EditUserForm';
import { v4 as uuidv4 } from 'uuid'; //Uno de los cambio o mejoras

function App() {

  //Conservamos la info inicial del ejercicio para usarla como data inicial en localStorage
  const initialData =[
    { id: uuidv4(), name: 'Carlos', userName: 'thistheuser'},
    { id: uuidv4(), name: 'Wilson', userName: 'theDark'},
    { id: uuidv4(), name: 'Fabio', userName: 'theCooll'}
  ]

  //obtenemos o creamos la data del LocalStorage
  const {
    item: dataUsers,
    saveItem: saveData,
    error,
  } = useLocalStorage('DATA_USERS', initialData);


 /*  hook de estado que cuando es true muestra el coponente EditUserForm 
 para editar un usuario y si es false muestra el componente AddUserForm */
  const [editing,setEditing] = useState(false);


  //Agregar usuarios
  const addUser = (user) => {
    const newData = [...dataUsers];
    user.id = uuidv4();  
    newData.push(user); 
    saveData(newData)
  }

  //Eliminar Usuario de la data del localStore
  const deleteUser = (id)=>{
    saveData(dataUsers.filter(user => user.id !== id));
  }



  //inicializa el hook para controlar el usuario que se desea editary lo inicializa vacio
  const [currentUser,setCurrentUser] = useState({
    id: null,
   name: '',
   nameUser:''
  });

  //esta funcion establece el estado al hook currenUser para ser 
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      userName: user.userName
    })
  }


  //esta funcion actualiza la informacio ndel usuario en la data del localStorage
  const updateUser =(id, updateUser)=>{
    setEditing(false);
    saveData(dataUsers.map(user => (user.id === id?updateUser : user)));
  }

  return (
   <div className="container">
     <h1>CRUD CON HOOKS</h1>
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
          <UserTable users = {dataUsers} deleteUser = {deleteUser} editRow ={editRow}/>
        </div>
     </div>
   </div>
  );
}

export default App;
