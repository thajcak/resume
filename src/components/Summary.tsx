import React from 'react';
import { SectionHeader } from './SectionHeader';

export const Summary = () => {
  return (
    <div className="content">
      <SectionHeader title="What I Do" />
      <div className="summary">
        <p>Work with stakeholders to understand business processes, then design and deliver solutions and integrations aligned to their needs</p>
        <p>Advocate for end users in design decisions, validate that flows and screens reflect how people actually work, and build interfaces that are coherent, usable, and easy to adopt</p>
        <p>Bring enthusiasm for AI and a habit of investigating where it fits, adopting it when the problem and payoff are clear rather than by default</p>
      </div>
    </div>
  );
}; 