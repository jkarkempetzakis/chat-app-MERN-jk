import React, { useState } from 'react'
import { Link } from "react-router-dom";
import useLogin from '../hooks/useLogin';

const Login = () => {

    const [loginInputs, setLoginInputs] = useState({
        username: "",
        password: ""
    })


    const { loading, login } = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(loginInputs.username, loginInputs.password);
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-8 rounded-lg shadow-2xl bg-rose-100 bg-clip-padding bg-opacity-60'>


                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-800'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text '>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={loginInputs.username}
                            onChange={(e) => setLoginInputs({ ...loginInputs, username: e.target.value })} />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={loginInputs.password}
                            onChange={(e) => setLoginInputs({ ...loginInputs, password: e.target.value })}
                        />
                    </div>
                    <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {
                                loading ? <span className='loading loading-spinner'></span> : "Login"
                            }</button>
                    </div>
                </form>
            </div>






        </div>

    )
}

export default Login

