import React from 'react';
import * as Icons from '../Assets/Connect';
import FragmentLeft from './FragmentLeft';

const ConnectBox = ({ data }) => {
  return (
    <FragmentLeft id="social-links">
      {data.map((link, idx) => (
        <a
          href={link.href}
          target={link.target || '_self'}
          key={idx}
          rel="noopener noreferrer"
          aria-label={link.value}
        >
          {React.createElement(Icons[link.icon])}
          <span className="link-text">{link.value}</span>
        </a>
      ))}
    </FragmentLeft>
  );
};

export default ConnectBox;
