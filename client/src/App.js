import React from 'react';
import './App.css';
import {Route, Switch } from "react-router-dom";
import Home from "./component/home/Home";
import Customer from "./component/customer/Customer";
import Header from "./component/Header/Header"

function App() {
  return (

    <div className="App">
<h1> the world </h1>

      <Header/>

      {/* <Route  exact path= "/" > */}
      <Home/>
      {/* </Route> */}

      {/* <Route exact path= "/customer" > */}
        <Customer/>
        {/* </Route> */}


     </div>
    )
}

export default App;
