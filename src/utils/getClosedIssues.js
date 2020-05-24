export const getClosedIssues = async issues =>{
  console.log('Getting closed issues...')

  const closedIssues = await issues.filter(issue => {
    if(issue.state === 'closed'){
      return true;
    }
    return false;
  })

  const validIssues = closedIssues.filter(issue =>{
    if(issue.pull_request === undefined){
      return true;
    }
    return false;
  })

  return validIssues;
} 


