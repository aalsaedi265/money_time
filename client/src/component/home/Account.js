
import {Link} from "react-router-dom"
import React, {useState,useEffect} from "react"
import "./Account.css"

function Account({user}) {
    const  [trans,setTrans] = useState([])
    const [newTrans, setNewTrans] = useState([])
    const [order,setOrder] = useState("ASC")


    const sorting =(col)=>{
      if (order === "ASC"){
        const sorted = [...trans].sort((a,b)=>
        a[col] > b[col] ? 1 : -1
        );
        setTrans(sorted);
        setOrder("DSC")
      } if (order === "DSC"){
        const sorted = [...trans].sort((a,b)=>
        a[col] < b[col] ? 1 : -1
        );
        setTrans(sorted);
        setOrder("ASC")
      }
    }
    
  


    function onChange(event) {
      setNewTrans({ ...newTrans, [event.target.name]: event.target.value })
  }
    
   function handleSubmit(event){
    event.preventDefault()
    fetch("/transactions", {
      method: "POST",
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrans),
   }).then(response => response.json())
   .then(json => {
       fetch("/me/transactions")
       .then(resp => resp.json())
       .then(data => setTrans(data.transactions))
       });
  }
 
   const totalDeposits = trans.reduce((accumulator, object) => {
    return accumulator + object.deposit;
  }, 0);
  const totalCredits = trans.reduce((accumulator, object) => {
    return accumulator + object.expenditure;
  }, 0);

  const sum = (totalDeposits - totalCredits).toFixed(2)


   
 
   
   useEffect(() => {
        fetch("/me/transactions").then((response) => {
          if (response.ok) {
            response.json().then((data) => setTrans(data.transactions));
          }
        });
      }, [])

    return (
        
        

      <div>

    {user ? (
       

<div className="acc">
    <h3 id="totalBalance">Your Total Balance is ${sum}</h3>

    <div className="trans">
      <table id="fullList">
        <thead>
          <th onClick={()=>sorting("description")}>Description</th>
          <th onClick={()=>sorting("deposit")}>Deposits/Debits</th>
          <th onClick={()=>sorting("expenditure")}>Withdrawals/Credits</th>
        </thead>
        {trans.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.description}</td>
              <td>{val.deposit}</td>
              <td>{val.expenditure}</td>
            </tr>
          )
        })}
      </table>
    </div>

    <div>
    <h2 >Add a transaction</h2>
        <form onSubmit={handleSubmit}>
          <ul>
            <div class="form-group">
              <input className="formName" type="text" name="description" placeholder="description" onChange={onChange} />
            </div>
            <div class="form-group">
              <input className="formName" type="text" name="deposit" placeholder="debit" onChange={onChange} />
            </div>
            <div class="form-group">
              <input className="formName" type="text" name="expenditure" placeholder="credit" onChange={onChange} />
            </div>
            <div class="form-group">
              <button className="submitButtonDisplay" type="submit">Submit</button>
            </div>
          </ul>
        </form>
    </div>
    </div>





    //    <div className="App">
    //    <table>
    //      <tr>
    //        <th>Descirptions</th>
    //        <th>Deposits/Credits</th>
    //        <th>Withdrawals/Debits</th>
    //      </tr>
    //      {trans.map((val) => {
    //       return (
    //         <tr >
    //           <td>{val.name}</td>
    //           <td>{val.age}</td>
    //           <td>{val.gender}</td>
    //         </tr>
    //       )
    //     })}
    //   </table>
    // </div>


       
      ) : (
        <div>
            <p>Please login to acesss this infomation</p>
            <a href="/">Login</a>
        </div>
      )}


      </div>


    
    )   
}


export default Account;