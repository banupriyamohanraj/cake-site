import { useEffect} from "react"
import {useHistory} from 'react-router-dom'

export default function ConfirmEmail(props){
    let history = useHistory();
    

  
    let confirmationcode = props.match.params.confirmationcode
    let status = "Activated"

    useEffect(()=>{
        confirm()
    })

   const confirm =()=>{
    fetch("https://jpcakes.herokuapp.com/auth/confirm",{
        method: "PUT",
        body: JSON.stringify({
            status,confirmationcode
        }),
        headers: {
            "content-type": "application/json"
        }
    }).then(res=>{
        return res.json();
    }).then((data)=>{
    
        history.push('/')
    
    })
   }
    return <>
    <div className="ConfirmEmail__container">
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center">
            <h3>Your Email has been successfully activated !!! <strong>Redirecting to login Page...</strong></h3>
            </div>
        </div>
    
        </div></>
}



