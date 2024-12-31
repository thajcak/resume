export interface ExternalLink {
  url: string;
  imageUrl: string;
  alt: string;
}

export const externalLinks: ExternalLink[] = [
  {
    url: 'https://www.github.com/thajcak',
    imageUrl: '/images/github.png',
    alt: 'GitHub Profile'
  },
  {
    url: 'https://www.salesforce.com/trailblazer/thajcak',
    imageUrl: '/images/salesforce.png',
    alt: 'Trailblazer Profile'
  },
  {
    url: 'https://www.linkedin.com/in/thajcak',
    imageUrl: '/images/linkedin.png',
    alt: 'LinkedIn Profile'
  }
]; 