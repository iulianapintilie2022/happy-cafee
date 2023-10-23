import React from "react";
import './Navbar.css';
import TextTransition, {presets} from 'react-text-transition';
 
const TEXTS = ['Happy Caffe', 'Premium Cofee', 'Luxury Ambiance', 'Recycled Materials'];


function Navbar() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(()=>{
    const intervalId = setInterval(
    ()=> setIndex((index) => index + 1), 3000,
    );
    return () => clearTimeout(intervalId);
  }, []);
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
       <h1 className="moving-text">
        <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
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
