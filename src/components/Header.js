import React, { useEffect } from 'react'
import logo from '../utils/Netflix_Logo.png'
import userIcon from '../utils/Netflix-user-icon.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';



const Header = () => {
const Navigate = useNavigate();
const user = useSelector((store)=> store.user);
const dispatch = useDispatch();


useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      
     const {uid, email,displayName} = user;
     dispatch(addUser({uid:uid,email:email,displayName:displayName}));
     Navigate("/browser");
    } else {
     dispatch(removeUser());
     Navigate("/");
    }
  });
  return () => unsubscribe();
},[])
 const handleBtnClick = () =>{
  signOut(auth).then(() => {
  }).catch((error) => {
    console.log(error);
    Navigate("/error");
  });

  }

  return (
    <div className='fixed top-0 left-0 flex justify-between items-center w-full z-10 bg-gradient-to-b from-black p-4'>
      <img className='w-40' src={logo} alt='Netflix Logo'/>

      {user && (<div className='flex items-centerr space-x-4'>
        <img src={userIcon} className='w-10 h-10 rounded-md' alt='User Icon'/>
        <button  onClick={handleBtnClick} className='text-white hover:text-red-600'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
