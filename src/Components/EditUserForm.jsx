import React from 'react'
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: props.currentUser
    });

    const onSubmit = (data,e) =>{
        props.updateUser(props.currentUser.id,data)
        e.target.reset();
    }

    return (  
        <form onSubmit={ handleSubmit(onSubmit)}>
            <label>Name</label>
            <input  type="text" 
            className={errors.name && "has-error"} //Si hay errores en input "name" pintar con la clase has-error
            {...register("name", {
                        required: 'Campo Requerido' 
                    })
            } />
            {
                errors.name && <label>Este campo es Requerido.</label> // si hay errores muestra el mensaje del error
            }
            <label>UserName</label>
            <input type="text" 
                className={errors.userName && "has-error"} //Si hay errores en input "name" pintar con la clase has-error
                {...register("userName", {
                        required: "Campo Requerido"
                    })
                }
                    />
             {
                errors.userName && <label>Este campo es Requerido.</label> // si hay errores muestra el mensaje del error
            }
            <button>Edit User</button>
        </form>
        );
}
 
export default EditUserForm;