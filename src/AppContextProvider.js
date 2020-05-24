import React, { useState, useEffect} from 'react'
import AppContext from './AppContext'
import { getIssues } from './utils/getIssues'
import { getToken } from './utils/getToken'

export default function AppContextProvider(props){

  const [issues, setIssues] = useState(undefined);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    console.log('Getting token...')
    getToken().then(res => (setToken("test")))
  }, [])

  useEffect(() => {
    console.log('Fetching open issues from Context Provider...');
    getIssues(token).then(response => (setIssues(response)));
    
  },[token])

  return(
    <AppContext.Provider value={{allIssues: issues, authToken : token}}>
      {props.children}
    </AppContext.Provider>
  )
}