import React from 'react';
import { certificationData } from '../data/credentials';
import { SplitList } from './templates/SplitList';

export const Certifications = () => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const items = certificationData.flatMap(entry => 
    entry.certifications.map(cert => ({
      left: cert.title,
      right: formatDate(cert.date)
    }))
  );

  return (
    <div className="content">
      <SplitList 
        title="Certifications"
        items={items}
      />
    </div>
  );
}; 