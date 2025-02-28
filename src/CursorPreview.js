import React, { useState, useEffect } from 'react';

const CursorPreview = ({ children, previewImageSrc, altText = "Preview image" }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track mouse position when the preview is visible
  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (showPreview) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [showPreview]);

  return (
    <div
      className="cursor-preview"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      {children}
      
      {showPreview && (
        <div 
            className="preview-image-wrapper"
        //  className="fixed pointer-events-none z-50"
            style={{ 
            left: `${cursorPosition.x + 10}px`, 
            top: `${cursorPosition.y + 10}px`,
          }}
        >
          <img 
            src={previewImageSrc} 
            alt={altText}
            className="preview-image"
            // className="w-32 h-24 object-cover rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default CursorPreview