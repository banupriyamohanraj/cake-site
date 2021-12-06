import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
import Cakecard from "./Components/Home/Cakecard"
import Wishlist from './Components/Wishlist/Wishlist';
import Cart from './Components/Cart/Cart';
import User from './Components/Account/User';
// import Payment from './Components/Payment/Payment';
import SearchbarResult from './Components/Searchbar/SearchbarResult';
import { ProductProvider } from './Components/Productcontext/Productcontext';
import Signup from './Components/Account/Signup/Signup';
import ForgotPassword from './Components/Account/ForgotPassword/ForgotPassword';
import PaymentSection from './Components/PaymentSection/PaymentSection';
import Payment from './Components/Payment/Payment';
import Resetpassword from './Components/Account/ResetPassword/Resetpassword';
import ConfirmEmail from './Components/Account/ConfirmEmail/ConfirmEmail';

function App() {
  return <>
  <Router> 

    <div id="wrapper">
    <ProductProvider>

        <Navbar></Navbar>  
        <Switch>
        <Route path="/" component={Cakecard} exact={true}></Route>
        <Route path="/wishlist" component={Wishlist} exact={true}></Route>
        <Route path="/cart" component={Cart} exact={true}></Route>
        <Route path="/account" component={User} exact={true}></Route>
        <Route path="/paymentsection" component={PaymentSection} exact={true}></Route>
        <Route path="/search" component={SearchbarResult} exact={true}></Route>
        <Route path="/forgotpassword" component={ForgotPassword} exact={true}></Route>
        <Route path="/registration" component={Signup} exact={true}></Route>
        <Route path="/orderconfirmation" component={OrderConfirmation} exact={true}></Route>
        <Route path="/paymentsection/payment" component={Payment} excat={true}></Route>
        <Route path="/confirm/:confirmationcode" component={ConfirmEmail} exact={true}></Route>
        <Route path ='/resetpassword/:token' component={Resetpassword} exact = {true}></Route>
        </Switch>  
      </ProductProvider>
    </div>
    </Router>
  </>
}

export default App;
