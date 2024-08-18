import React, { useEffect } from 'react'
import Login from './Login.js'
import Browse from './Browse.js'
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice.js'
import { auth } from '../utils/firebase.js'

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browser",
      element: <Browse/>
    },

  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
       const {uid, email,displayName} = user;
       dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      } else {
       dispatch(removeUser());
      }
    });
  },[])


  return (
    <div>
    <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body