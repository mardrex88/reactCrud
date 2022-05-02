import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data,e) =>{
        console.log(data);
        props.addUser(data);
        e.target.reset();
    }

    return (  
        <form onSubmit={ handleSubmit(onSubmit) }>
            <label>Name</label>
            <input  type="text" {...register("name", {
                        required: { value: true, message: 'Campo Requerido' }
                    })
            } />
            <label>UserName</label>
            <input type="text" {...register("userName", {
                        required: { value: true, message: 'Campo Requerido' }
                    })
                }
                    />
            <button>Add new User</button>
        </form>
        );
}
 
export default AddUserForm;