import React, { useContext, useEffect, useRef } from 'react';
import { ObserverContext } from '../../ObserverStore';

const SectionSubHeader = (props) => {
  const { text, className = '' } = props;

  const observer = useContext(ObserverContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      className={`section-subheader ${className} t-left-wrapper`}
      data-func="show"
      data-classname="t-left-transition"
      ref={ref}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default SectionSubHeader;
