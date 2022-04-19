import React from "react";
import "./navbar.css"
function NavBar(){
    return(
        <div class="containerNav">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/MyAccount">My Account</a></li>
                    <li><a href="/CustomerServices">Customer Services</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;