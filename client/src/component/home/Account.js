
import {Link} from "react-router-dom"
import React, {useState,useEffect} from "react"
import "./Account.css"

function Account({user}) {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male"},
      ]

    const  [trans,setTrans] = useState()
    const [newTrans, setNewTrans] = useState([])
    
    function onChange(event) {
      setNewTrans({ ...newTrans, [event.target.name]: event.target.value })
  }
    
    // test = trans.map((tran)=>tran)
      // console.log(test)
   console.log(trans)
    
   function handleSubmit(event){
    event.preventDefault()
   }


   const sum = data.reduce((accumulator, object) => {
    return accumulator + object.age;
  }, 0);


   
   console.log(newTrans)
   
   useEffect(() => {
        fetch("/me/transactions").then((response) => {
          if (response.ok) {
            response.json().then((data) => setTrans(data));
          }
        });
      }, []);
    return (
        
        

      <div>

    {user ? (
       

<div className="App">
    <h3 id="totalBalance">Your Total Balance is ${sum}</h3>

    <div>
      <table>
        <tr>
          <th>Description</th>
          <th>Deposits/Credits</th>
          <th>Withdrawals/Debits</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
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