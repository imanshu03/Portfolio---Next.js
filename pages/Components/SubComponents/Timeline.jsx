import React, { useContext, useEffect, useRef } from 'react';
import { ObserverContext } from '../../ObserverStore';

const Timeline = ({ isLast, ...props }) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      className="timeline"
      {...props}
      ref={ref}
      data-func="show"
      data-classname="show-line"
    >
      <div className="dot" />
      {!isLast && <div className="line" />}
    </div>
  );
};

export default Timeline;
