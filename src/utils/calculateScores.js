import {getSoloIssue} from '../utils/getSoloIssue'

export const calculateScores = async closedIssues =>{
  
  const soloIssues = closedIssues.map(({number}) => getSoloIssue(number).then(res => res));

  const closers = soloIssues.map(async issue => await issue.then(res => res.closed_by.login));
  
  const scores = await Promise.all(closers).then(res => res.reduce((scoreObj,closer) =>{
                  const count = scoreObj[closer] || 0;
                  scoreObj[closer] = count + 1;
                  return scoreObj;
                },{}));

  return  scores;
}