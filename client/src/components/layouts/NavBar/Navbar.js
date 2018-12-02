import React, { Component } from "react";
import './Navbar.css'
class Navbar extends Component {
  render() {
    return (
       <header>
       <h2><a>Restaurant Bookings</a></h2>

       <nav>
       <div className="SignupButtonContainer"><button className="signupButton">Sign Up</button></div>
           <li><a>Reservation</a></li>
           <li><a>Contact</a></li>
           <li><a>About</a></li>
           <li><a>Home</a></li>
           <div className="loginButtonContainer"><button className="loginButton">Login</button></div>
       </nav>
   </header>
    )
  }
}

export default Navbar;
