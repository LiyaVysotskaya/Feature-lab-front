import cl from 'classnames';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { projects } from '../../../_mockData/projectsMockData';
import { ArrowFatRightIcon, CardholderIcon } from '../../ui/icons';
import { ROUTE_PROFILE } from '../../../constants/constants';
import s from './ProfileProjectsNav.module.scss';

interface IProfileProjectsNavProps {
  className?: string;
}

export const ProfileProjectsNav: FC<IProfileProjectsNavProps> = ({ className = '' }) => {
  const location = useLocation();

  const productsPages = projects.map((item) => `${ROUTE_PROFILE}/${item.url}`);

  const isProductsPage = productsPages.includes(location.pathname);

  return (
    <nav aria-label="Проекты" className={cl(s.submenu, className)}>
      <div
        className={cl(s.submenuTitle, {
          [s.submenuLinkActive]: isProductsPage,
        })}>
        <CardholderIcon filled={isProductsPage} />
        Проекты
      </div>
      <ul className={cl(s.submenuList)}>
        {projects.map((item) => (
          <li className={s.submenuItem} key={uuidv4()}>
            <NavLink
              to={`${ROUTE_PROFILE}/${item.url}`}
              className={({ isActive }) => cl(s.submenuLink, { [s.submenuLinkActive]: isActive })}>
              {({ isActive }) => (
                <>
                  <ArrowFatRightIcon className={s.submenuIcon} filled={isActive} />
                  {item.projectName}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
