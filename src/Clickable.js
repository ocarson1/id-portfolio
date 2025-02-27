    import {useState} from 'react'

    const Clickable = ({ onClick, children, ...props }) => {
        const [isHovered, setIsHovered] = useState(false);
      
        const style = {
          cursor: 'pointer',
          opacity: isHovered ? '0.5' : 'inherit', // 'inherit' retains the default color
          transition: 'opacity 0.1s ease', // smooth transition effect
        };
      
        return (
          <div
            tabIndex="0"
            onClick={onClick}
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