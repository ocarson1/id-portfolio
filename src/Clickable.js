    import {useState} from 'react'

    const Clickable = ({ onClick, children, ...props }) => {
        const [isHovered, setIsHovered] = useState(false);
      
        const style = {
          cursor: 'pointer',
          color: isHovered ? '#888' : 'inherit', // 'inherit' retains the default color
          transition: 'color 0.1s ease', // smooth transition effect
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