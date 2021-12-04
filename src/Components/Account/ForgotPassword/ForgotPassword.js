import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ForgotPassword.css"
function ForgotPassword() {

    let [email, setemail] = useState('')
    let history = useHistory(); 

    let UserSubmit = async (e) => {
        e.preventDefault()

        await fetch('https://jpcakes.herokuapp.com/auth/passwordreset', {
            method: "PUT",
            body: JSON.stringify({
                email
            }),
            headers: {
                "content-type": "application/json",

            }
        }).then(res => {
            return res.json();

        }).then((data) => {
           
            let mesg = data.message
            toast(mesg,{position: toast.POSITION.TOP_CENTER})
            history.push('/')


        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });


    }

  return (
    <div className="ForgotPassword__container">
   
      <div className='row mt-5'>
                <div className='col-12 d-flex justify-content-center'  >
                    <div class="card shadow" style={{"width": "30rem" }}>
                        <div className='card-title' style={{"textAlign":"center"}}>
                            <h2 className="m-3">FORGOT PASSWORD</h2>
                        </div>
                        <div class="card-body">
                            <form onSubmit={UserSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) => setemail(e.target.value)}/>
                                </div>
                                
                                <button type="submit" class="btn btn-dark" id="forgotpass_btn">send</button>
        
                            </form>
                            <br/>
                            
                        </div>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default ForgotPassword
