import "./Header.css"
import React,{useState} from "react"
import Sighup from "../home/Sighup"

// function Header ({user}
function Header (){

    const [header, setHeader]=useState([])

    function headerUpdate(x){

        setHeader([...header,x])
    }

    <Sighup update={headerUpdate} />

    return (

        <div class="logo">
            <h1 class= "header">Welcome to Money Time </h1>
        <div class= "profile">
            <img class="img" src={ header? header.picture :  "https://i.pinimg.com/originals/25/99/8c/25998cb58d6201a9580c0ff25845c6bc.jpg"} alt="user profile" />

            <p class="header"> {header? header.name : "Greetings"}</p>
        </div>

        </div>

    )
}

export default Header;