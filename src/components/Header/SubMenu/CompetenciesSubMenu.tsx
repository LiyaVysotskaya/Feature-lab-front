import cl from 'classnames';
import { useAtom } from 'jotai';
import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCompetenciesQuery } from '../../../api/queries';
import { isCompetenciesLoadingAtom } from '../../../atoms/isLoadingAtom';
import { ROUTE_COMPETENCIES } from '../../../constants/routesConstants';
import s from './SubMenu.module.scss';

type IProps = {
  className?: string;
  isVisible: boolean;
};

export const CompetenciesSubMenu: FC<IProps> = ({ className = '', isVisible }) => {
  const { data: competencies, isLoading: isDataLoading } = useCompetenciesQuery();
  const [isCompetenciesLoading, setIsLoading] = useAtom(isCompetenciesLoadingAtom);

  useEffect(() => {
    setIsLoading(isDataLoading);
    console.log('isCompetenciesLoading : ', isCompetenciesLoading);
  }, [isDataLoading, setIsLoading, isCompetenciesLoading]);

  if (isDataLoading || !competencies) {
    return null;
  }

  const sortedCompetencies = competencies.sort((a, b) => a.priority - b.priority);

  return (
    <nav
      aria-label="Компетенции"
      id="competenciesSubMenu"
      className={cl(
        s.submenu,
        {
          [s.submenuVisible]: isVisible,
        },
        className,
      )}>
      <ul className={cl(s.submenuList)}>
        {sortedCompetencies.map((item) => (
          <li className={s.submenuItem} key={uuidv4()}>
            <NavLink
              to={`${ROUTE_COMPETENCIES}/${item.slug}`}
              className={({ isActive }) => cl(s.submenuLink, { [s.submenuLinkActive]: isActive })}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
