import React from 'react';
import FragmentLeft from './FragmentLeft';
import SectionHeader from './SubComponents/SectionHeader';
import SkillBox from './SubComponents/SkillBox';

const Skills = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader
        heading="Skills"
        text="Values I can add to the organization"
      />
      <div className="section-body skills">
        {Object.keys(data).map((category, idx) => (
          <div className="skills-section" key={idx}>
            <FragmentLeft tagName="h1">{category}</FragmentLeft>
            <div className="skills-section-wrapper">
              {data[category].map((text, idx) => (
                <SkillBox text={text} key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
