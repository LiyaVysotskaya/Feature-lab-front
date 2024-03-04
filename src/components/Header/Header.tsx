import cl from 'classnames';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { competencies } from '../../_mockData/CompetenciesMockData';
import Logo from '../../assets/svg/logo.svg';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import { userProfileAtom } from '../../atoms/userProfileAtom';
import {
  ROUTE_COMPETENCIES,
  ROUTE_ED_TECH,
  ROUTE_HOME,
  ROUTE_PRODUCTS_DOCSHABLON,
  ROUTE_PROFILE,
} from '../../constants/constants';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { ProfileNavMobile } from '../ProfileNav/ProfileNavMobile/ProfileNavMobile';
import { HamburgerBtn } from './HamburgerBtn/HamburgerBtn';
import { HeaderSubMenu } from './HeaderSubMenu/HeaderSubMenu';
import Arrow from './svg/Icon-arrow.svg?svgr';
import s from './Header.module.scss';

export const Header: React.FC = () => {
  const { scrollDirection, currentScrollY } = useScrollDirection();
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // const { isAuth, userProfile } = useAuth();
  const [isAuth] = useAtom(isAuthAtom);
  const [userProfile] = useAtom(userProfileAtom);

  // hide subMenu with header when scrolling down
  useEffect(() => {
    if (isSubMenuVisible && scrollDirection === 'down') {
      setSubMenuVisible(false);
    }
  }, [scrollDirection, isSubMenuVisible]);

  // prevent the flickering transition effect of header nav when the viewport is resized
  useEffect(() => {
    const handleResize = () => {
      const headerMobileMenuEl = document.getElementById('navHeaderMenu');

      if (headerMobileMenuEl) {
        headerMobileMenuEl.classList.add(s.stopTransition);

        setTimeout(() => {
          headerMobileMenuEl.classList.remove(s.stopTransition);
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const competenciesPages = competencies.map((item) => item.url);
  competenciesPages.push(ROUTE_COMPETENCIES);

  const isCompetenciesPage = competenciesPages.includes(location.pathname);

  const handleCompetenciesBtnClick = () => {
    // On mobile, a double tap is needed to navigate to /competencies.
    // The first tap is the same as a hover on descktop; it will do nothing but open the sub-menu.
    // The second tap will navigate to /competencies.
    if (window.innerWidth > 768 || isSubMenuVisible) {
      navigate(ROUTE_COMPETENCIES);
    }
  };

  const handleBurgerBtnClick = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  return (
    <header
      className={cl(s.header, {
        [s.header_hidden]: !isNavMobileOpen && scrollDirection === 'down',
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
              [s.navMobileVisible]: isNavMobileOpen,
            })}
            id="navHeaderMenu">
            <ul className={cl(s.list)}>
              <li className={cl(s.listItem, s.linkToMainPage)}>
                <NavLink
                  to={ROUTE_HOME}
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  Главная
                </NavLink>
              </li>
              <li
                className={cl(s.listItem, s.listItemSubMenu)}
                onMouseEnter={() => setSubMenuVisible(true)}
                onMouseLeave={() => setSubMenuVisible(false)}>
                <button
                  type="button"
                  onClick={handleCompetenciesBtnClick}
                  className={cl(s.btnSubmenuOpen, {
                    [s.linkActive]: isCompetenciesPage,
                  })}>
                  Компетенции
                  <Arrow
                    className={cl(s.arrow, {
                      [s.arrow_rotate]: isSubMenuVisible,
                    })}
                  />
                </button>
                <HeaderSubMenu isVisible={isSubMenuVisible} />
              </li>
              <li className={cl(s.listItem)}>
                <NavLink
                  to={ROUTE_ED_TECH}
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  Лаборатория
                </NavLink>
              </li>
              <li className={cl(s.listItem)}>
                <NavLink
                  to={ROUTE_PRODUCTS_DOCSHABLON}
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  Продукты
                </NavLink>
              </li>
              <li className={cl(s.listItem)}>
                <NavLink
                  to="/some-route3"
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  Контакты
                </NavLink>
              </li>
              <li className={cl(s.listItem)}>
                <NavLink
                  to={ROUTE_PROFILE}
                  className={({ isActive }) => (isActive ? s.linkActive : '')}>
                  {isAuth && userProfile !== null
                    ? `${userProfile.last_name} ${userProfile.first_name[0]}.`
                    : 'Личный кабинет'}
                </NavLink>
              </li>
            </ul>
          </nav>

          <HamburgerBtn onClick={handleBurgerBtnClick} />
        </div>
        <ProfileNavMobile />
      </div>
    </header>
  );
};
