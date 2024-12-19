import React from 'react';
import { TitleSubList } from './templates/TitleSubList';

export const Speaking = () => {
  const speakingEvents = [
    {
      title: "2019 North American Veeva Customer Summit",
      subtitle: "Presented best practices on building data visualizations for the life science industry."
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
