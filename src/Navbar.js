import { useState, useEffect } from 'react';
import Clickable from './Clickable';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      <div className={`sticky-nav ${isVisible ? 'active' : ''}`}>
      
      <div class="nav">
              <Clickable>Owen Carson</Clickable>
              <div id="head-links">
                <Clickable>LinkedIn</Clickable>
                <Clickable>Resume</Clickable>
              </div>
            </div>
            </div>
  );
};

export default Navbar;