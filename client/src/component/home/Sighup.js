import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./sighnup.css"


function Sighup({setUser,user,update}) {

    const [username, setUsername] =useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    
    const [image_url, setImage_url] = useState("");

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e){

        e.preventDefault()

        setLoading(true) 

        fetch("/signup", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                image_url,
                password,
                password_confirm: passwordConfirm
            }),
        }).then(response =>{
            
            setLoading(false)

            console.log(response)

            if(response.ok){
                response.json().then(info=> {
                    
                    setUser(info) 
                    
                    } )
            }else{
                response.json().catch(info=> setError(`invalid response`)  )
            }
        })

        e.target.reset() 
        console.log("submitted")
    }

    return (
        
        <div>
        
        

        <form onSubmit={handleSubmit} className="form">


            

            <label for= "image_url">Avatar Image</label>
            <input 
            className="sighUpInput"
            id="image_url"
            type="text"
            // accept="image/*"
            value={image_url}
            onChange={x => setImage_url(x.target.value)}
            />

            <br></br>

            <label for="username"> Username</label>
            <input id="username" type="text"
            className="sighUpInput"
            value={username}
            onChange={x => setUsername(x.target.value)}
            />

            <label for="password"> Password</label>
            <input id="password" type="password"
            value={password}
            className="sighUpInput"
            onChange={x => setPassword(x.target.value)}
            autoComplete= "current-password"
            />

            <label for="passwordConfirm"> Confirm Password</label>
            <input type="password"
            className="sighUpInput"
            id="password_confirm"
            value={passwordConfirm}
            onChange={ x => setPasswordConfirm(x.target.value)}
            autoComplete= "current-password"
            />
        <br></br>

            <div className="buttonchoice">

        <button className="btn-gradient" onSubmit={handleSubmit} type="submit" >{loading? "Loading...": "Creation"}</button>

        <Link to="/"> <button className='btn-gradient'>Got Account Login </button></Link>

            </div>


        </form>

        </div>


    )
}

export default Sighup

//<label for= "name"> First & Last name</label>

//<input
//className="sighUpInput"
//type="text"
//id="name"
//value={name}
//onChange={x => setName(x.target.value) }
///>
//<br></br>