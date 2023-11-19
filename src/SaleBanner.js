import './SaleBanner.css';
import React from 'react';
import bannerImage from '/images/darkheader.png';

function SaleBanner(){
    return(
<div className='container'>
    <div className='banner'>
        <img src={bannerImage} alt='banner'/>
    </div>
</div>
    );
}

export default SaleBanner;