import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCompetenciesQuery } from '../../../api/queries';
import { ROUTE_COMPETENCIES } from '../../../constants/routesConstants';
import s from './MobileSubMenu.module.scss';

interface Props {
  className?: string;
  isVisible: boolean;
}

export const CompetenciesMobSubMenu: FC<Props> = ({ className = '', isVisible }) => {
  const { data: competencies, isLoading } = useCompetenciesQuery();

  if (isLoading || !competencies) {
    return null;
  }

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
        {competencies.map((item) => (
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
