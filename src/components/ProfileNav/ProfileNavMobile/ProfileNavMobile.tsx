import cl from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { projects } from '../../../_mockData/projectsMockData';
import {
  ROUTE_HOME,
  ROUTE_PROFILE,
  ROUTE_PROFILE_DASHBOARD,
  ROUTE_PROFILE_DOCS,
  ROUTE_PROFILE_SETTINGS,
} from '../../../constants/constants';
import { CardholderIcon, FolderOpenIcon, GearSixIcon, SkipForwardIcon } from '../../ui/icons';
import { ProfileNavLink } from '../ProfileNavLink/ProfileNavLink';
import s from './ProfileNavMobile.module.scss';

export const ProfileNavMobile: React.FC = () => {
  const location = useLocation();
  const productsPages = projects.map((project) => `${ROUTE_PROFILE}/${project.url}`);
  const isProductsPage = productsPages.includes(location.pathname);
  const hasMultipleProducts = productsPages.length > 1;
  const navigate = useNavigate();

  // if location path does not include profile page adress show nothing
  if (!location.pathname.includes(ROUTE_PROFILE)) {
    return null;
  }

  return (
    <nav aria-label="Меню личного кабинета" className={cl(s.nav)}>
      <ul className={cl(s.list)}>
        {!hasMultipleProducts && (
          <li className={cl(s.listItem)}>
            <ProfileNavLink
              to={productsPages[0]}
              icon={<CardholderIcon />}
              isIconFilled={isProductsPage}
              text="Проект"
            />
          </li>
        )}

        {hasMultipleProducts && (
          <li className={cl(s.listItem)}>
            <ProfileNavLink
              to={ROUTE_PROFILE_DASHBOARD}
              icon={<CardholderIcon />}
              isIconFilled={location.pathname === ROUTE_PROFILE_DASHBOARD || isProductsPage}
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
            onClick={() => {
              navigate(ROUTE_HOME);
            }}>
            <SkipForwardIcon /> <span className={cl(s.buttonText)}>Выход</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
