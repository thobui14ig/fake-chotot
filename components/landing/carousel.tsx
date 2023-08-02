/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel as Slider } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carousel: React.FC = () => (
  <Slider autoplay className='px-3' style={{ background: 'var(--background-layout)' }}>
    <div>
      <h3 style={contentStyle}>
        <img src='./images/slider1.jpg'  alt='no imgage'/>
      </h3>
    </div>
    <div>
      <img src='./images/slider2.jpg'  alt='no imgage'/>
    </div>
    <div>
      <img src='./images/slider3.png'  alt='no imgage'/>
    </div>
  </Slider>
);

export default Carousel