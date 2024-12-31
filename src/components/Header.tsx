import React from 'react';
import { externalLinks } from '../data/external-links';

export const Header = () => {
  return (
    <div className="header">
      <div className="name">Thomas Hajcak</div>
      <div className="title">Salesforce Engineer</div>
      <div className="sub-title">AI Enthusiast | UX Advocate</div>

      <div className="external-links">
        {externalLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
            title={link.alt}
          >
            <img src={link.imageUrl} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};
