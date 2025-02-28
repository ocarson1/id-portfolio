import { useState, useEffect, useRef } from 'react';
import Clickable from './Clickable';
import penny from './images/penny.png'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);
  const topRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div ref={topRef} className={`sticky-nav ${isVisible ? 'active' : ''}`}>

      <div class="nav" >
        <Clickable class="horizontal" scrollThreshold='0'>
          <div class="logo-container"></div>
          <img class="logo" src={penny}></img>
          <div className={`my-name ${isVisible ? 'active' : ''}`}>Owen Carson</div>
      </Clickable>
      <div id="head-links">
        <Clickable>Email</Clickable>
        <Clickable>Resume</Clickable>
      </div>
    </div>
            </div >
  );
};

export default Navbar;