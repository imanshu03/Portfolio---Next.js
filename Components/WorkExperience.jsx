import React from 'react';
import SectionHeader from './SubComponents/SectionHeader';
import Timeline from './SubComponents/Timeline';
import FragmentLeft from './FragmentLeft';
import SectionSubHeader from './SubComponents/SectionSubHeader';

const WorkExperience = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader heading="Experience" text="I love what I do" />
      <div className="section-body experience">
        <SectionSubHeader text="I love what I do" />
        {data.map((exp, idx) => (
          <div className="experience-wrapper" key={idx}>
            <Timeline isLast={idx === data.length - 1} />
            <FragmentLeft className="experience-wrapper-content">
              <p className="text-muted-italic">
                {exp.startDate} - {exp.endDate || 'Present'}
              </p>
              <h3 className="heading">{exp.designation}</h3>
              <h4 className="subtext">{exp.company}</h4>
              <p className="text-muted-italic-mb">{exp.location}</p>
              {exp.responsibilities && (
                <>
                  <p className="text-muted-italic">Responsibilties:</p>
                  <ul className="list">
                    {exp.responsibilities.map((item, idx2) => (
                      <li className="list-item-text" key={idx2}>
                        {item}
                      </li>
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
