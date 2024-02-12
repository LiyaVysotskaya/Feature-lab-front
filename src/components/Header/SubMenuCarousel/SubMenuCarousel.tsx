import cl from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { competencies } from '../../../_mockData/CompetenciesMockData';
import s from './SubMenuCarousel.module.scss';

export interface ISubMenuCarouselProps {
  className?: string;
}

export const SubMenuCarousel: FC<ISubMenuCarouselProps> = ({ className = '' }) => {
  return (
    <nav aria-label="Компетенции" className={cl(s.carousel, className)}>
      <ul className={cl(s.carouselList)}>
        {competencies.map((item) => (
          <li className={s.carouselItem} key={uuidv4()}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                cl(s.carouselLink, { [s.carouselLinkActive]: isActive })
              }>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
