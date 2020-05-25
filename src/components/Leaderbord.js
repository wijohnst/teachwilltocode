import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../AppContext'
import { getIssues } from '../utils/getIssues'
import { getClosedIssues } from '../utils/getClosedIssues';
import { getSoloIssue } from '../utils/getSoloIssue'


const LeaderbordWrapper = styled.div`
  text-align: center;
`

const UserPointsGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 75%;
  margin: 0 auto;
  margin-bottom: 2px;
  border: solid thin white;
  border-radius: 5px;
`

const InfoText = styled.p`
  font-family: 'Courier New', serif;
`

//Returns a scores object {username : string, score : int}
const calculateScores = async (closedIssues, authToken) =>{ 
  
  //A solo issue is different from the result of getIssues() because it includes the 'closed_by' key/value pair
  const soloIssues = closedIssues.map(({number}) => getSoloIssue(number, authToken).then(res => res)); 
  
  
  console.log("Solo Issues:",Promise.all(soloIssues));
  //Maps over the array of solo issues and returns the GitHub username of all users who have closed an issue in the 'Answer These Questions' repository
  const closers = soloIssues.map(async issue => await issue.then(res => res.closed_by.login)); 
  
  /*Maps over the closers array and constructs a the scores object; the score for each username increases each time
  username is present in the array*/
  const scores = await Promise.all(closers).then(res => res.reduce((scoreObj,closer) =>{
                  const count = scoreObj[closer] || 0;
                  scoreObj[closer] = count + 1;
                  return scoreObj;
                },{}));
  console.log("Calculate Scores returned",scores);     
  return  scores;
}

//Returns an array of nested arrays that represent the user and their score => ['wijohnst',3]
const getScores = async (authToken) =>{
  
  const scores = await getIssues(authToken) //Gets all issues
                  .then(allIssues => getClosedIssues(allIssues)) //Returns only the closed issues
                  .then(closedIssues => calculateScores(closedIssues, authToken)) //Calculates user scores for those closed issues
                  .then(scoresObject => Object.entries(scoresObject)) //Converts score object into an array for rendering
                  .then(scoresArray => scoresArray.map(score => score)); //Maps over key/val array
  console.log("Get scores returned:", scores);
  
  return scores;
}

export default function Leaderbord({advanceView}) {

  const { authToken } = useContext(AppContext);
  const [scores, setScores] = useState(null);
    
  useEffect(() => {
    getScores(authToken).then(res => setScores(res))
  },[authToken])

  if(scores){ //Conditionally render based on scores array resolution
    return(  
      <LeaderbordWrapper>
        <h1>Leaderbord</h1>
        <hr />
        {scores.map((score, index) => 
          <UserPointsGroup key={`PointsGroup${index}`}>
            <p><u>User: </u><InfoText>{score[index]}</InfoText></p>
            <p><u>Points:</u><InfoText>{score[index + 1]}</InfoText></p>
          </UserPointsGroup>
          )}
        <button onClick={() => advanceView(0)}>Back</button>
      </LeaderbordWrapper>
      
     )
  }else{
    return(
      <p>Loading</p>
    )
  }
  
}

      
  



// √get a list of closed issues
//iterate over those issues, passing each issues to getSoloIssues() and push result to new arr
//iterate over soloIssuesArr  
//each time a user is listed as closing an issues, give them one point
//reduce the list into an object like this [{userName : points}, {anotherUserName : points}]