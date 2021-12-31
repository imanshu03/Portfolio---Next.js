import React from 'react';
import FragmentLeft from './FragmentLeft';
import SectionHeader from './SubComponents/SectionHeader';
import SectionSubHeader from './SubComponents/SectionSubHeader';
import SkillBox from './SubComponents/SkillBox';

const Skills = ({ data }) => {
  return (
    <div className="section">
      <SectionHeader
        heading="Skills"
        text="Values I can add to the organization"
      />
      <div className="section-body skills">
        <SectionSubHeader text="Values I can add to the organization" />
        <div className="skills-section-wrapper">
          {data.map((item, idx) => (
            <SkillBox {...item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
