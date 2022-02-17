import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import * as CompanyImgs from '../Assets/Company';
import SectionHeader from './SubComponents/SectionHeader';
import Timeline from './SubComponents/Timeline';
import FragmentLeft from './FragmentLeft';
import SectionSubHeader from './SubComponents/SectionSubHeader';

function fetchIcon(iconName = '') {
  const imgSrc = CompanyImgs[iconName];
  if (imgSrc) {
    return (
      <div className="headline-wrapper-icon">
        <Image src={imgSrc} alt={iconName} />
      </div>
    );
  }
  return null;
}

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
              <div className="headline-wrapper">
                {exp.icon && fetchIcon(exp.icon)}
                <div className="headline-wrapper-details">
                  <p className="text-muted-italic">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </p>
                  <h2 className="heading">{exp.designation}</h2>
                  <h3 className="subtext">{exp.company}</h3>
                </div>
              </div>
              {exp.location && (
                <p className="text-muted-italic-mb">{exp.location}</p>
              )}
              {exp.responsibilities ? (
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
              ) : (
                <br />
              )}
              <br />
            </FragmentLeft>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
