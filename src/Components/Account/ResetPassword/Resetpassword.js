
import {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'


export default function Resetpassword(props) {
    let [password, setpassword] = useState('')
    let token = props.match.params.token;

   
    toast.configure()
    let history = useHistory();
    let UserSubmit = async (e) => {
        e.preventDefault()
         await fetch("https://jpcakes.herokuapp.com/auth/newpassword", {
            method: "POST",
            body: JSON.stringify({
                password, token
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => {
            return res.json();

        }).then((data) => {
            let mesg = data.message
            toast(mesg, { position: toast.POSITION.TOP_CENTER })
            if(mesg === "Password Updated Successfully"){
                history.push('/')
               }
        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }

    return (
        <div className="Reset__container">
            <div className="row mt-5">
                
                <div className="col-12  d-flex justify-content-center">

                <div class="card shadow bg-white rounded"  style={{"width": "30rem" }}>
                    <div className='card-header'>
                    <h1>Reset password</h1>
                    </div>
  <div class="card-body">
  <form onSubmit={UserSubmit}>

<div class="form-group ">
    <label for="exampleInputPassword1">Enter new Password</label>
    <input type="password" class="form-control" onChange={(e)=>{setpassword(e.target.value)}}></input>
</div>


<br />
<button type="submit" class="btn btn-dark" id="signup_btn">Submit</button>

</form>
  </div>
</div>
                    
                    
                </div>
            </div>

        </div>
    );
}