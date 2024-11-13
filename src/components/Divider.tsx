import React from 'react';

interface DividerProps {
  position: 'top' | 'bottom';
}

export const Divider: React.FC<DividerProps> = ({ position }) => (
  <div className="divider">
    <svg className={`divider-${position}`} preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M1200 120L0 16.48V0h1200v120z" />
    </svg>
  </div>
);
