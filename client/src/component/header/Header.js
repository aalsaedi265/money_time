import "./Header.css"
import React,{useState} from "react"
import Sighup from "../home/Sighup"

// function Header ({user}
function Header ({user}){

 

    return (

        <div class="logo">
            <h1 class= "header">Welcome to Money Time </h1>
        <div class= "profile">
            <img class="img" src={ user? user.image_url :  "https://i.pinimg.com/originals/25/99/8c/25998cb58d6201a9580c0ff25845c6bc.jpg"} alt="user profile" />

            <p class="header"> {user? user.username : "Greetings"}</p>
        </div>
        <div class="containerNav">
            
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/MyAccount">My Account</a></li>
                    <li><a href="/CustomerService">Customer Service</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                </ul>
            </nav>
       
        </div>

        </div>

    )
}

export default Header;