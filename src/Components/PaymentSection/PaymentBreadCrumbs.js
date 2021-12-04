import React from 'react'
import { Link } from 'react-router-dom'

function PaymentBreadCrumbs() {
  return (
    
      <div className="container">
  

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" aria-current="page"><Link to="/paymentsection/address">Address</Link></li>
      <li class="breadcrumb-item"><Link to="/paymentsection/payment">Payment</Link></li>
      <li class="breadcrumb-item active" ><Link to="/paymentsection/orderConfirmation">Order Confirmation</Link></li>
    </ol>
  </nav>
      </div>
  
  )
}

export default PaymentBreadCrumbs
