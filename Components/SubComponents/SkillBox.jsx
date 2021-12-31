import React, { useContext, useEffect, useRef } from 'react';
import { ObserverContext } from '../../ObserverStore';
import * as Icons from '../../Assets/Skills';

const SkillBox = ({ text, icon }) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      className="skill-box t-left-wrapper"
      data-func="show"
      data-classname="t-left-transition"
      ref={ref}
    >
      {icon ? (
        <>
          <div className="skill-box-icon">
            {React.createElement(Icons[icon])}
          </div>
          <div className="skill-box-icon-text">{text}</div>
        </>
      ) : (
        <div className="skill-box-text">{text}</div>
      )}
    </div>
  );
};

export default SkillBox;
