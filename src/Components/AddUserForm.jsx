import React from 'react'
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();// esto en el video es diferente por que usa una version mas viejita


    //se ejecuta la enviar el formulario y lo que hace es enviar la data del formulario meidante addUser que se recibe mediante props desde App.js
    const onSubmit = (data,e) =>{
        props.addUser(data);
        e.target.reset();
        reset({
            name:'',
            userName:''
        })
        
    }

    return (  
        <form onSubmit={ handleSubmit(onSubmit)}>
            <label>Name</label>
            <input  
                type="text" 
                className={errors.name && "has-error"} //Si hay errores en input "name" pintar con la clase has-error
                {...register(
                    "name",
                    { 
                        required: "Este campo es requerido"
                    })
                } 
            />
           {
            errors.name && <label>Este campo es Requerido.</label> // si hay errores muestra el mensaje del error
           } 
            <label>UserName</label>
            <input 
                type="text" 
                className={errors.userName && "has-error"} //Si hay errores en input "name" pintar con la clase has-error
                {...register(
                    "userName", 
                    {
                        required: 'Campo Requerido'
                    })
                }
            />
                   <div className="error">
           {errors?.userName?.message}
      </div>
            <button>Add new User</button>
        </form>
        );
}
 
export default AddUserForm;