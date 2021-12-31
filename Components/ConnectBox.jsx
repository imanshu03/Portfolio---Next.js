import React from 'react';
import * as Icons from '../Assets/Connect';

const ConnectBox = ({ data }) => {
  return (
    <div id="social-links">
      <span>Connect</span>
      <div className="social-links-wrapper">
        {data.map((link, idx) => (
          <a href={link.href} target={link.target || '_self'} key={idx}>
            {React.createElement(Icons[link.icon])}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectBox;
