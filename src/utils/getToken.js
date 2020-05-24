import netlify from 'netlify-auth-providers'

export const getToken = async () =>{

 return new Promise((resolve, reject) => {
   let authenticator = new netlify({
     site_id: 'b65a1ce1-afad-4e2d-9075-1579c0d36340',
   })
   authenticator.authenticate(
     {provider: 'github', scope: 'public_repo, read:org,read:user'},
     (err, data) => {
       if (err){
         reject(err)
       }
       resolve(data)
     }
   )
 })
}