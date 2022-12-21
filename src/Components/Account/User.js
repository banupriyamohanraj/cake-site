import "./User.css";
import { Link } from "react-router-dom";
import { useContext,useState } from "react"
import ProductContext from "../Productcontext/Productcontext";
import { useHistory } from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User() {

    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');
    let [loading,setloading] = useState(false)

    let productdata = useContext(ProductContext);
    let history = useHistory();
    toast.configure()

    let UserSubmit = async (e) => {
        e.preventDefault()
        setloading(true)
        await fetch('https://jpcakes-backend.vercel.app/auth/login', {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => {
                return res.json();
            }).then((data) => {
                setloading(true)
                //passing userdata to other components
                productdata.setuserlist(data.data)
                // console.log(userData)
                productdata.setuserLoggedIn(true)

                //notifying user
                let mesg = data.message
           
                toast(mesg, { position: toast.POSITION.TOP_CENTER })
    
               if(productdata.checkout === false && mesg === "Login Sucessfull"){
                history.push('/')
               }else if (productdata.checkout === true){
                history.push('/paymentsection')
               }
              
              
            })

    }

    if(loading) return <div>Loading...Please wait</div>

  return (
    <>
      <div className="loginContainer">
        <div className="loginrow mt-5">
            <div class="col-12 loginCard d-flex justify-content-center">
          <div className="card shadow bg-white rounded " style={{"width": "30rem" }}>
              <div class="cardbody m-3">
              <h2 class="card-title mb-5" id="logintitle">LOGIN</h2>
            <form >
              <div class="form-group ">
                <label for="exampleInputEmail1">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your email address"
                  value={email} onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div class="form-group ">
                <label for="exampleInputPassword1">password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={password} onChange={(e) => setpassword(e.target.value)}
                />
                 <Link to="/forgotpassword" style={{"color":"black"}}>Forgot password ? </Link>
              </div>
              <button type="button" class="btn m-2" id="login_btn" onClick={UserSubmit}>Login</button>
             
              <div class="registration m-2">

              <h5>New user ? <Link to="/registration" style={{"color":"black","textDecoration":"underline"}}>signup</Link></h5>
              </div>
            </form>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
