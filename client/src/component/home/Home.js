import "./Home.css"
import {Link} from "react-router-dom"
import {useState} from "react"

function Home() {



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


export default Home;