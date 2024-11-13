import React from 'react';
import { employmentData } from '../data/employment';

export const Employment = () => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="section-colored">
      <div className="content-limiter">
        <div className="content">
          <h2>Employment</h2>
          <hr/>

          {employmentData.map((entry, index) => (
            <div key={index} className="entry-row">
              <h3>{entry.company}</h3>
              {entry.positions.map((position, posIndex) => (
                <React.Fragment key={posIndex}>
                  <div className="entry-subtitle">
                    {position.title}
                    <span className="entry-detail">
                      {position.endDate 
                        ? `${formatDate(position.startDate)} - ${formatDate(position.endDate)}`
                        : `Since ${formatDate(position.startDate)}`}
                    </span>
                  </div>
                  <ul>
                    {position.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
