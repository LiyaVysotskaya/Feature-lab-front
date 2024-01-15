import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './LeadSection.module.scss';

import { leadSectionMockData } from '../../_mockData/LeadSectionMockData';

export interface ILeadSectionProps {
  className?: string;
}

export const LeadSection: FC<ILeadSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.lead, className)}>
      <p className={cl(s.info)}>{leadSectionMockData.info}</p>

      <div className={cl(s.description)}>
        {leadSectionMockData.description.map((item) => (
          <p key={uuidv4()}>{item}</p>
        ))}
      </div>

      <ul className={cl(s.cards)}>
        {leadSectionMockData.cardsData.map((card) => (
          <li className={cl(s.card)} key={uuidv4()}>
            <div className={cl(s.cardHeader)}>
              <p className={cl(s.cardTitleBig)}>{card.titleBig}</p>
              {card.title && <p className={cl(s.cardTitle)}>{card.title}</p>}
            </div>
            <p className={cl(s.cardText)}>{card.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
