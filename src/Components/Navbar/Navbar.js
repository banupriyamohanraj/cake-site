import "./Navbar.css"
import { Link } from "react-router-dom";
import ProductContext from "../Productcontext/Productcontext";

import {useContext, useEffect} from "react"
import { useState } from "react/cjs/react.development";

export default function Navbar() {


let [accountname,setaccountname] = useState("");
  let productdata = useContext(ProductContext);


  useEffect(()=>{
setaccountname(productdata.userlist.firstname)
  },[productdata.userlist])

  let logout = ()=>{
    productdata.setuserLoggedIn(false)
    productdata.setuserlist(null)
   
  }

  return <>
  <div className="card shadow">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="col-lg-6">
     <b>Cakes</b>
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      </div>
      <div className="col-6">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <Link to="/" class="nav-link">Home <i class="fa fa-home" aria-hidden="true"></i></Link>
          </li>
          <li class="nav-item">
          <Link to="/wishlist" class="nav-link">Wishlist <i class="fa fa-heart-o" aria-hidden="true"></i></Link>
          </li>
          <li class="nav-item ">
          <Link to="/cart" class="nav-link">Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
          </li>
          <li class="nav-item dropdown">

          <Link to="/account" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{accountname ? accountname : "Signup"} <i class="fa fa-user-o" aria-hidden="true"></i></Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/" class="dropdown-item" href="#" onclick={logout}>Logout</Link>
       
        </div>
          </li>
        </ul>
      </div>
      </div>
      
    </nav>
    </div>
  </>
}