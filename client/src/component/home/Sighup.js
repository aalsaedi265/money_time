import React,{useState} from 'react';
import { Link } from 'react-router-dom';


function Sighup(setUser) {

    const [username, setUsername] =useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");


    function handleSubmit(e){

        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                picture,
                username,
                password,
                password_confirm: passwordConfirm
            })
        }).then(response => response.json() )
        .then(info=> setUser(info) )
    }

    return (
        
        <div>



        </div>


    )
}

export default  Sighup