import cl from 'classnames';
import { FC } from 'react';
import { useCompetenciesQuery } from '../../../api/queries';
import { GridCard } from '../GridCard/GridCard';
import { GridText } from '../GridText/GridText';
import s from './GridSection.module.scss';

interface IProps {
  className?: string;
}

export const GridSection: FC<IProps> = ({ className = '' }) => {
  const { data: competencies, isLoading } = useCompetenciesQuery();

  if (isLoading || !competencies) {
    return null;
  }

  const sortedCompetencies = competencies.sort((a, b) => a.priority - b.priority);

  return (
    <section className={cl(s.section, className)}>
      <h2 className={cl(s.sectionTitle, s.gridArea_title)}>
        Персональные решения для достижения ваших целей
      </h2>
      {sortedCompetencies.map((competency, index) => (
        <GridCard
          key={competency.id}
          title={competency.name}
          text={competency.description}
          className={s[`gridArea_${index}`]}
        />
      ))}

      <GridText
        text="Какой-нибудь слоган/начало истории/несколько слов о том, какие мы крутые и насколько необходимы просматривающему страницу. 120-150 знаков."
        className={s.gridArea_text_1}
      />

      <GridText
        text={`Здесь может быть прям история какая-то, на 3-4 абзаца, общее количество знаков около 400-450.\n\nЧто-нибудь нормальное и приземленное, без умных слов - их и так очень много вокруг, можно на контрасте сыграть.`}
        className={s.gridArea_text_2}
      />
    </section>
  );
};
