import React, { useState, useEffect} from 'react'
import AppContext from './AppContext'
import { getIssues } from './utils/getIssues'
import { getToken } from './utils/getToken'

export default function AppContextProvider(props){

  const [issues, setIssues] = useState(undefined);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    getToken().then(res => (setToken(res.token)))
  }, [])

  useEffect(() => { 
    getIssues(token).then(response => (setIssues(response)));
  },[token])

  return(
    <AppContext.Provider value={{allIssues: issues, authToken : token}}>
      {props.children}
    </AppContext.Provider>
  )
}