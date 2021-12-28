import React, { useContext, useEffect, useRef } from 'react';
import { ObserverContext } from '../../ObserverStore';

const SkillBox = ({ text }) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <span
      className="skill-box t-left-wrapper"
      data-func="show"
      data-classname="t-left-transition"
      ref={ref}
    >
      {text}
    </span>
  );
};

export default SkillBox;
