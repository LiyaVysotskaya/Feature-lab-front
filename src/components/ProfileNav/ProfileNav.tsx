import cn from 'classnames';
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProjectsQuery } from '../../api/queries';
import {
  ROUTE_PROFILE_DASHBOARD,
  ROUTE_PROFILE_DOCS,
  ROUTE_PROFILE_PROJECTS,
  ROUTE_PROFILE_SETTINGS,
} from '../../constants/routesConstants';
import { PopupConfirmLogout } from '../_popups/PopupConfirmLogout/PopupConfirmLogout';
import { CardholderIcon, FolderOpenIcon, GearSixIcon, SkipForwardIcon } from '../_ui/icons';
import { ProfileNavLink } from './ProfileNavLink/ProfileNavLink';
import { ProfileProjectsNav } from './ProfileProjectsNav/ProfileProjectsNav';
import s from './ProfileNav.module.scss';

export const ProfileNav: FC = () => {
  const [isPopupConfirmLogoutOpen, setPopupConfirmLogoutOpen] = useState(false);

  const location = useLocation();

  const { data: projects, isLoading } = useProjectsQuery();

  const closePopupConfirmLogout = () => {
    setPopupConfirmLogoutOpen(false);
  };

  if (isLoading || !projects) {
    return null;
  }

  const projectsPages = projects.map((project) => `${ROUTE_PROFILE_PROJECTS}/${project.id}`);
  const isProjectPage = projectsPages.includes(location.pathname);
  const PojectsCount = projectsPages.length;

  return (
    <>
      <nav aria-label="Меню личного кабинета" className={cn(s.nav)}>
        <ul className={cn(s.list)}>
          {PojectsCount === 1 && (
            <li className={cn(s.listItem)}>
              <ProfileNavLink
                to={projectsPages[0]}
                icon={<CardholderIcon />}
                isIconFilled={isProjectPage}
                text="Проект"
              />
            </li>
          )}

          {PojectsCount > 1 && (
            <li className={cn(s.listItem)}>
              <ProfileNavLink
                to={ROUTE_PROFILE_DASHBOARD}
                icon={<CardholderIcon />}
                isIconFilled={location.pathname === ROUTE_PROFILE_DASHBOARD || isProjectPage}
                text="Проекты"
              />
            </li>
          )}

          {PojectsCount > 1 && (
            <li className={cn(s.submenu)}>
              <ProfileProjectsNav projects={projects} />
            </li>
          )}

          <li className={cn(s.listItem)}>
            <ProfileNavLink to={ROUTE_PROFILE_DOCS} icon={<FolderOpenIcon />} text="Документы" />
          </li>

          <li className={cn(s.listItem)}>
            <ProfileNavLink to={ROUTE_PROFILE_SETTINGS} icon={<GearSixIcon />} text="Профиль" />
          </li>

          <li className={cn(s.listItem)}>
            <button
              type="button"
              className={cn(s.button)}
              onClick={() => setPopupConfirmLogoutOpen(true)}>
              <SkipForwardIcon /> <span className={cn(s.buttonText)}>Выход</span>
            </button>
          </li>
        </ul>
      </nav>
      <PopupConfirmLogout onClose={closePopupConfirmLogout} isOpen={isPopupConfirmLogoutOpen} />
    </>
  );
};
