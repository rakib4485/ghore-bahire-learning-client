import React from 'react';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img src={banner} alt="" className='max-h-screen w-screen'/>
        </div>
    );
};

export default Banner;