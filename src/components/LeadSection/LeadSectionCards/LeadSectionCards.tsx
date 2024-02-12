import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { leadSectionMockData } from '../../../_mockData/LeadSectionMockData';
import s from './LeadSectionCards.module.scss';

interface ILeadSectionCardsProps {}

export const LeadSectionCards: FC<ILeadSectionCardsProps> = () => (
  <ul className={cl(s.cards)}>
    <li className={cl(s.card)}>
      <div className={cl(s.cardHeader)}>
        <p className={cl(s.cardTitleBig)}>Сайт</p>
      </div>
      <p className={cl(s.cardText)}>
        Запущен и его можно посмотреть{' '}
        <a href={leadSectionMockData.url} className={s.link}>
          по ссылке
        </a>
      </p>
    </li>

    {leadSectionMockData.cardsData.map((card) => (
      <li className={cl(s.card)} key={uuidv4()}>
        <div className={cl(s.cardHeader)}>
          <p className={cl(s.cardTitleBig)}>{card.titleBig}</p>
          {card.titleSmall && <p className={cl(s.cardTitleSmall)}>{card.titleSmall}</p>}
        </div>
        <p className={cl(s.cardText)}>{card.text}</p>
      </li>
    ))}
  </ul>
);
