import "./Cakecard.css"
import { useContext, useEffect,useState } from "react"
import Searchbar from "../Searchbar/Searchbar";
import ProductContext from "../Productcontext/Productcontext";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cakecard() {
    let productdata = useContext(ProductContext)


    let [productitem,setproductitem] = useState([])
    toast.configure()

  useEffect(()=>{
    async function fetchdata(){
         
        await fetch('https://jpcakes.herokuapp.com/item/itemlist')
        .then(res => {
            return res.json();
        }).then((data) => {
    //   console.log(data)
            setproductitem(data)
            productdata.setproductlist([data])
           
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
    },[productdata])
    // alert(`${obj.title} is added to cart`)
    toast(`${obj.title} is added to cart`,{position: toast.POSITION.TOP_CENTER})
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
    // alert(`${obj.title} is added to wishlist`)
    toast(`${obj.title} is added to wishlist`,{position: toast.POSITION.TOP_CENTER})
    })



    return <>
    <Searchbar/>
        <div className="Cakecard_Container">
            <h3 style={{fontFamily:"sans-serif"}}>Order Cakes Online ({productitem.length} Products)</h3>
            <br/>
            <div className="row">
               
                    {
                       productitem ? productitem.map((obj) => {
                            return <div className="col-lg-3 col-md-4 col-sm-12 d-flex ">
                                <div class="card  ml-4 mb-3 shadow  mb-4 bg-white rounded" id="Cakecard__Home" >
                                    <img src={obj.img} class="card-img-top" alt="..." style={{ height: 300, width: 300 }} />
                                    <div class="card-body">
                                        <h5 class="card-text">{obj.title}</h5>
                                        <p><i class="fa fa-inr" aria-hidden="true"></i> {obj.rate}</p>
                                        <button type="btn" className="btn" id="addToCartbtn"  onClick={() => {
                                            addToCart(obj)
                                        
                                      
                                       

                                        }}>{obj.state}</button>&ensp;
                                        <button type="btn" className="btn btn-outline-secondary" style={{"border-color":"white"}}onClick={() => {
                                          addToWishlist(obj)
                                        }}> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
                                    </div>
                                </div>
                            </div>
                        }): <p>Loading...</p>
                    }
               
            </div>
            
        </div>

    </>
}