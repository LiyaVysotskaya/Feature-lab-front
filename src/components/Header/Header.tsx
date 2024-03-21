import cl from 'classnames';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
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
import { useScrollDirection } from '../../hooks/useScrollDirection';
import MobileMenu from '../MobileMenu/MobileMenu';
import { ProfileNavMobile } from '../ProfileNav/ProfileNavMobile/ProfileNavMobile';
import s from './Header.module.scss';
import { CompetenciesSubMenu } from './SubMenu/CompetenciesSubMenu';
import { ProductsSubMenu } from './SubMenu/ProductsSubMenu';

export const Header: React.FC = () => {
  const { scrollDirection, currentScrollY } = useScrollDirection();
  const [isCompetenciesVisible, setCompetenciesVisible] = useState(false);
  const [isProductsVisible, setProductsVisible] = useState(false);
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

  return (
    <header
      className={cl(s.header, {
        [s.header_hidden]: scrollDirection === 'down',
      })}>
      <div
        className={cl(s.headerContainer, {
          [s.headerContainer_bg_white]: currentScrollY > 1,
        })}>
        <div className={cl(s.content)}>
          <Link to={ROUTE_HOME} className={s.logo}>
            <img title="Вернуться на главную" className={s.logo} src={Logo} alt="Logo" />
          </Link>

          <nav
            aria-label="Основное меню"
            className={cl(s.nav, {
              [s.navWithBorder]: currentScrollY < 3 && location.pathname !== ROUTE_HOME,
            })}>
            <ul className={cl(s.list)}>
              <li
                className={cl(s.listItem, s.listItemSubMenu)}
                onMouseEnter={handleCompetenciesOnMouseEnter}
                onMouseLeave={handleCompetenciesOnMouseLeave}>
                <NavLink
                  to={ROUTE_COMPETENCIES}
                  className={({ isActive }) => cl(s.link, { [s.linkActive]: isActive })}>
                  Компетенции
                </NavLink>

                <CompetenciesSubMenu isVisible={isCompetenciesVisible} />
              </li>

              <li className={cl(s.listItem)}>
                <NavLink
                  to={ROUTE_ED_TECH}
                  className={({ isActive }) => cl(s.link, { [s.linkActive]: isActive })}>
                  Лаборатория
                </NavLink>
              </li>

              <li
                className={cl(s.listItem, s.listItemSubMenu)}
                onMouseEnter={handleProductsOnMouseEnter}
                onMouseLeave={handleProductsOnMouseLeave}>
                <span
                  className={cl({
                    [s.linkActive]: isProductsPage,
                  })}>
                  Продукты
                </span>
                <ProductsSubMenu isVisible={isProductsVisible} />
              </li>

              <li className={cl(s.listItem)}>
                <NavLink
                  to={ROUTE_CONTACT}
                  className={({ isActive }) => cl(s.link, { [s.linkActive]: isActive })}>
                  Контакты
                </NavLink>
              </li>

              <li className={cl(s.listItem)}>
                <NavLink
                  to={ROUTE_PROFILE}
                  className={({ isActive }) => cl(s.link, { [s.linkActive]: isActive })}>
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
    </header>
  );
};
