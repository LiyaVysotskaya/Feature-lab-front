import cl from 'classnames';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProjectsQuery } from '../../../api/queries';
import {
  ROUTE_PROFILE,
  ROUTE_PROFILE_DASHBOARD,
  ROUTE_PROFILE_DOCS,
  ROUTE_PROFILE_PROJECTS,
  ROUTE_PROFILE_SETTINGS,
} from '../../../constants/routesConstants';
import { PopupConfirmLogout } from '../../PopupConfirmLogout/PopupConfirmLogout';
import { CardholderIcon, FolderOpenIcon, GearSixIcon, SkipForwardIcon } from '../../ui/icons';
import { ProfileNavLink } from '../ProfileNavLink/ProfileNavLink';
import s from './ProfileNavMobile.module.scss';

export const ProfileNavMobile: React.FC = () => {
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

  // if location path does not include profile page adress show nothing
  if (!location.pathname.includes(ROUTE_PROFILE)) {
    return null;
  }

  return (
    <>
      <nav aria-label="Меню личного кабинета" className={cl(s.nav)}>
        <ul className={cl(s.list)}>
          {PojectsCount === 1 && (
            <li className={cl(s.listItem)}>
              <ProfileNavLink
                to={projectsPages[0]}
                icon={<CardholderIcon />}
                isIconFilled={isProjectPage}
                text="Проект"
              />
            </li>
          )}

          {PojectsCount > 1 && (
            <li className={cl(s.listItem)}>
              <ProfileNavLink
                to={ROUTE_PROFILE_DASHBOARD}
                icon={<CardholderIcon />}
                isIconFilled={location.pathname === ROUTE_PROFILE_DASHBOARD || isProjectPage}
                text="Проекты"
              />
            </li>
          )}

          <li className={cl(s.listItem)}>
            <ProfileNavLink to={ROUTE_PROFILE_DOCS} icon={<FolderOpenIcon />} text="Документы" />
          </li>

          <li className={cl(s.listItem)}>
            <ProfileNavLink to={ROUTE_PROFILE_SETTINGS} icon={<GearSixIcon />} text="Профиль" />
          </li>

          <li className={cl(s.listItem)}>
            <button
              type="button"
              className={cl(s.button)}
              onClick={() => setPopupConfirmLogoutOpen(true)}>
              <SkipForwardIcon /> <span className={cl(s.buttonText)}>Выход</span>
            </button>
          </li>
        </ul>
      </nav>
      <PopupConfirmLogout onClose={closePopupConfirmLogout} isOpen={isPopupConfirmLogoutOpen} />
    </>
  );
};
