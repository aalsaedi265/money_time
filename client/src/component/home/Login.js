import React, {useState} from 'react';
import "./Login.css"

function Login (setUser){

    
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [loading, setLoading] = useState(false)

const [error, setError] = useState([])


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

            data.json().then(el=> setError(el.error))
        }
    })
}


    return (

     <form>
         
         <div className="imgcontainer">

         </div>

    <div className="container">
    
    <label for="username"><b>Username/Email</b> </label>
    <br></br>
    <input type="text" 
    id="username" 
    placeholder="username" 
    name="username"
     required/>

    <br></br>

    <label for="password"> <b>Password</b> </label>
    <br></br>
    <input type="password" 
    placeholder="password" 
    name="password" 
    required  
    id="password"/>
    
    <br></br>

    <button type="submit"> Login</button>
    </div>



    </form>

        
    )
}

export default Login;






//     <form>
         
//          <div className="imgcontainer">

//          </div>

//     <div className="container">
    
//     <label for="username"><b>Username/Email</b> </label>
//     <br></br>
//     <input type="text" 
//     id="username" 
//     placeholder="username" 
//     name="username"
//      required/>

//     <br></br>

//     <label for="password"> <b>Password</b> </label>
//     <br></br>
//     <input type="password" 
//     placeholder="password" 
//     name="password" 
//     required  
//     id="password"/>
    
//     <br></br>

//     <button type="submit"> Login</button>
//     </div>



//     </form>
