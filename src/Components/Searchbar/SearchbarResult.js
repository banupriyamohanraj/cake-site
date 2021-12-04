import React from 'react'
import { useContext } from "react"
import "./SearchbarResult.css"
import Searchbar from './Searchbar';
// import { useState } from 'react/cjs/react.development';

import ProductContext from "../Productcontext/Productcontext";

const SearchbarResult = () => {

// let[results,setresults] = useState([]);

  let productdata = useContext(ProductContext)

  
  // useEffect(()=>{
  //   setresults([productdata.searchlist])
  // },[productdata])



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
},[productdata])
alert(`${obj.title} is added to cart`)
})



let addToWishlist = ((obj) => {
    
  fetch('https://jpcakes.herokuapp.com/wish/wishlist',{
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
alert(`${obj.title} is added to wishlist`)
})



  return (<>
  <Searchbar/>
    <div>
      <h3>Search Results - { productdata.searchlist.length > 0 ? (productdata.searchlist[0].data.length) : 0}</h3>
      <br/>
      <div className="Cakecard_Container">
            <div className="row">
               
                    {
                        productdata.searchlist.length > 0 ? productdata.searchlist[0].data.map((obj) => {
                            return <div className="col-lg-3 col-md-4 col-sm-12 d-flex align-items-stretch">
                                <div class="card mb-3 shadow p-3 mb-5 bg-white rounded" id="Cakecard__Search"> 
                                    <img src={obj.img} class="card-img-top" alt="..." style={{ height: 200, width: 295 }} />
                                    <div class="card-body">
                                        <p class="card-text">{obj.title}</p>
                                        <p><i class="fa fa-inr" aria-hidden="true"></i> {obj.rate}</p>
                                        <button type="btn" className="btn" style={{ backgroundColor: "rgb(236, 116, 156)", fontWeight: "500" }} id="myButton" onClick={() => {
                                            addToCart(obj)
                                       
                                      
                                       

                                        }}>{obj.state}</button>&ensp;
                                        <button type="btn" className="btn btn-outline-secondary" onClick={() => {
                                          addToWishlist(obj)
                                        }}> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
                                    </div>
                                </div>
                            </div>
                        }) : <h1>No Results found</h1>
                    }
               
            </div>
        </div>
    </div>
  </>)
}

export default SearchbarResult
