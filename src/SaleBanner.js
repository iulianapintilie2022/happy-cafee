import './SaleBanner.css';
import React from 'react';
import bannerImage from './darkheader.png';

function SaleBanner(){
    return(
<div className='container'>
    <div class="card">
      <div class="card__title">
       
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h1>Christmas</h1>
            <p class="sub">Specialty Coffee</p>
            <p class="price">$20</p>
          </div>
          <div class="image">
            <img src={bannerImage} alt="blbla"></img>
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i> In stock</span>
          <div class="reviews">
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div class="card__footer">
        <div class="recommend">
          <p>Texture Type</p>
          <h3 className='texture_description'>Fine Grounded Blend</h3>
        </div>
        <div class="action">
          <button type="button">See more</button>
        </div>
      </div>
    </div>
    </div>
    );
}

export default SaleBanner;