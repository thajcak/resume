import React, { ReactNode } from 'react';
import { SectionHeader } from '../SectionHeader';

interface SplitListItem {
  left: string;
  right: ReactNode;
}

interface SplitListProps {
  title?: string;
  subtitle?: string;
  items: SplitListItem[];
}

export const SplitList = ({ title, subtitle, items }: SplitListProps) => {
  return (
    <>
      <SectionHeader 
        title={title}
        subtitle={subtitle}
      />
      {items.map((item, index) => (
        <div key={index} className="split-row">
          <div className="split-left">{item.left}</div>
          <div className="split-right">{item.right}</div>
        </div>
      ))}
    </>
  );
}; 