import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import s from './CompetenciesSection.module.scss';
import PlusBtn from './svg/plus.svg?svgr';
import { useCompetenciesQuery } from '../../api/queries';
import { ROUTE_COMPETENCIES } from '../../constants/routesConstants';

export interface ICompetenciesSectionProps {
  className?: string;
}

export const CompetenciesSection: FC<ICompetenciesSectionProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handlePlusBtnClick = (url: string) => {
    navigate(`${ROUTE_COMPETENCIES}/${url}`);
  };

  const { data: competencies, isLoading } = useCompetenciesQuery();

  if (isLoading || !competencies) {
    return null;
  }

  return (
    <section className={cl(s.competencies, className)}>
      <SectionTitle text="Компетенции" />
      <ul className={s.list}>
        {competencies.map((item, index) => (
          <li className={s.card} key={uuidv4()}>
            <div className={s.cardInfo}>{item.description}</div>
            <h3 className={s.cardTitle}>{item.name.toUpperCase()}</h3>
            <div className={cl(s.cardNumber)}>{(index + 1).toString().padStart(2, '0')}</div>
            <div className={s.cardFooter}>
              <div className={s.cardDescription}>{item.description}</div>

              <PlusBtn onClick={() => handlePlusBtnClick(item.slug)} className={s.cardPlusBtn} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
