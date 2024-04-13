import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Produce from './Components/Produce/Produce';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Customer from './Components/Customer/Customer';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {

  const [playState, setPlayState]  = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PRODUCE' title='What We Grow'/>
        <Produce/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Farm Photos'/>
        <Gallery/>
        <Title subTitle='Customer Review' title='What does Farmers say '/> {/* Move this line here */}
        <Customer/>  
        <Title subTitle='Contact Us' title='Get in Touch '/> {/* Move this line here */}
        <Contact></Contact>
        <Footer/>
      </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
