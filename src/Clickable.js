import { useState } from 'react'



// const computedStyle = window.getComputedStyle(elementRef.current);
// console.log(computedStyle.getPropertyValue("background-color")); // Example



const Clickable = ({ onClick, children, scrollThreshold, scrollType, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);


  const handleClick = () => {

    // Call the passed in onClick handler if it exists
    if (onClick) {
      onClick()
      // execute onClick
    }

    if (scrollThreshold) {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollThreshold) {
        window.scrollTo({
          top: scrollThreshold,
          behavior: scrollType ? scrollType : "smooth"
        })
      }
    }
  };

  const style = {
    cursor: 'pointer',
    opacity: isHovered ? '0.5' : 'inherit', // 'inherit' retains the default color
    transition: 'opacity 0.1s ease', // smooth transition effect
  };

  return (
    <div
      tabIndex="0"
      onClick={handleClick}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Clickable