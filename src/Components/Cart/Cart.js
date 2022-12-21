import { useContext,useEffect,useState } from "react"
import { Link } from "react-router-dom";
import ProductContext from "../Productcontext/Productcontext"
import "./Cart.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart(){
 
  let [cart,setcart] = useState([]);
  // let[path,setpath] = useState('');

 let counter = 1;
  

  
    let productdata = useContext(ProductContext);
    toast.configure()

useEffect(() => {
  async function fetchdata(){
   
      await fetch('https://jpcakes-backend.vercel.app/cart/cartlist')
      .then(res => {
          return res.json();
      }).then((data) => {
     
          setcart(data)
          productdata.setcartlist([data])
         
      })
  }

  fetchdata();
},[productdata])
   
 
 
    let total=(item)=>{
      let amount = 0;
      item.forEach(element => {
      amount += parseInt(element.rate);
      });
      productdata.setTotal(amount)
      return amount;
    }

   

    let removeCart = async(item) => {

      await fetch(
        `https://jpcakes-backend.vercel.app/cart/delete/${item._id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
  
     
      toast(`${item.title} is deleted from cart`,{position: toast.POSITION.TOP_CENTER})
    }


   let checkout = ()=>{
    productdata.setcheckout(true)
   }
    


    return <>
    <div className="container-fluid">
   
            <div className="row">
              <div className="col-12">
              <h3 id="title" style={{fontFamily:"sans-serif"}}> Shopping Cart ({cart.length})</h3> 
              </div>
          
            </div>
            <br/>
            <div className="row">
            <div className="col-6">
           


 
  { 

        cart.length > 0 ? cart.map((item)=>{
        return     <div class="card mb-3 shadow" style={{"max-width": "700px","height":"100px"}}>
        <div class="row no-gutters">
          <div class="col-md-2">
            <img src={item.img} class="card-img" alt="..." style={{"height":"100px","width":"100px"}}/>
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text"><i class="fa fa-inr" aria-hidden="true"></i> {item.rate} &emsp; 
               Qty <button type="button" className="btn btn-light" ><i class="fa fa-minus-circle" aria-hidden="true"></i></button> <input type="text" style={{"width":"10%"}} value={counter}></input><button type="button"  className="btn btn-light" ><i class="fa fa-plus fa-1x" aria-hidden="true"></i></button>
           
              </p>
              
            </div>
          </div>
          <div className="col-md-1 m-4">
          <p class="card-text"><small class="text-muted">
              <button type="button" className="btn btn-outline-dark" style={{"border-color":"white"}} onClick={()=>{
               
                removeCart(item)
                
              }}><i class="fa fa-trash" aria-hidden="true"></i></button></small></p>
            </div>
        </div>
      </div>
  
      }) : <div class="jumbotron jumbotron-fluid ">
      <div class="container">
      
        <p class="lead text-center">No items in cart. Please go back to home to shop more</p>
      </div>
    </div>
       
  }
 
   </div>
   <div className="col-6">
    
     <div class="card shadow">
  <div class="card-body">
  <h3>Total Summary</h3>
  <h6>Total Amount - <strong><i class="fa fa-inr" aria-hidden="true"></i>  {total(cart)}</strong></h6>
    <h6>Total Products - {cart.length} </h6>

  {  productdata.Total ?( productdata.userLoggedIn ? <Link to="/paymentsection" ><button type="button" className="btn" id="cart_btn"> PROCEED TO CHECKOUT</button></Link> : <Link to="/account" ><button type="button" className="btn" id="cart_btn" onClick={checkout}> PROCEED TO CHECKOUT</button></Link>):null}
  </div>
</div>
   </div>
   </div>
        </div> 
       
       </>
}