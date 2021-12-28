import React from 'react';
import UpIcon from '../Assets/caret-up-fill.svg';
import FragmentLeft from './FragmentLeft';

const BackToTop = () => {
  const scollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FragmentLeft className="footer-cta">
      <button onClick={scollToTop}>
        Back to top&ensp;
        <UpIcon />
      </button>
    </FragmentLeft>
  );
};

export default BackToTop;
