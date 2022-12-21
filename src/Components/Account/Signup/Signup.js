import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css"

function Signup() {


    let [firstname, setfirstname] = useState('')
    let [lastname, setlastname] = useState('')
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
 


    let history = useHistory();
    toast.configure()
    let status = "pending"
    let UserSubmit = async (e) => {
        e.preventDefault()
        await fetch("https://jpcakes-backend.vercel.app/auth/register", {
            method: "POST",
            body: JSON.stringify({
             
                email,
                firstname,
                lastname,
                password,
                status
                
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => {
            return res.json();

        }).then((data) => {

            let mesg = data.message
            toast(mesg, { position: toast.POSITION.TOP_CENTER })
            history.push('/')
        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }




  return (
    <div className="Signup__Container">
      <div className='row mt-5'>
                <div className='col-12 d-flex justify-content-center' >
                    <div class="card shadow" style={{"width": "30rem" }}>
                        <div className='card-title' style={{ "textAlign": "center" }}>
                            <h2 className="m-3">SIGN UP</h2>
                        </div>
                        <div class="card-body">
                            <form onSubmit={UserSubmit}>
                                <div class="form-group">
                                    <label for="email">username</label>
                                    <input type="email" class="form-control" id="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email address" />

                                </div>
                                <div class="form-group">
                                    <label for="firstname">Firstname</label>
                                    <input type="firstname" class="form-control" id="firstname" value={firstname} onChange={(e) => setfirstname(e.target.value)} />

                                </div>
                                <div class="form-group">
                                    <label for="lastname">Lastname</label>
                                    <input type="lastname" class="form-control" id="lastname" value={lastname} onChange={(e) => setlastname(e.target.value)} />

                                </div>

                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)} />
                                </div>
                              
                                <button type="submit" class="btn btn-dark" id="signup_btn">sign Up</button>

                            </form>

                        </div>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default Signup
