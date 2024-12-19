import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  detail?: ReactNode;
}

export const SectionHeader = ({ title, subtitle, detail }: SectionHeaderProps) => {
  if (!title && !subtitle && !detail) return null;
  
  return (
    <div className="section-header">
      {title && <div className="item-header">{title}</div>}
      {subtitle && 
      <div className="entry-subtitle">
        {subtitle}
        {detail && <span className="entry-detail">{detail}</span>}
      </div>}
    </div>
  );
}; 