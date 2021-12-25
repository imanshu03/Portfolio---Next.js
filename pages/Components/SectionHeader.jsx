import React, { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ObserverContext } from '../ObserverStore';

const SectionHeader = (props) => {
  const { heading, text, image, alt } = props;

  const observer = useContext(ObserverContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current);
    }
  }, [ref, observer]);

  return (
    <div
      className="section-header t-top-wrapper"
      data-func="show"
      data-classname="t-top-transition"
      ref={ref}
    >
      {image && <Image src={image} className="picture" alt={alt} />}
      {heading && <h1>{heading}</h1>}
      {text && <h3>{text}</h3>}
    </div>
  );
};

export default SectionHeader;
