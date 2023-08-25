import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
              <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <header className="navbar-header">
        <img src="https://images.pexels.com/photos/2074127/pexels-photo-2074127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="banner-image"/>
       <h1 className="moving-text">Happy Cafe</h1>
      </header>
    </div>
  );
}

export default Navbar;
