import cl from 'classnames';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
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
import MobileMenuPortal from '../MobileMenuPortal/MobileMenuPortal';
import { ProfileNavMobile } from '../ProfileNav/ProfileNavMobile/ProfileNavMobile';
import s from './Header.module.scss';
import { CompetenciesSubMenu } from './SubMenu/CompetenciesSubMenu';
import { ProductsSubMenu } from './SubMenu/ProductsSubMenu';

export const Header: React.FC = () => {
  const { scrollDirection, currentScrollY } = useScrollDirection();
  const [isCompetenciesVisible, setCompetenciesVisible] = useState(false);
  const [isProductsVisible, setProductsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuth] = useAtom(isAuthAtom);

  const { data: userProfile } = useUserProfileQuery();

  // hide subMenu with header when scrolling down
  useEffect(() => {
    if ((isCompetenciesVisible || isProductsVisible) && scrollDirection === 'down') {
      setCompetenciesVisible(false);
      setProductsVisible(false);
    }
  }, [scrollDirection, isCompetenciesVisible, isProductsVisible]);

  const isCompetenciesPage = location.pathname.includes(ROUTE_COMPETENCIES);
  const isProductsPage = location.pathname.includes(ROUTE_PRODUCTS);

  const handleCompetenciesBtnClick = () => {
    navigate(ROUTE_COMPETENCIES);
  };

  const handleProductsBtnClick = () => {
    setProductsVisible(!isProductsVisible);
  };

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
                <button
                  type="button"
                  onClick={handleCompetenciesBtnClick}
                  className={cl(s.btnSubmenu, {
                    [s.linkActive]: isCompetenciesPage,
                  })}>
                  Компетенции
                </button>
                <CompetenciesSubMenu isVisible={isCompetenciesVisible} />
              </li>

              <li className={cl(s.listItem, s.itemWithHover)}>
                <NavLink
                  to={ROUTE_ED_TECH}
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  Лаборатория
                </NavLink>
              </li>

              <li
                className={cl(s.listItem, s.listItemSubMenu)}
                onMouseEnter={handleProductsOnMouseEnter}
                onMouseLeave={handleProductsOnMouseLeave}>
                <button
                  type="button"
                  onClick={handleProductsBtnClick}
                  className={cl(s.btnSubmenu, {
                    [s.linkActive]: isProductsPage,
                  })}>
                  Продукты
                </button>
                <ProductsSubMenu isVisible={isProductsVisible} />
              </li>

              <li className={cl(s.listItem, s.itemWithHover)}>
                <NavLink
                  to={ROUTE_CONTACT}
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  Контакты
                </NavLink>
              </li>

              <li className={cl(s.listItem, s.itemWithHover)}>
                <NavLink
                  to={ROUTE_PROFILE}
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  {isAuth && userProfile
                    ? `${userProfile.last_name} ${userProfile.first_name[0]}.`
                    : 'Личный кабинет'}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <ProfileNavMobile />
        <MobileMenuPortal />
      </div>
    </header>
  );
};
