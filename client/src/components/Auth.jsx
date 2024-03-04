import { useEffect, useState } from "react";
import {auth, app} from "../firebase"
import {onAuthStateChanged, signOut}  from "firebase/auth"
import { NavLink} from "react-router-dom";
const Auth = () => {
    const [authenticatedUser, setauthenticatedUser] = useState ("");

    useEffect(() => {
      const listenAuth = onAuthStateChanged (auth,(user) => {
        if (user) {
          setauthenticatedUser(user);
        } else {
          setauthenticatedUser(null);
        }

      })

      return () => {
        listenAuth();
      }

    },[])

    const userSignOut = () => {
        signOut(auth).then (() =>{
            console.log("user signed out")
        }).catch(error => console.log('error'))
    }

    return (
      <>
        {authenticatedUser === null ? (
          <>
            <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/SignIn"
                  className="block text-slat]e-400 hover:text-slate-200 transition duration-150 truncate"
                >
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Sign In
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/signup"
                  className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                >
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Sign up
                  </span>
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/SignIn "
                  className="block text-slat]e-400 hover:text-slate-200 transition duration-150 truncate"
                >
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Sign Out
                  </span>
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </>
    );
}

export default Auth;