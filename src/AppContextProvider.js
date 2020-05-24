import React, { useState, useEffect} from 'react'
import AppContext from './AppContext'
import { getIssues } from './utils/getIssues'

export default function AppContextProvider(props){

  const [issues, setIssues] = useState(undefined);
  

  useEffect(() => {
    console.log('Fetching open issues from Context Provider...');
    getIssues().then(response => (setIssues(response)));
    
  },[])

  return(
    <AppContext.Provider value={{allIssues: issues}}>
      {props.children}
    </AppContext.Provider>
  )
}