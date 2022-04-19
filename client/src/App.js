import React, {useEffect,useState} from 'react';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css'

import {Route, Routes } from "react-router-dom";
import Account from "./component/home/Account";
import Login from "./component/home/Login";
import Sighup from "./component/home/Sighup";
import NavBar from './component/navBar/navbar';

import Header from "./component/header/Header"
// import Avatar from "./component/home/Avatar"


function App() {

  const [user, setUser] = useState(null)

  useEffect (() =>{
    
    fetch("/account")
    .then(resp => resp.json())
    .then( x=> setUser(x) )
  },[])

  return (

    <div className="App">

     <Header user={user}/>
     {/* <NavBar user={user} /> */}
       


     {/* <Header userInfo={user}/> */}
  
    <>
    <Routes>

      <Route exact path="/account" element={ <Account user={user} />} />

      <Route exact  path= "/" element={ <Login setUser={setUser}/> } />

     <Route exact path= "/sighup" element={ <Sighup setUser={setUser} user={user}/> } />


    </Routes>
  </>

     </div>
    )
}

export default App;
