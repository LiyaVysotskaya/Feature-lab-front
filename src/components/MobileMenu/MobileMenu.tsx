import cl from 'classnames';
import { useAtom } from 'jotai';
import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useUserProfileQuery } from '../../api/queries';
import { isAuthAtom } from '../../atoms/isAuthAtom';
import {
  ROUTE_COMPETENCIES,
  ROUTE_CONTACT,
  ROUTE_ED_TECH,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  ROUTE_PROFILE,
} from '../../constants/routesConstants';
import { ArrowIcon } from '../ui/icons';
import s from './MobileMenu.module.scss';
import { CompetenciesMobSubMenu } from './MobileSubMenu/CompetenciesMobSubMenu';
import { ProductsMobSubMenu } from './MobileSubMenu/ProductsMobSubMenu';

type Props = {
  isOpen: boolean;
};

export const MobileMenu: FC<Props> = ({ isOpen }) => {
  const [isCompetenciesVisible, setCompetenciesVisible] = useState(false);
  const [isProductsVisible, setProductsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuth] = useAtom(isAuthAtom);

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

  const handleCompetenciesBtnClick = () => {
    // On mobile there is no /competencies page.
    if (window.innerWidth > 768) {
      navigate(ROUTE_COMPETENCIES);
    } else {
      setCompetenciesVisible(!isCompetenciesVisible);
    }
  };

  const handleProductsBtnClick = () => {
    // On mobile there is no /competencies page.
    if (window.innerWidth <= 768) {
      setProductsVisible(!isProductsVisible);
    }
  };

  return (
    <nav
      aria-label="Основное меню"
      className={cl(s.nav, {
        [s.navMobileVisible]: isOpen,
      })}
      id="navHeaderMenu">
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
          <NavLink to={ROUTE_ED_TECH} className={({ isActive }) => (isActive ? s.linkActive : '')}>
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
          <NavLink to={ROUTE_CONTACT} className={({ isActive }) => (isActive ? s.linkActive : '')}>
            Контакты
          </NavLink>
        </li>

        <li className={cl(s.listItem, s.itemWithHover)}>
          <NavLink to={ROUTE_PROFILE} className={({ isActive }) => (isActive ? s.linkActive : '')}>
            {isAuth && userProfile
              ? `${userProfile.last_name} ${userProfile.first_name[0]}.`
              : 'Личный кабинет'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
