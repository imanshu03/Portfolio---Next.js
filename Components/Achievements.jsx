import React from 'react';
import SectionHeader from './SubComponents/SectionHeader';
import AwardIcon from '../Assets/AwardFill';
import StarIcon from '../Assets/StarIcon';
import FragmentLeft from './FragmentLeft';
import SectionSubHeader from './SubComponents/SectionSubHeader';

const icons = {
  award: <AwardIcon className="wrapper-icon" />,
  star: <StarIcon className="wrapper-icon" />,
};

const Achievements = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader heading="Awards" text="Awards I have achieved" />
      <div className="section-body achievements">
        <SectionSubHeader text="Awards I have achieved" />
        {data.map((item, idx) => (
          <FragmentLeft className="achievements-wrapper" key={idx}>
            <div className="achievements-wrapper-top">
              {icons[item.type]}
              <div className="heading-wrapper">
                <h2 className="heading">{item.heading}</h2>
                <span className="subtext-italic">
                  {item.date} - {item.issuer}
                </span>
              </div>
            </div>
            <div className="achievements-wrapper-bottom">
              <p className="para-text-0m">{item.description}</p>
            </div>
          </FragmentLeft>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
