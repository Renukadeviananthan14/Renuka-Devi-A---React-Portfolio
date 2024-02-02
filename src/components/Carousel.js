import React from 'react';
import { Carousel } from 'react-bootstrap';
import Bg from './bg.png';

const MyCarousel = () => {
  return (
    
      <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3"><h2>Renuka Devi Ananthan ,B.Tech-IT</h2><p>Web & App Developer</p></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={Bg} height="300px" width="250px" className='emo'/></div>
    </div>
  </div>
</div>
      
  );
};

export default MyCarousel;
