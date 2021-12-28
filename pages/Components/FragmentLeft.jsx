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
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  if (tagName) {
    return React.createElement(
      tagName,
      {
        className: `${className} t-left-wrapper`,
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
      className={`${className} t-left-wrapper `}
      data-func="show"
      data-classname="t-left-transition"
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FragmentLeft;
