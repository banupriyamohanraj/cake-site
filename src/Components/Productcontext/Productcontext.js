import React, { useState } from 'react';

let ProductContext = React.createContext();

export default ProductContext;


export const ProductProvider = ({children})=>{

    let [productlist,setproductlist] = useState([])
    let[cartlist,setcartlist] = useState([])
    let[Total,setTotal] = useState([0])
    let[wishlist,setwishlist] = useState([])
    let[userlist,setuserlist] = useState([]);
    let[searchlist,setsearchlist] = useState([]);
    let[userLoggedIn,setuserLoggedIn] = useState([]);
    return <ProductContext.Provider value={{productlist,setproductlist,cartlist,setcartlist,Total,setTotal,wishlist,setwishlist,userlist,setuserlist,userLoggedIn,setuserLoggedIn,searchlist,setsearchlist}}>
        {children}
    </ProductContext.Provider>
}