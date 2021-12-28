import React from 'react';
import SectionHeader from './SubComponents/SectionHeader';
import Timeline from './SubComponents/Timeline';
import FragmentLeft from './FragmentLeft';

const WorkExperience = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader heading="Experience" text="I love what I do" />
      <div className="section-body experience">
        {data.map((exp, idx) => (
          <div className="experience-wrapper" key={idx}>
            <Timeline isLast={idx === data.length - 1} />
            <FragmentLeft className="experience-wrapper-content">
              <p className="text-muted">
                {exp.startDate} - {exp.endDate || 'Present'}
              </p>
              <br />
              <h3 className="heading">{exp.designation}</h3>
              <h4 className="subtext">{exp.company}</h4>
              <p className="text-muted">{exp.location}</p>
              <br />
              {exp.responsibilities && (
                <>
                  <p className="text-muted">Responsibilties:</p>
                  <ul className="r-list">
                    {exp.responsibilities.map((item, idx2) => (
                      <li key={idx2}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </FragmentLeft>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
