import React from 'react';
import { employmentData } from '../data/employment';
import { SectionHeader } from './SectionHeader';
import { BulletList } from './templates/BulletList';

export const Employment = () => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div>
      {employmentData.map((entry, index) => (
        <div key={index} className="entry-row">
          <SectionHeader title={entry.company} />
          {entry.positions.map((position, posIndex) => (
            <React.Fragment key={posIndex}>
              <SectionHeader 
                subtitle={position.title}
                detail={position.endDate 
                  ? `${formatDate(position.startDate)} - ${formatDate(position.endDate)}`
                  : `Since ${formatDate(position.startDate)}`
                }
              />
              <BulletList items={position.responsibilities} />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};
