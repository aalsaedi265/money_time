import React, {useEffect,useState} from 'react';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css'

import {Route, Routes } from "react-router-dom";
import Account from "./component/home/Account";
import Login from "./component/home/Login";
import Sighup from "./component/home/Sighup";

import Header from "./component/Header/Header"

function App() {

  const [user, setUser] = useState(null)

  useEffect (() =>{
    
    fetch("/account")
    .then(resp => resp.json())
    .then( x=> setUser(x) )
  },[])

  // if (!user) {return }

  // <Route path='/welcome' element={<Home/>} />

  return (

    <div className="App">
       <Header/>

  { user ? ( 
    
    <>
    <Routes>

      <Route path="/">
       <Account user={user} />
      </Route>

      </Routes>

   </>
  ):(
    <>
    <Routes>

      <Route  path= "/login" element={ <Login setUser={setUser}/> } />

     <Route  path= "/sighup" element={ <Sighup setUser={setUser}/> } />

      <Route exact path= "/" element={  <Account />} />

    </Routes>
  </>
  )
}
     </div>
    )
}

export default App;
