import React, {useEffect,useState} from 'react';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css'

import {Route, Routes } from "react-router-dom";
import Account from "./component/home/Account";
import Login from "./component/home/Login";
import Sighup from "./component/home/Sighup";
import NavBar from './component/navBar/navbar';
import CustomerService from './component/home/CustomerService'
import AboutUs from './component/home/AboutUs';

import Header from "./component/header/Header"
// import Avatar from "./component/home/Avatar"


function App() {

  const [user, setUser] = useState(null)
    useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  function handleLogin(user){
    setUser(user)
  }

   function handleLogout() {
    setUser(null);
  }
  

  // useEffect (() =>{
    
  //   fetch("/me")
  //   .then(resp => resp.json())
  //   .then( x=> console.log(x) )
  // },[])

  return (

    <div className="App">

     <Header user={user} onLogout={handleLogout}/>
     {/* <NavBar user={user} /> */}
       


     {/* <Header userInfo={user}/> */}
  
    <>
    <Routes>

      <Route exact path="/MyAccount" element={ <Account user={user}/>} />

      <Route exact  path= "/" element={ <Login onLogin={handleLogin}/> } />

      <Route exact path= "/sighup" element={ <Sighup setUser={setUser} user={user}/> } />

      <Route exact path= "/AboutUs" element = { <AboutUs /> } />

      <Route exact path= "/CustomerService" element = { <CustomerService /> } />

      


    </Routes>
    
  </>

     </div>
    )
}

export default App;
