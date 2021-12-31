import React, { useContext, useEffect, useRef } from 'react';
import { ObserverContext } from '../ObserverStore';

const FragmentLeft = ({
  children,
  className = '',
  tagName = '',
  props = {},
}) => {
  const ref = useRef(null);
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (false && ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  if (tagName) {
    return React.createElement(
      tagName,
      {
        className: `${className}`,
        ref: ref,
        'data-func': 'show',
        'data-classname': 't-left-transition',
        ...props,
      },
      children,
    );
  }

  return (
    <div
      className={`${className}`}
      data-func="show"
      data-classname="t-left-transition"
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FragmentLeft;
