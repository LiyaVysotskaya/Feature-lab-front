import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import s from './CompetenciesSection.module.scss';
import { cards } from './mockData';
import PlusBtn from './svg/plus.svg?svgr';

export interface ICompetenciesSectionProps {
  className?: string;
}

export const CompetenciesSection: FC<ICompetenciesSectionProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handlePlusBtnClick = (url: string) => {
    navigate(url);
  };

  return (
    <section className={cl(s.competencies, className)}>
      <h2 className={s.sectionTitle}>Компетенции</h2>
      <ul className={s.list}>
        {cards.map((card, index) => (
          <li className={s.card} key={uuidv4()}>
            <div className={s.cardInfo}>{card.info}</div>
            <h3 className={s.cardTitle}>{card.title}</h3>
            <div className={cl(s.cardNumber)}>{(index + 1).toString().padStart(2, '0')}</div>
            <div className={s.cardDescription}>{card.description}</div>
            <PlusBtn onClick={() => handlePlusBtnClick(card.url)} className={s.cardPlusBtn} />
          </li>
        ))}
      </ul>
      <div className={s.cover} />
    </section>
  );
};
