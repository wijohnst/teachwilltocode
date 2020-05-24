import axios from 'axios'

export const getMarkdownUrl = async (path) =>{

  const targetUrl = `https://api.github.com/repos/wijohnst/AnswerTheseQuestions/contents/${path}.md`;

  try{
   const response = await axios.get(targetUrl, {});
   return response.data.html_url;
    

  }catch(err){
    console.log(`Error getting Issues - ${err}`);
  }
} 


