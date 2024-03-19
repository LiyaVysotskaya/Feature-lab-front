import cl from 'classnames';
import { useAtom } from 'jotai';
import { FC, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useUserProfileQuery } from '../../../api/queries';
import { isAuthAtom } from '../../../atoms/isAuthAtom';
import {
  ROUTE_COMPETENCIES,
  ROUTE_CONTACT,
  ROUTE_ED_TECH,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  ROUTE_PROFILE,
} from '../../../constants/routesConstants';
import { HamburgerBtn } from '../../Header/HamburgerBtn/HamburgerBtn';
import { ArrowIcon } from '../../ui/icons';
import s from './MobileNav.module.scss';
import { CompetenciesMobSubMenu } from '../MobileSubMenu/CompetenciesMobSubMenu';
import { ProductsMobSubMenu } from '../MobileSubMenu/ProductsMobSubMenu';

type Props = {
  isOpen: boolean;
  onBurgerClick: () => void;
};

export const MobileNav: FC<Props> = ({ isOpen, onBurgerClick }) => {
  const [isCompetenciesVisible, setCompetenciesVisible] = useState(false);
  const [isProductsVisible, setProductsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const [isAuth] = useAtom(isAuthAtom);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { data: userProfile } = useUserProfileQuery();

  const isCompetenciesPage = location.pathname.includes(ROUTE_COMPETENCIES);
  const isProductsPage = location.pathname.includes(ROUTE_PRODUCTS);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(s.bodyNoScroll);
    } else {
      document.body.classList.remove(s.bodyNoScroll);
    }
  }, [isOpen]);

  // Add an event listener to the MobileMenu component to track the scroll position
  useEffect(() => {
    // Create a variable to hold the current value of mobileMenuRef.current
    const menuRef = mobileMenuRef.current;

    const handleScroll = () => {
      if (menuRef) {
        setScrollPosition(mobileMenuRef.current.scrollTop);
      }
    };

    if (isOpen && menuRef) {
      menuRef.addEventListener('scroll', handleScroll);
    }

    if (!isOpen && menuRef) {
      setScrollPosition(0);

      setTimeout(() => {
        menuRef.scroll({
          top: 0,
        });
      }, 200);
    }

    return () => {
      if (menuRef) {
        // Add a delay to setScrollPosition(0)

        // Use the variable menuRef in the cleanup function
        menuRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen, mobileMenuRef]);

  const handleCompetenciesBtnClick = () => {
    setCompetenciesVisible(!isCompetenciesVisible);
  };

  const handleProductsBtnClick = () => {
    setProductsVisible(!isProductsVisible);
  };

  return (
    <>
      <HamburgerBtn isChecked={isOpen} onClick={onBurgerClick} positionY={-scrollPosition} />

      <nav
        aria-label="Основное меню"
        className={cl(s.nav, {
          [s.navMobileVisible]: isOpen,
        })}
        ref={mobileMenuRef}>
        <ul className={cl(s.list)}>
          <li className={cl(s.listItem, s.itemWithHover)}>
            <NavLink to={ROUTE_HOME} className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Главная
            </NavLink>
          </li>

          <li className={cl(s.listItem, s.listItemSubMenu)}>
            <button
              type="button"
              onClick={handleCompetenciesBtnClick}
              className={cl(s.btnSubmenu, {
                [s.linkActive]: isCompetenciesPage,
              })}>
              Компетенции
              <ArrowIcon className={cl(s.arrow, { [s.arrow_rotate]: isCompetenciesVisible })} />
            </button>
            <CompetenciesMobSubMenu isVisible={isCompetenciesVisible} />
          </li>

          <li className={cl(s.listItem, s.itemWithHover)}>
            <NavLink
              to={ROUTE_ED_TECH}
              className={({ isActive }) => (isActive ? s.linkActive : '')}>
              Лаборатория
            </NavLink>
          </li>

          <li className={cl(s.listItem, s.listItemSubMenu)}>
            <button
              type="button"
              onClick={handleProductsBtnClick}
              className={cl(s.btnSubmenu, {
                [s.linkActive]: isProductsPage,
              })}>
              Продукты
              <ArrowIcon className={cl(s.arrow, { [s.arrow_rotate]: isProductsVisible })} />
            </button>
            <ProductsMobSubMenu isVisible={isProductsVisible} />
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
    </>
  );
};
