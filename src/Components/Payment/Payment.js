import React, { useEffect,useContext,useState } from "react";
import ProductContext from "../Productcontext/Productcontext";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'
import "./Payment.css";


function Payment() {
  let [user, setuser] = useState([]);
  let [ total,setTotal] = useState([0]);

  let productdata = useContext(ProductContext);
  let history = useHistory();

  let [city,setCity] = useState('');
  let[state,setState] = useState('');
  let[zip,setZip] = useState('');
  let [street,setStreet] = useState('');

  let[cardname,setCardName] = useState('');
  let[cardnumber,setCardnumber] = useState('');
  let[Expiry,setExpiry] = useState('');
  let [ CVV,setCVV] = useState('');

  toast.configure()

  
  useEffect(() => {
    setuser(productdata.userlist);
    setTotal(productdata.Total)
  },[productdata.userlist, productdata.Total]);



let AddressSubmit = async(e)=>{
  e.preventDefault()

        await fetch('https://jpcakes.herokuapp.com/user/updatingaddress', {
            method: "PUT",
            body: JSON.stringify({
               email: user.email,city,state,zip,street
            }),
            headers: {
                "content-type": "application/json",

            }
        }).then(res => {
            return res.json();

        }).then((data) => {
           
            let mesg = data.message
            // alert(data.message)
            toast(mesg,{position: toast.POSITION.TOP_CENTER})
           


        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });

}

let PaymentSubmit = ()=>{
 
  async function fetchData() {
    await fetch(
      'https://jpcakes.herokuapp.com/cart/deleteall',
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    }
    fetchData();
  history.push('/orderconfirmation')
}





  return (
    <div className="Payment__Container ">
      
      <div className="row ">
        <div className="col-sm-12">
          <h2 className="mt-4 mb-4">
            {" "}
            Hi {user.firstname} {user.lastname}
          </h2>
         
        </div>
      </div>

      <div className="row">
        <div className="col-6">
        <h5>Please add delivery address</h5>
          <form onSubmit={AddressSubmit}>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity"  onChange={(e) => setCity(e.target.value)}/>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control"  onChange={(e) => setState(e.target.value)}>
                  <option selected>Choose...</option>

                  <option>Andhra Pradesh</option>
                  <option>Assam</option>
                  <option> Bihar</option>
                  <option>Chandigarh (UT)</option>
                  <option>Delhi</option>
                  <option> Goa</option>
                  <option>Haryana</option>
                  <option> Karnataka</option>
                  <option> Maharashtra</option>
                  <option> Rajasthan</option>
                  <option>Tamil Nadu</option>
                  <option> Uttar Pradesh</option>
                  <option> West Bengal</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"  onChange={(e) => setZip(e.target.value)}/>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Add as Default address
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-dark mt-4" id="addAddressBtn" >
              Add Address
            </button>
          </form>
        </div>
        <div className="col-6">
          <h5>Payment Details</h5>
       
       
        <div class="row gx-3">
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Person Name</p> <input class="form-control mb-3" type="text" placeholder={user.firstname}  onChange={(e) => setCardName(e.target.value)}/>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Card Number</p> <input class="form-control mb-3" type="text" placeholder="1234 5678 4356"  onChange={(e) => setCardnumber(e.target.value)} />
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Expiry</p> <input class="form-control mb-3" type="text" placeholder="MM/YYYY"   onChange={(e) => setExpiry(e.target.value)}/>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">CVV/CVC</p> <input class="form-control mb-3 pt-2 " type="password" placeholder="***"  onChange={(e) => setCVV(e.target.value)} />
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary mb-3" id="addAddressBtn" onClick={()=>{
                  (cardnumber && cardname && Expiry && CVV) ?  PaymentSubmit() : alert("Please provide payment information")

                 
                 
                }}>Pay <i class="fa fa-inr" aria-hidden="true"></i> {total} </button>
            </div>
        </div>
    </div>
         
 
        </div>
      </div>
 
  );
}

export default Payment;
