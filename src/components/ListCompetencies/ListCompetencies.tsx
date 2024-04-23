import cl from 'classnames';
import { FC } from 'react';
import { useCompetenciesQuery } from '../../api/queries';
import { ListEl } from '../ListEl/ListEl';
import { ROUTE_COMPETENCIES } from '../../constants/routesConstants';
import s from './ListCompetencies.module.scss';

type IProps = {
  className?: string;
};

export const ListCompetencies: FC<IProps> = ({ className = '' }) => {
  const { data: competencies, isLoading } = useCompetenciesQuery();

  if (isLoading || !competencies) {
    return null;
  }

  const sortedCompetencies = competencies.sort((a, b) => a.priority - b.priority);

  return (
    <section className={cl(s.section, className)}>
      <ul className={s.list}>
        {sortedCompetencies.map((competency, index) => {
          return (
            <ListEl
              index={index}
              key={competency.id}
              title={competency.name}
              text={competency.description}
              desription={competency.description_on_main}
              link={`${ROUTE_COMPETENCIES}/${competency.slug}`}
            />
          );
        })}
      </ul>
    </section>
  );
};
