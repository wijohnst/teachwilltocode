import axios from 'axios'

export const getMarkdownUrl = async (token,path) =>{

  const targetUrl = `https://api.github.com/repos/wijohnst/AnswerTheseQuestions/contents/${path}.md`;

  try{
   const response = await axios.get(targetUrl, {
     'Authorization' : `Oauth ${token}`
   });
   return response.data.html_url;
    

  }catch(err){
    console.log(`Error getting Issues - ${err}`);
  }
} 


