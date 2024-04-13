import React from 'react';
import { Element } from 'react-scroll';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <Element name="about-us"> {/* Add an ID to your section */}
      <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img'/>
          <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
          <h3>About River Valley Farm</h3>
          <h2>Nourish your body with nature's bounty</h2>
          <p>
            River Valley Farm is located at Ikot Ayan Itam
            Itu, Local Government Akwa Ibom State.
            Our main focus is to ensure food security, poverty alleviation, and to generate employment opportunities through achieving a higher growth rate 
            in this vital sector of the economy.

            This we do through the production of Vegetable crops 
            such as Tomatoes, Sweet pepper, Hot pepper, Cucumbers, Watermelon. 
            We believe the process of food production must be such that it is healthy for the farmer, healthy for the consumer, and healthy for the environment.
          </p>
        </div>
      </div>
    </Element>
  );
}

export default About;
