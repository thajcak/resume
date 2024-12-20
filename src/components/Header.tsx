import React from 'react';

interface ExternalLink {
  url: string;
  imageUrl: string;
  alt: string;
}

const externalLinks: ExternalLink[] = [
  {
    url: 'https://www.github.com/thajcak',
    imageUrl: '/images/github.png',
    alt: 'GitHub Profile'
  },
  {
    url: 'https://www.linkedin.com/in/thajcak',
    imageUrl: '/images/linkedin.png',
    alt: 'LinkedIn Profile'
  },
  {
    url: 'https://www.salesforce.com/trailblazer/thajcak',
    imageUrl: '/images/salesforce.png',
    alt: 'Trailblazer Profile'
  }
  // Add more external links as needed
];

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
          >
            <img src={link.imageUrl} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};
