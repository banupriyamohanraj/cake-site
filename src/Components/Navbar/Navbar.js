import "./Navbar.css"
import { Link } from "react-router-dom";


export default function Navbar() {





  return <>
  <div className="card shadow">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div className="col-lg-7">
     <b>Cakes</b>
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      </div>
      <div className="col-5">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <Link to="/" class="nav-link"><button type="button" id="navbtn" className="btn btn-light">Home <i class="fa fa-home" aria-hidden="true"></i></button></Link>
          </li>
          <li class="nav-item">
          <Link to="/wishlist" class="nav-link"><button type="button"id="navbtn" className="btn btn-light">Wishlist <i class="fa fa-heart-o" aria-hidden="true"></i></button></Link>
          </li>
          <li class="nav-item">
          <Link to="/cart" class="nav-link"><button type="button"id="navbtn" className="btn btn-light">Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></button></Link>
          </li>
          <li class="nav-item">
          <Link to="/account" class="nav-link"><button type="button" id="navbtn"className="btn btn-light">Signup <i class="fa fa-user-o" aria-hidden="true"></i></button></Link>
          </li>

        </ul>
      </div>
      </div>
      
    </nav>
    </div>
  </>
}