import React from 'react';
import UpIcon from '../Assets/caret-up-fill.svg';
import FragmentLeft from './FragmentLeft';

const BackToTop = () => {
  const scrollToTop = () => {
    document.getElementById('app').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer-cta">
      <FragmentLeft props={{ onClick: scrollToTop }} tagName="button">
        Back to top&ensp;
        <UpIcon />
      </FragmentLeft>
    </div>
  );
};

export default BackToTop;
