import React from 'react';
import { TitleSubList } from './templates/TitleSubList';

export const Speaking = () => {
  const speakingEvents = [
    {
      title: "2019 North American Veeva Customer Summit",
      subtitle: "Presented on best practices for building data visualizations in the life sciences industry."
    }
  ];

  return (
    <div className="content">
      <TitleSubList 
        title="Speaking Events"
        items={speakingEvents}
      />
    </div>
  );
};
