import React from 'react';
import { SectionHeader } from './SectionHeader';

export const Summary = () => {
  return (
    <div className="content">
      <SectionHeader title="What I Do" />
      <div className="summary">
        <p>Design and build custom solutions and integrations that help businesses run better</p>
        <p>Create user-focused experiences and interfaces that make technology feel natural</p>
        <p>Embrace AI tools with enthusiasm to accelerate development and streamline workflows</p>
      </div>
    </div>
  );
}; 