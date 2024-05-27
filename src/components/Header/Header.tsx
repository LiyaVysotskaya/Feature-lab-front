import cn from 'classnames';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useUserProfileQuery } from '../../api/queries';
import Logo from '../../assets/svg/logo.svg';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import {
  ROUTE_COMPETENCIES,
  ROUTE_CONTACT,
  ROUTE_ED_TECH,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  ROUTE_PROFILE,
} from '../../constants/routesConstants';
import { useScrollDirection } from '../../utils/hooks/useScrollDirection';
import MobileMenu from '../MobileMenu/MobileMenu';
import { ProfileNavMobile } from '../ProfileNav/ProfileNavMobile/ProfileNavMobile';
import { ProfileTabsNav } from '../ProfileNav/ProfileTabsNav/ProfileTabsNav';
import { CompetenciesSubMenu } from './SubMenu/CompetenciesSubMenu';
import { ProductsSubMenu } from './SubMenu/ProductsSubMenu';
import s from './Header.module.scss';

export const Header: React.FC = () => {
  const { scrollDirection, currentScrollY } = useScrollDirection();
  const [isCompetenciesVisible, setCompetenciesVisible] = useState(false);
  const [isProductsVisible, setProductsVisible] = useState(false);
  const isLargeScreen = useMediaQuery({ minWidth: 1281 });
  const location = useLocation();
  const [isAuth] = useAtom(isAuthAtom);

  const { data: userProfile } = useUserProfileQuery();

  // hide subMenu with header when scrolling down
  useEffect(() => {
    if ((isCompetenciesVisible || isProductsVisible) && scrollDirection === 'down') {
      setCompetenciesVisible(false);
      setProductsVisible(false);
    }
  }, [scrollDirection, isCompetenciesVisible, isProductsVisible]);

  const isProductsPage = location.pathname.includes(ROUTE_PRODUCTS);

  const handleCompetenciesOnMouseEnter = () => {
    setCompetenciesVisible(true);
  };

  const handleCompetenciesOnMouseLeave = () => {
    setCompetenciesVisible(false);
  };

  const handleProductsOnMouseEnter = () => {
    setProductsVisible(true);
  };

  const handleProductsOnMouseLeave = () => {
    setProductsVisible(false);
  };

  const isHomePage = location.pathname === ROUTE_HOME;
  const isProfilePage = location.pathname.includes(ROUTE_PROFILE);
  const isNavWithBorder =
    (isProfilePage && !isLargeScreen) ||
    (currentScrollY < 3 && isProfilePage && isLargeScreen) ||
    (currentScrollY < 3 && !isHomePage);

  return (
    <header
      className={cn(s.header, {
        [s.header_hidden]: scrollDirection === 'down',
        [s.header_bg_white]: !isHomePage,
      })}>
      <div
        className={cn(s.headerContainer, {
          [s.headerContainer_bg_white]: currentScrollY > 1,
          [s.headerContainer_with_shadow]: currentScrollY > 1,
        })}>
        <div className={cn(s.content)}>
          <Link to={ROUTE_HOME} className={s.logo}>
            <img title="Вернуться на главную" className={s.logo} src={Logo} alt="Logo" />
          </Link>

          <nav
            aria-label="Основное меню"
            className={cn(s.nav, {
              [s.navWithBorder]: isNavWithBorder,
            })}>
            <ul className={cn(s.list)}>
              <li
                className={cn(s.listItem, s.listItemSubMenu)}
                onMouseEnter={handleCompetenciesOnMouseEnter}
                onMouseLeave={handleCompetenciesOnMouseLeave}>
                <NavLink
                  to={ROUTE_COMPETENCIES}
                  className={({ isActive }) => cn(s.link, { [s.linkActive]: isActive })}>
                  Компетенции
                </NavLink>

                <CompetenciesSubMenu isVisible={isCompetenciesVisible} />
              </li>

              <li className={cn(s.listItem)}>
                <NavLink
                  to={ROUTE_ED_TECH}
                  className={({ isActive }) => cn(s.link, { [s.linkActive]: isActive })}>
                  Лаборатория
                </NavLink>
              </li>

              <li
                className={cn(s.listItem, s.listItemSubMenu)}
                onMouseEnter={handleProductsOnMouseEnter}
                onMouseLeave={handleProductsOnMouseLeave}>
                <NavLink
                  to={ROUTE_PRODUCTS}
                  className={cn(s.link, {
                    [s.linkActive]: isProductsPage,
                  })}>
                  Продукты
                </NavLink>

                <ProductsSubMenu isVisible={isProductsVisible} />
              </li>

              <li className={cn(s.listItem)}>
                <NavLink
                  to={ROUTE_CONTACT}
                  className={({ isActive }) => cn(s.link, { [s.linkActive]: isActive })}>
                  Контакты
                </NavLink>
              </li>

              <li className={cn(s.listItem)}>
                <NavLink
                  to={ROUTE_PROFILE}
                  className={({ isActive }) => cn(s.link, { [s.linkActive]: isActive })}>
                  {isAuth && userProfile
                    ? `${userProfile.last_name} ${userProfile.first_name[0]}.`
                    : 'Личный кабинет'}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <ProfileNavMobile />
        <MobileMenu />
      </div>
      <ProfileTabsNav />
    </header>
  );
};
