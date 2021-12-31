import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleScroll(app) {
      let y = Math.ceil(app.scrollY);
      let maxY = Math.ceil(app.scrollMaxY);
      const per = 100 - ((maxY - y) / maxY) * 100;
      setWidth(per);
    }
    document.documentElement.addEventListener(
      'scroll',
      handleScroll.bind(this, document.documentElement),
    );
    return () => {
      app.removeEventListener('scroll', handleScroll);
      app.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
};

export default ScrollProgress;
