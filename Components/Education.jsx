import React from 'react';
import FragmentLeft from './FragmentLeft';
import SectionHeader from './SubComponents/SectionHeader';
import SectionSubHeader from './SubComponents/SectionSubHeader';
import Timeline from './SubComponents/Timeline';

const Education = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader heading="Education" text="I have a decent knowledge" />
      <div className="section-body experience">
        <SectionSubHeader text="I have a decent knowledge" />
        {data.map((exp, idx) => (
          <div className="experience-wrapper" key={idx}>
            <Timeline isLast={idx === data.length - 1} />
            <FragmentLeft
              className={`experience-wrapper-content ${
                idx !== data.length - 1 ? 'edu' : 'edu-last'
              }`}
            >
              <p className="text-muted-italic">
                {exp.startDate} - {exp.endDate}
              </p>
              <h2 className="heading">
                {exp.degree}
                {exp.stream && (
                  <span className="subtext-inline">({exp.stream})</span>
                )}
              </h2>
              <h3 className="subtext">{exp.school}</h3>
              <p className="text-muted-italic-mb">{exp.location}</p>
              <p className="text-muted-italic">{exp.score}</p>
            </FragmentLeft>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
