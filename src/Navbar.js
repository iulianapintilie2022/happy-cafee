import React, { useCallback, useState, useEffect } from 'react';
import './Navbar.css';

 
const TEXTS = ['Happy Caffe', 'Premium Coffee', 'Luxury Ambiance', 'Recycled Materials'];


function Navbar() {
  const [newName, setnewName] = useState(TEXTS[0]);
  const shuffle = useCallback(() => {
    const index= Math.floor(Math.random() * TEXTS.length);
    setnewName(TEXTS[index]);
  }, []);

useEffect(()=>{
    const intervalId = setInterval(shuffle, 2000);
    return () => clearInterval(intervalId);
  }, [shuffle])

  return (
    <div className="navbar">
              <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <header className="navbar-header">
        {/*
        <img src="https://images.pexels.com/photos/4424672/pexels-photo-4424672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="banner-image"/>  */}
       <div className="hero-text">
       <h1 className="moving-text">{newName}
       </h1>
       <p className="text-blk subHeading">
      It doesn't matter if you are an cofee person or a tea lover, we will always serve you the drink that makes you get up in the morning. Fresh, tasty and healthy. Happy when we make it, happy when you drink it.
    </p>
    </div>
      </header>
    </div>
  );
}

export default Navbar;
