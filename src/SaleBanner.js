import './SaleBanner.css';
import React from 'react';
import bannerImage from './darkheader.png';

function SaleBanner(){
    return(
<div className='container'>
    <div className="card">
      <div className="card__title">
       
      </div>
      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h1>Christmas</h1>
            <p className="sub">Specialty Coffee</p>
            <p className="price">$20</p>
          </div>
          <div className="image">
            <img src={bannerImage} alt="blbla"></img>
          </div>
        </div>
        <div className="half">
          <div className="description">
            <p>These are our newest products at the moment. We are always doing our best for the best quality products. Try them and tell us what you think!</p>
          </div>
          <span className="stock fa fa-pen"> In stock</span>
          <div className="reviews">
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="recommend">
          <p>Texture Type</p>
          <h3 className='texture_description'>Fine Grounded Blend</h3>
        </div>
        <div className="action">
          <button type="button">See more</button>
        </div>
      </div>
    </div>
    </div>
    );
}

export default SaleBanner;