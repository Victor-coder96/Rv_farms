import React from 'react';
import { Element } from 'react-scroll';
import './Produce.css';
import Produce_1 from '../../assets/produce-1.png';
import Produce_2 from '../../assets/produce-2.png';
import Produce_3 from '../../assets/produce-3.png';
import Produce_4 from '../../assets/produce-4.png';
import Buynow_1 from '../../assets/Buynow-1.jpg';
import Buynow_3 from '../../assets/Buynow-3.jpg';

const Produce = () => {
  return (
    <Element name="produce"> {/* Add an ID to your section */}
      <div className='Produces'>
        <div className='Produce'>
          <img src={Produce_1} alt="" />
          <div className="caption">
            <img src={Buynow_1} alt="" />
            <p>Sweet pepper</p>
          </div>
        </div>
        <div className='Produce'>
          <img src={Produce_2} alt="" />
          <div className="caption">
            <img src={Buynow_3} alt="" />
            <p>Tomatoes</p>
          </div>
        </div>
        <div className='Produce'>
          <img src={Produce_3} alt="" />
          <div className="caption">
            <img src={Buynow_3} alt="" />
            <p>Hot pepper</p>
          </div>
        </div>
        <div className='Produce'>
          <img src={Produce_4} alt="" />
          <div className="caption">
            <img src={Buynow_1} alt="" />
            <p>Chilli Pepper</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Produce;
