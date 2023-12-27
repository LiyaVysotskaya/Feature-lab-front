import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_GAMEDEV } from '../../../constants/constants';
import s from './SubMenuCarousel.module.scss';

export interface ISubMenuCarouselProps {
  className?: string;
}

export const SubMenuCarousel: FC<ISubMenuCarouselProps> = ({ className = '' }) => {
  return (
    <nav aria-label="Компетенции" className={cl(s.carousel, className)}>
      <ul className={cl(s.carouselList)}>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            Machine learning
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            Web-разработка
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            Управление данными
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            Разработка приложений
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            Мобильная разработка
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            Blockchain
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to={ROUTE_GAMEDEV} className={s.carouselLink}>
            Gamedev
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            ML&amp;AI
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            Данные
          </NavLink>
        </li>
        <li className={s.carouselItem}>
          <NavLink to="/" className={s.carouselLink}>
            КХД
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
