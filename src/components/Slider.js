import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Slider = ({ start }) => {
  return (
    <Carousel fade nextLabel={null} prevLabel={null}>
      {start.map((item) => (
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={item}
            alt='First slide'
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
