import axios from 'axios'

export const getPullRequestDiff = async (issueNum) => {

  const targetUrl = `https://patch-diff.githubusercontent.com/raw/wijohnst/AnswerTheseQuestions/pull/${issueNum}.diff`;

  try{
    const response = await axios.get(targetUrl, {});
    return response.data;
     
 
   }catch(err){
     console.log(`Error getting Issue Diff - ${err}`);
   }
}

