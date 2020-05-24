import axios from 'axios'

export const getSoloIssue = async (issueNum, authToken) =>{

  
  const targetUrl = `https://api.github.com/repos/wijohnst/AnswerTheseQuestions/issues/${issueNum}`;

  try{
    const response = await axios.get(targetUrl, {
      headers: {
        'Authorization' : `Oauth ${authToken}`
      }     
  });
  return response.data;
  }catch(err){
    console.log(`Error getting Issues - ${err}`);
  }
}


