import React, { useEffect, useState } from 'react';

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      {/* Background glow effect */}
      <div 
        className={`pointer-events-none fixed z-50 h-64 w-64 rounded-full bg-gradient-to-r from-highlight/30 to-secondary_accent/30 blur-3xl transition-opacity duration-300 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
        style={{
          left: `${position.x - 128}px`,
          top: `${position.y - 128}px`,
          transform: 'translate(0, 0)',
        }}
      />
    </>
  );
};

export default MouseGlow;
