import axios from 'axios'

export const getIssues = async token =>{

  console.log(token);
  
  const targetUrl = "https://api.github.com/repos/wijohnst/AnswerTheseQuestions/issues?state=all";

  try{
   const response = await axios.get(targetUrl, {
     headers: {
       'Authorization' : `Oauth ${token}`
     }
   });
   return response.data;
    
  }catch(err){
    console.log(`Error getting Issues - ${err}`);
  }
} 


