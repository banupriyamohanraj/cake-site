import { useContext,useEffect, useState } from "react"
import ProductContext from "../Productcontext/Productcontext"
import "./Wishlist.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";


export default function Wishlist(){

let[wishlist,setwishlist] = useState([]);
let counter=1;

let productdata = useContext(ProductContext);
toast.configure()

useEffect(()=>{
    async function fetchdata(){
   
        await fetch('https://jpcakes.herokuapp.com/wish/wishlist')
        .then(res => {
            return res.json();
        }).then((data) => {
       
            setwishlist(data)
            productdata.setwishlist([data])
           
        })
    }
  
    fetchdata();
},[productdata])

let addToCart = ((obj) => {
    
    fetch('https://jpcakes.herokuapp.com/cart/cartlist',{
    method :"POST",
    body :JSON.stringify({
        itemid:obj.itemid,
        title:obj.title,
        img:obj.img,
        rate:obj.rate,
        state:obj.state
    }),
    headers : {
        "content-type" : "application/json"
    }
})

toast(`${obj.title} is added to cart`,{position: toast.POSITION.TOP_CENTER})
})

let removeWishlist = async(item) => {

    await fetch(
      `https://jpcakes.herokuapp.com/wish/delete/${item._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );


    toast(`${item.title} is deleted from wishlist`,{position: toast.POSITION.TOP_CENTER})
  }


    return <>
     <div className="container-fluid">
   
   <div className="row">
     <div className="col-12">
     <h3 id="title" style={{fontFamily:"sans-serif"}}> Wishlist ({wishlist.length})</h3> 
     </div>
 
   </div>
   <br/>
   <div className="row">
   <div className="col-6">
  



{ 

wishlist.length > 0 ? wishlist.map((item)=>{
return     <div class="card mb-3 shadow" style={{"max-width": "700px","height":"200px"}}>
<div class="row no-gutters">
 <div class="col-md-4">
   <img src={item.img} class="card-img" alt="..." style={{"height":"200px","width":"200px"}}/>
 </div>
 <div class="col-md-6">
   <div class="card-body">
     <h5 class="card-title">{item.title}</h5>
     <p class="card-text"><i class="fa fa-inr" aria-hidden="true"></i> {item.rate} &emsp; 
      Qty <button type="button" className="btn btn-light" ><i class="fa fa-minus-circle" aria-hidden="true"></i></button> <input type="text" style={{"width":"10%"}} value={counter}></input><button type="button"  className="btn btn-light" ><i class="fa fa-plus fa-1x" aria-hidden="true"></i></button>
  
     </p>
     <button type="button"className="btn" id="wishlist_addtocart" onClick={() => {
                                            addToCart(item)
                                            removeWishlist(item)
                                      
                                       

                                        }}>Move to Cart</button>
   </div>
 </div>
 <div className="col-md-1 m-4">
 <p class="card-text"><small class="text-muted">
  
     <button type="button" className="btn btn-outline-dark" style={{"border-color":"white"}} onClick={()=>{
  
       removeWishlist(item)
       
     }}><i class="fa fa-trash" aria-hidden="true"></i></button></small></p>
   </div>
</div>
</div>

}) : <div class="jumbotron jumbotron-fluid">
<div class="container">

<p class="lead text-center">No items in wishlist. Please go back to home to shop more</p>
</div>
</div>

}

</div>

</div>
</div> 
    </>
}