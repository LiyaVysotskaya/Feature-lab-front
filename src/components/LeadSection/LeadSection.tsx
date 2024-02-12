import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { leadSectionMockData } from '../../_mockData/LeadSectionMockData';
import s from './LeadSection.module.scss';
import { LeadSectionCards } from './LeadSectionCards/LeadSectionCards';

export interface ILeadSectionProps {
  className?: string;
}

export const LeadSection: FC<ILeadSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.lead, className)}>
      <p className={cl(s.info)}>{leadSectionMockData.info}</p>

      <div className={cl(s.description)}>
        {leadSectionMockData.description.split('\n').map((item) => (
          <p key={uuidv4()}>{item}</p>
        ))}
      </div>

      <LeadSectionCards key={uuidv4()} />
    </section>
  );
};
