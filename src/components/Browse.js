import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import Callhook from "../utils/callhooks"
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'


export const Browse = () => {
  Callhook();
  const gptSearch = useSelector(store => store.gptSearch.gptSearch);


  return (
    <div>
         <Header/>
          {gptSearch ?  <GptSearch/> : <>
            <MainContainer/>
            <SecondaryContainer/>
          </>}
         
    </div>
  )
}

export default Browse