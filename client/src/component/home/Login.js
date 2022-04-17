import React, {useState} from 'react';
import "./Login.css"

function Login (setUser){

    
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [loading, setLoading] = useState(false)

const [error, setError] = useState("")
const [pass, setPass] =useState("")

    function handleSubmit(x){
    x.preventDefault()
    setLoading(true)
    
    fetch('/login',{
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body :JSON.stringify({username,password}) 
    })
    .then(data => {

        setLoading(false);

        if (data.ok){

            data.json().then(el=> setUser(el) )
        }else{
            data.json().catch(err=> {
                setError( "wrong email")
                setPass("wrong password")
            })
        }
    })
}   

  
    return (
<div>
        <div className="imgcontainer">

        </div>

     <form onSubmit={handleSubmit} className="container" >

   
    
    <label for="username"><b>Username/Email</b> </label>
    <br></br>
    <input type="text" 
    id="username" 
    placeholder="username" 
    name="username"
     required
     value={username}
     onChange={e => setUsername(e.target.value) }
     />

<p className="error"> {error}</p>

    <br></br>

    <label for="password"> <b>Password</b> </label>
    <br></br>
    <input type="password" 
    placeholder="password" 
    name="password" 
    required  
    id="password"
    value={password}
    onChange={ e=> setPassword(e.target.value)}
    />

<p className="error"> {pass}</p>
    
    <br></br>

    <button type="submit"> {loading? "Loading...": "Login" }</button>
   
    </form>

   

 </div>       
    )
}

export default Login;

