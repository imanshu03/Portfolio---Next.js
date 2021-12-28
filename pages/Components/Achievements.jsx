import React from 'react';
import SectionHeader from './SubComponents/SectionHeader';
import AwardIcon from '../Assets/AwardFill';
import StarIcon from '../Assets/StarIcon';
import FragmentLeft from './FragmentLeft';

const icons = {
  award: <AwardIcon className="wrapper-icon" />,
  star: <StarIcon className="wrapper-icon" />,
};

const Achievements = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader heading="Achievements" text="Awards I have achieved" />
      <div className="section-body achievements">
        {data.map((item, idx) => (
          <FragmentLeft className="achievements-wrapper" key={idx}>
            <div className="achievements-wrapper-top">
              {icons[item.type]}
              <div className="heading">
                <h3>{item.heading}</h3>
                <span className="date">
                  {item.date} - {item.issuer}
                </span>
              </div>
            </div>
            <div className="achievements-wrapper-bottom">
              <p className="description">{item.description}</p>
            </div>
          </FragmentLeft>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
