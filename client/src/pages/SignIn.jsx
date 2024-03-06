import React, {Component, useState} from "react";
//import "./SignIn&Up.css";
import {auth, app} from "../firebase"
import {signInWithEmailAndPassword}  from "firebase/auth";
import { useNavigate } from "react-router-dom";

 const SignIn = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate("");

 const SignIn = (e) => {
     e.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        navigate("/dashboard")
    //console.log (userCredential.user)
  })
  .catch((error) => {
    //console.log(error)
  });
    }

    return (
        <>
            <section className="bg-slate-200 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"> 
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1> 
              <form onSubmit={SignIn}>
                <div className="input-control">
                   <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                   <input type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-gray-50 borde mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-blue-500"></input>
                </div>
                <div className="input-control">
                   <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                   <input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} className="bg- border mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <button type="submit" className=" mb-2 w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-1 focus:outline-none focus:ring-indigo-500 font-bold rounded-lg text-base px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-500">Sign in</button>
                <p className="text-sm font-light text-gray-600 dark:text-gray-400">Don’t have an account ? <span>
                  <a href="/SignUp" className="font-medium text-indigo-600 hover:underline dark:text-indigo-600">Create an account</a></span></p>
            </form>
            </div>
            </div>
            </div>
            </section>
        </>
    )
}
export default SignIn;