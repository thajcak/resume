import React from 'react';

interface BulletListProps {
  items: string[];
}

export const BulletList = ({ items }: BulletListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}; 