import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from "../features/admin"
function Login() {
    const dispatch = useDispatch()

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
            .then(data=>{
              dispatch(login({username:data.username, is_owner:data.is_owner}))
            })
            
          } else {
            res.json()
            .then(json => setError(json.error))
          }
        })
    }


  return (
    <div className="loginContainer">
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
    </div>
  )
}
export default Login