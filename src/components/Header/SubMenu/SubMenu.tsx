import cl from 'classnames';
import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { competencies } from '../../../_mockData/CompetenciesMockData';
import s from './SubMenu.module.scss';

export interface ISubMenuProps {
  className?: string;
  isVisible: boolean;
}

export const SubMenu: FC<ISubMenuProps> = ({ className = '', isVisible }) => {
  // prevent the flickering transition effect of submenu when the viewport is resized
  useEffect(() => {
    const handleResize = () => {
      const submenuEl = document.getElementById('navSubmenu');

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

  return (
    <nav
      aria-label="Компетенции"
      id="navSubmenu"
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
              to={item.url}
              className={({ isActive }) => cl(s.submenuLink, { [s.submenuLinkActive]: isActive })}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
