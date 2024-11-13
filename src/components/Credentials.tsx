import React from 'react';
import { certificationData, educationData } from '../data/credentials';

export const Credentials = () => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="section-colored">
      <div className="content-limiter">
        <div className="content">
          <h2>Certifications</h2>
          <hr/>

          {certificationData.map((entry, index) => (
            <div key={index} className="entry-row">
              <h3>{entry.organization}</h3>
              {entry.certifications.map((cert, certIndex) => (
                <div key={certIndex} className="entry-subtitle">
                  {cert.title}
                  <span className="entry-detail">{formatDate(cert.date)}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="content">
          <h2>Education</h2>
          <hr/>

          <div className="entry-row">
            {educationData.map((edu, index) => (
              <h4 key={index}>
                {edu.degree}
                <span className="entry-detail">{new Date(edu.date).getFullYear()}</span>
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
