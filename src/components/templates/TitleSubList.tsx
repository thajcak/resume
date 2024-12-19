import React from 'react';
import { SectionHeader } from '../SectionHeader';

interface TitleSubItem {
  title: string;
  subtitle: string;
}

interface TitleSubListProps {
  title?: string;
  items: TitleSubItem[];
}

export const TitleSubList = ({ title, items }: TitleSubListProps) => {
  return (
    <>
      <SectionHeader title={title} />
      {items.map((item, index) => (
        <div key={index} className="sub-row">
          <div className="title-sub-entry">{item.title}</div>
          <div className="subtitle">{item.subtitle}</div>
        </div>
      ))}
    </>
  );
};