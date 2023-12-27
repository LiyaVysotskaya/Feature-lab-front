import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_GAMEDEV } from '../../../constants/constants';
import s from './SubMenu.module.scss';

export interface ISubMenuProps {
  className?: string;
  isVisible: boolean;
  isCompetenciesPage?: boolean;
}

export const SubMenu: FC<ISubMenuProps> = ({
  className = '',
  isCompetenciesPage = false,
  isVisible,
}) => {
  return (
    <nav
      aria-label="Компетенции"
      className={cl(
        s.submenu,
        {
          [s.submenu_visible]: isVisible,
          [s.submenu_hidden]: isCompetenciesPage,
        },
        className,
      )}>
      <ul className={cl(s.submenuList)}>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Machine learning
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Web-разработка
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Управление данными
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Разработка приложений
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Мобильная разработка
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Blockchain
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to={ROUTE_GAMEDEV} className={s.submenuLink}>
            Gamedev
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            ML&amp;AI
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            Данные
          </NavLink>
        </li>
        <li className={s.submenuItem}>
          <NavLink to="/" className={s.submenuLink}>
            КХД
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
