import cl from 'classnames';
import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useCompetenciesQuery } from '../../../api/queries';
import { ROUTE_COMPETENCIES } from '../../../constants/routesConstants';
import s from './SubMenu.module.scss';

interface Props {
  className?: string;
  isVisible: boolean;
}

export const CompetenciesSubMenu: FC<Props> = ({ className = '', isVisible }) => {
  // prevent the flickering transition effect of submenu when the viewport is resized
  useEffect(() => {
    const handleResize = () => {
      const submenuEl = document.getElementById('competenciesSubMenu');

      if (submenuEl) {
        submenuEl.classList.add(s.stopTransition);

        setTimeout(() => {
          submenuEl.classList.remove(s.stopTransition);
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { data: competencies, isLoading } = useCompetenciesQuery();

  if (isLoading || !competencies) {
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
