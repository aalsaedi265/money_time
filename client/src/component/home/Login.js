import React, {useState} from 'react';
import "./Login.css"
import {Link} from "react-router-dom"

function Login ({user,onLogin}){

    
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

            data.json().then(el=> onLogin(el) )
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
        {user ? (
            <div className="test2">
            <h2 className='logmsg'>Mobile App comming soon!</h2>
            </div>
          ) : (
            <div className="test">
        <div className="imgcontainer">
            <h2 className='texthome'>Simply your banking</h2>
            <p className='texthome' >Checking made easy</p>

            
        </div>

     <form onSubmit={handleSubmit} className="container" >

   
    
    <label for="username"><b>Username/Email</b> </label>
    <br></br>
    <input type="text" 
    id="username" 
    placeholder="username" 
    name="username"
    className="inputLogin"
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
    className="inputLogin"
    required  
    id="password"
    value={password}
    onChange={ e=> setPassword(e.target.value)}
    />

<p className="error"> {pass}</p>
{/* <Link to="/MyAccount"> {loading? "Loading...": "Login"  }</Link> */}
    <br></br>
        <div className="btnSection">
     
     
      <button className= "btn btn-gradient btn-glow" type="submit"
      
    
      
      > 
      
      {loading? <Link to="/MyAccount"> "Loading..." </Link>: "Login" }
      
      
      </button>

    <Link to="/sighup"> <button className= "btn btn-gradient btn-glow" > sighup </button> </Link>
        </div>

    </form>

   

 </div>     
          )}
        </div>

    )
}

export default Login;

 