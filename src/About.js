import './About.css';
import React from 'react';

function About() {
  return (
    <div className="About">
     <div className="responsive-container-block bigContainer">
  <div className="container">
    <div className='centered'> 
        <div className='review1'>
          <blockquote>
            <p>Very quick, great quality, would totally recommend.</p>
          </blockquote>
        <h3>Andreea F.</h3>
        <h4>Christmas LimitedEd</h4>
    </div>
        <div className='review1'>
          <blockquote>
            <p>These guys know coffee! Good selection, fantastic coffee, super quick delivery.</p>
          </blockquote>
        <h3>Matthew</h3>
        <h4>Florality Coffee</h4>
    </div>
    <div className='review1'>
          <blockquote>
            <p>Amazing selection of tea, and really delivered to you fresh from the garden! A simply great concept</p>
          </blockquote>
        <h3>Kirsten Kaiser</h3>
        <h4>Herbal LuxuryTea</h4>
    </div>
    
    </div>
    </div>
  </div>

    </div>
  );
}

export default About;
