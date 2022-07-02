import React , {useState} from 'react'
function Login({setAdmin, setLoggedIn}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [error, setError] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const admin = {
            username: username,
            password
        }
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(admin)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(admin=>{
              setAdmin(admin)
              setLoggedIn(true)
            })
            
          } else {
            res.json()
            .then(json => setError(json.error))
          }
        })
    }


  return (
    <>
        <h1></h1>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
        <label>
          Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Login" />
      </form>
    </>
  )
}
export default Login