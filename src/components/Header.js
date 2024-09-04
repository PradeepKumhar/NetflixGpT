import React, { useEffect } from 'react'
import logo from '../utils/Netflix_Logo.png'
import userIcon from '../utils/Netflix-user-icon.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { addGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGE } from '../utils/constant';
import { addChangeLang } from '../utils/configSlice';



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

  const handleOnClickbtn = ()=>{
    dispatch(addGptSearch());
  }

  const handleChangeLang = (e) =>{
    dispatch(addChangeLang(e.target.value));

  }

  const gptSearch = useSelector((store)=> store.gptSearch.gptSearch);

  return (
    <div className='z-50 fixed top-0 left-0 flex flex-col md:flex-row justify-between items-center w-full  bg-gradient-to-b from-black p-4'>
    <img className='w-40' src={logo} alt='Netflix Logo' />
    
    <div className='flex  bg-gray-900 p-1  rounded-lg items-center space-x-6 mt-4 md:space-x-8 md:bg-transparent md:p-0'>
      {user && (
        <>
          <button 
            className='text-white bg-purple-800 p-2 rounded-md text-xs hover:bg-purple-700 transition-colors duration-300 md:text-lg'
            onClick={handleOnClickbtn}
          >
            {gptSearch ? "Home Page" : "GPT Search"}
          </button>
  
          {gptSearch && (
            <select 
              className='p-2 bg-gray-600 text-white  text-sm rounded-md hover:bg-gray-800 transition-colors duration-300 text-xs md:text-lg'
              onChange={handleChangeLang}
            >
              {SUPPORTED_LANGUAGE.map(lang => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          
          <img 
            src={userIcon} 
            className='w-7 h-7 rounded-md md:w-10 md:h-10 '
            alt='User Icon'
          />
  
          <button 
            onClick={handleBtnClick} 
            className='text-white  hover:text-red-600 transition-colors text-xs duration-300 relative right-3 md:text-lg md:right-0 md:text-white'
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  </div>
  
  )
}

export default Header
