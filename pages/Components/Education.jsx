import React from 'react';
import FragmentLeft from './FragmentLeft';
import SectionHeader from './SubComponents/SectionHeader';
import Timeline from './SubComponents/Timeline';

const Education = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader heading="Education" text="I have a decent knowledge" />
      <div className="section-body experience">
        {data.map((exp, idx) => (
          <div className="experience-wrapper" key={idx}>
            <Timeline isLast={idx === data.length - 1} />
            <FragmentLeft className="experience-wrapper-content edu">
              <p className="text-muted">
                {exp.startDate} - {exp.endDate}
              </p>
              <br />
              <h3 className="heading">
                {exp.degree}
                {exp.stream && (
                  <span className="inline-text">({exp.stream})</span>
                )}
              </h3>
              <h4 className="subtext">{exp.school}</h4>
              <p className="text-muted">{exp.location}</p>
              <p className="text-muted">{exp.score}</p>
            </FragmentLeft>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
