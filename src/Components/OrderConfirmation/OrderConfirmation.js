import React from 'react'
import { Link } from 'react-router-dom'

function OrderConfirmation() {

  return (
    <div className="container-fluid">
      <div class="row mt-5 ">
        <div class="col-12  justify-content-center">
        <div class="jumbotron jumbotron-fluid">
  <div class="container-fluid">
    <h1 class="display-4 text-center">Order Placed !</h1>
    <h6 class="lead text-center">To continue shopping. please click here <Link to="/">Home</Link></h6>
  </div>
</div>
        </div>


     
   
</div>
    </div>
  )
}

export default OrderConfirmation
