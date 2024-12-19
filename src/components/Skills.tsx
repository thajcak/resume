import React from 'react';
import { skillData } from '../data/skills';
import { SectionHeader } from './SectionHeader';

export const Skills = () => {
  return (
    <div className="content">
      <SectionHeader title="Technical Skills" />
      {skillData.map((entry, index) => (
        <div key={index} className="skill-row">
          <div>{entry.type}</div>
          <div>
            {entry.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
