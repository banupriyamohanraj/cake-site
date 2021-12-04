import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import './Searchbar.css'
import { useContext } from "react"

import ProductContext from "../Productcontext/Productcontext";

export default function Searchbar() {

    let [caketype,setcaketype] = useState('');
    let[flavour,setflavour] = useState('');
    let[shape,setshape]=useState('');
    let[tier,setTier] = useState('');
  
  
    let productdata = useContext(ProductContext)


    
  
    
    let filter = async()=>{
        
        await fetch(`https://jpcakes.herokuapp.com/item/itemlist/${caketype}/${flavour}/${shape}/${tier}`)
        .then(res => {
            return res.json();
        }).then((data) => {
          
           
            productdata.setsearchlist([data])
           
        })
        


    }








    return <>
        <div className="SearchContainer ">
            <div className="row  mt-4">
                <div className="col-2">
                    <div class="input-group mb-3">
                        <select class="custom-select border-dark" id="inputGroupSelect01" onChange={(e)=>setcaketype(e.target.value)}>
                            <option selected>Cake type</option>
                            <option >Regular</option>
                            <option >Designer</option>
                            <option >Cupcake</option>
                        </select>
                    </div>
                </div>
                <div className="col-2">
                    <div class="input-group mb-3">
                       
                        <select class="custom-select border-dark" id="inputGroupSelect01" onChange={(e)=>setflavour(e.target.value)}>
                            <option selected>Flavors</option>
                            <option >chocolate</option>
                            <option >butterscotch</option>
                            <option >Red velvet</option>
                            <option >venilla</option>
                        </select>
                    </div>
                </div>
                <div className="col-2">
                    <div class="input-group mb-3">
                        
                        <select class="custom-select border-dark" id="inputGroupSelect01" onChange={(e)=>setshape(e.target.value)}>
                            <option selected>shape</option>
                            <option >round</option>
                            <option >heart</option>
                            <option >square</option>
                        </select>
                    </div>
                </div>
                <div className="col-2">
                    <div class="input-group mb-3">
                     
                        <select class="custom-select border-dark" id="inputGroupSelect01" onChange={(e)=>setTier(e.target.value)}>
                            <option selected>Tier</option>
                            <option >single</option>
                            <option >double</option>
                            <option >tripple</option>
                        </select>
                    </div>
                </div>
                <div className="col-3">
                <Link to="/search"><button type="button" className="btn btn-secondary" onClick={filter}>Search</button></Link>
                </div>
            </div>
        </div>
    </>
}