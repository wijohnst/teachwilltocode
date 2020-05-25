import netlify from 'netlify-auth-providers'

export const getToken = async () =>{

 return new Promise((resolve, reject) => {
   console.log('Resolving token...')
   let authenticator = new netlify({
     site_id: 'b65a1ce1-afad-4e2d-9075-1579c0d36340',
   })
   authenticator.authenticate(
     {provider: 'github', scope: 'user'},
     (err, data) => {
       if (err){
         reject(err)
       }
       else{
         console.log('Token received...');
         resolve(data)
       }  
     }
   )
 })
}