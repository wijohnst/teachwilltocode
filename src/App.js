import React, { useState } from 'react'
import styled from 'styled-components'
import AppContextProvider from './AppContextProvider'
import OpenQuestions from './components/OpenQuestions'
import Leaderboard from './components/Leaderbord'
import LandingPage from './components/LandingPage'

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
  }
`

const LeaderboardWrapper = styled.div`
  background-color :  darkslategray;
`

export default function App() {
  const [view, setView] = useState(1) //Variable for controlling which view is displayed
  
  //Start view - contains 'how to' info and is the default view state; does not have access to app context 
  if(view === 0){ 
    return(
      <LandingPage advanceView={setView}/>
    )
  }
  //Main view - contains all regular functionality for the app; has access to app context
  else if(view === 1){ 
    return(
      <AppContextProvider>
        <AppWrapper>
          <LeaderboardWrapper>
            <Leaderboard advanceView={setView} />
          </LeaderboardWrapper>
          <OpenQuestions />
        </AppWrapper>
      </AppContextProvider>
      )
  }
  
  }
  


//force deploy
