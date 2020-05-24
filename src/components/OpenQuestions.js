import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../AppContext'
import QuestionCard from './QuestionsCard';

const IssuesWrapper = styled.div`
  text-align: center;
`
export default function OpenQuestions() {

  const {allIssues} = useContext(AppContext);

  if(allIssues){
    return (
      <IssuesWrapper>
        <h1>Open Questions</h1>
        <hr />
        {allIssues.map((question,index) => {
          if(question.pull_request === undefined){
           return <QuestionCard key={`QuestionCard${index}`} data={question} />
          }else{
            return null;
          }
        }
        )}
      </IssuesWrapper>
    )
  }else{
    return(
      <p>Loading</p>
    )
  }
  
}
