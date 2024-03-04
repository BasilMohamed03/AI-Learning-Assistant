import React, {useState} from "react";
//import "./SignIn&Up.css";
import {auth, app} from "../firebase"
import {createUserWithEmailAndPassword}  from "firebase/auth"
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";


 const SignUp = () => {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate("");

 

 const SignUp = (e) => {
  if (password !== confirmPassword) {
    alert("Oops! Passwords don't match. Please try again.");
    return;
  }
     e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        navigate("/SignIn")

    //console.log (userCredential.user)
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });
    }

    return (
      <>
      <header>
        <div class="mr-20 mt-4 flex flex-row-reverse">
             <ThemeToggle/>     
                </div>
      </header>
      <body className="bg-slate-200 dark:bg-gray-900">
        <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div classNameName="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"> 
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign Up
        </h1> 
        <form onSubmit={SignUp}>
        <div className="input-control">
             <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
             <input type="text" required placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)} className="bg-gray-50 borde mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-blue-500"></input>
          </div>
          <div className="input-control">
             <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
             <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-gray-50 borde mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-900 dark:focus:border-blue-500"></input>
          </div>
          <div className="input-control">
             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
             <input type="password" required placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} className="bg- border mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </div>
          <div className="input-control">
             <label for="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
             <input type="password" required placeholder="Confirm your password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} className="bg- border mb-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
          </div>
          <button type="submit" className=" mb-2 w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-1 focus:outline-none focus:ring-indigo-500 font-bold rounded-lg text-base px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-500">Sign up</button>
          <p className="text-sm font-light text-gray-600 dark:text-gray-400">Already have an account ? <span>
            <a href="/SignIn" className="font-medium text-indigo-600 hover:underline dark:text-indigo-600">Sign in</a></span></p>
      </form>
      </div>
      </div>
      </div>
      </body>
  </>
    )
}
export default SignUp;