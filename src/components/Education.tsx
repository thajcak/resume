import React from 'react';
import { educationData } from '../data/credentials';
import { TitleSubList } from './templates/TitleSubList';

export const Education = () => {
  const educationItems = educationData.map(edu => ({
    title: edu.degree,
    subtitle: `${edu.school} - ${new Date(edu.date).getFullYear()}`
  }));

  return (
    <div className="content">
      <TitleSubList 
        title="Education"
        items={educationItems}
      />
    </div>
  );
}; 