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
    <div className='fixed top-0 left-0 flex justify-between items-center w-full z-10 bg-gradient-to-b from-black p-4'>
      <img className='w-40' src={logo} alt='Netflix Logo'/>
        
        <button className='text-white absolute right-40 bg-purple-800 p-2 rounded-md' onClick={handleOnClickbtn}>{gptSearch ? "Home Page" : "GPT Search"}</button>

      {user && (<div className='flex items-centerr space-x-4'>
      {gptSearch &&( <select className='p-2 m-2 bg-gray-900 text-white absolute right-[17rem]' onChange={handleChangeLang}>
        {SUPPORTED_LANGUAGE.map(lang => 
          <option value={lang.indentifier} key={lang.indentifier}>{lang.name}</option>
        )}
        </select>
      )}
        <img src={userIcon} className='w-10 h-10 rounded-md' alt='User Icon'/>
        <button  onClick={handleBtnClick} className='text-white hover:text-red-600'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
