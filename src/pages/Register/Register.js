import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center mt-20'>
            <div class="card max-w-sm bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-4xl mb-3">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("Name", { required: true })} placeholder="Name" class="input input-bordered input-sm w-full max-w-xs mb-4" />
                        <input type="email" {...register("Email", { required: true })} placeholder="email" class="input input-bordered input-sm w-full max-w-xs mb-4" />
                        <input type="password" {...register("password", { required: true })} placeholder="password" class="input input-bordered input-sm w-full max-w-xs mb-4" />
                        <button className='btn btn-secondary w-full text-white'>Register</button>
                    </form>
                    <p>Already have an account ? <Link className='text-secondary' to='/login'>Login</Link></p>
                    <div class="divider">OR</div>
                    <button class="btn btn-active btn-ghost">Register with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;