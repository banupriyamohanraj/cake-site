import React from 'react'
import { Link } from 'react-router-dom'

function OrderConfirmation() {

  return (
    <div className="orderConfirm__ container">
     <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Order Placed !</h1>
    <h6 class="lead">To continue shopping. please click here <Link to="/">Home</Link></h6>
  </div>
</div>
    </div>
  )
}

export default OrderConfirmation
