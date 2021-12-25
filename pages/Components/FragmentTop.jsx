import React, { useContext, useEffect, useRef } from 'react';
import { ObserverContext } from '../ObserverStore';

const FragmentTop = ({ children, className }) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      className={`${className} t-top-wrapper `}
      data-func="show"
      data-classname="t-top-transition"
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FragmentTop;
