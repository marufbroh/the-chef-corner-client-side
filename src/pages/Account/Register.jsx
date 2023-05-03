import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    return (
        <div className="py-6 lg:py-24">
            <div className=" bg-white rounded-lg shadow-lg mx-auto max-w-sm lg:max-w-xl">
                <form className="w-full p-8">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">The Chef's Corner</h2>
                    <p className="text-xl text-gray-600 text-center">Please Register!</p>
                    {/* <div className='flex flex-col lg:flex-row gap-3'>
                        <Link className="flex items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <div className="px-4 py-3">

                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                        </Link>
                        <Link className="flex items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <div className="px-4 py-3">

                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                        </Link>
                    </div> */}
                    {/* <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div> */}
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name="name" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="url" name="photoUrl" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" />
                    </div>
                    <div className="mt-8">
                        <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" type='submit'>Register</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <p className="text-sm text-center text-gray-500">Already have an account? <Link to={"/account/login"} className='underline'>Login</Link></p>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <button className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <FaGoogle className='text-black' />
                            <span className="py-3 text-center text-gray-600 font-bold">Google</span>
                        </button>
                        <button className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <FaGithub className='text-black' />
                            <span className="py-3 text-center text-gray-600 font-bold">Github</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;