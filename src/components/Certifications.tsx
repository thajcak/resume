import React from 'react';
import { certificationData } from '../data/credentials';
import { SectionHeader } from './SectionHeader';

export const Certifications = () => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const images = certificationData.flatMap(entry => 
    entry.certifications.map(cert => ({
      title: cert.title,
      date: formatDate(cert.date),
      src: cert.image
    }))
  );

  return (
    <div className="content">
      <SectionHeader title="Certifications" />
      <div className="certification-grid">
        {images.map((image, index) => (
          <div key={index} className="certification-image" title={`${image.title} - ${image.date}`}>
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
}; 