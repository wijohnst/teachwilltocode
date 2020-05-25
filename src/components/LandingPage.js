import React from 'react'
import styled from 'styled-components'

import { getScreens } from '../utils/getScreens'
import HowItWorks from './HowItWorks'

const LandingPageWrapper = styled.div`
  text-align: center;
  padding: 20px;
`

const Logo = styled.div`
  background-image: url("/Circle_Logo_Large.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 50vh;
  background-position: center;
`

const AboutCard = styled.div`
  /* background-color :  lightpink; */
  margin: 0 auto;
  font-weight: 200;
  margin-top: 20px;

  @media (max-width: ${getScreens('tablet')}){

    max-width: 100%;
  }
`
export default function LandingPage({advanceView}) {
  return (
    <LandingPageWrapper>
        <Logo />
      <hr />
      <AboutCard className="card">
        <p>My name is Will and I want to become the best developer that I can be.</p>
        <h3><i>But I need your help...</i></h3>
        <p>I put together this site as a way to engage with other developers and learn from their experience, all in a fun way.</p>
        <h3>So how does it work?</h3>
        <HowItWorks />
      </AboutCard>
      <button onClick={() => advanceView(1)}>Enter</button>
    </LandingPageWrapper>
  )
}
