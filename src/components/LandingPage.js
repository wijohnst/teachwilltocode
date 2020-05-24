import React from 'react'
import styled from 'styled-components'

import { getScreens } from '../utils/getScreens'

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
        <ol>
          <li>
            Visit
              <a href="https://github.com/wijohnst/AnswerTheseQuestions/issues" target="_blank" rel="noopener noreferrer"> The issues section of this repository</a>
          </li>
          <li>
            Each issue is a question that I want to answer
          </li>
          <li>
            Select a question that you can answer
          </li>
          <li>
            Create a markdown file that answers the question
          </li>
          <li>
            Name your markdown file like this : <p className="code">{`[issue_number].md`}</p>
          </li>
          <ul>
            <li> EX: <p className="code">1.md</p> for the question in issue 1</li>
          </ul>
          <li>
            Submit your answer as a Pull Request to the repo
            <ul>
              <li>Commit messages should follow this format : <p className="code">{"closes #[issue_number]"}</p>
              </li>
              <ul>
                <li>EX: <p className="code">"closes #1"</p> for issue #1</li>
              </ul>
            </ul>
          </li>
          <li>After your Pull Request has been approved, you will be awarded a point </li>
          <li> Climb the leaderboard for your chance to win a cool prize and help me become a better developer!</li>
        </ol>
      </AboutCard>
      <button onClick={() => advanceView(1)}>Enter</button>
    </LandingPageWrapper>
  )
}
