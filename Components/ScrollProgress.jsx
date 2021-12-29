import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const app = window;
    function handleScroll() {
      let y = Math.ceil(window.scrollY);
      let maxY = Math.ceil(window.scrollMaxY);
      const per = 100 - ((maxY - y) / maxY) * 100;
      setWidth(per);
    }
    app.addEventListener('scroll', handleScroll);
    app.addEventListener('touchmove', handleScroll);
    return () => {
      app.removeEventListener('scroll', handleScroll);
      app.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
};

export default ScrollProgress;
