import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue("name", props.currentUser.name);
    setValue("userName", props.currentUser.userName);

    const onSubmit = (data,e) =>{
     //   props.addUser(data);
        props.updateUser(props.currentUser.id,data)
        e.target.reset();
    }

    return (  
        <form onSubmit={ handleSubmit(onSubmit)}>
            <label>Name</label>
            <input  type="text" {...register("name", {
                        required: { value: true, message: 'Campo Requerido' }
                    })
            } />
            <div>
                {errors?.name?.message}
            </div>
            <label>UserName</label>
            <input type="text" {...register("userName", {
                        required: { value: true, message: 'Campo Requerido'}
                    })
                }
                    />
                    {errors?.userName?.message}
            <button>Edit User</button>
        </form>
        );
}
 
export default EditUserForm;