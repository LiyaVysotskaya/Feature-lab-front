import cn from 'classnames';
import { FC } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { API_BASE_URL } from '../../../../constants/externalLinks';
import { TEmployee } from '../../../../types/publicData';
import s from './TeamSlide.module.scss';

type IProps = {
  className?: string;
  person: TEmployee;
};

export const TeamSlide: FC<IProps> = ({ className = '', person }) => {
  const photoActiveLink = `${API_BASE_URL.slice(0, -1)}${person.photo_active}`;
  const photoInactiveLink = `${API_BASE_URL.slice(0, -1)}${person.photo_inactive}`;

  return (
    <div className={cn(s.card, className)}>
      <div className={s.imgContainer}>
        <img src={photoActiveLink} alt="Фото" className={cn(s.img)} />
        <img src={photoInactiveLink} alt="Фото" className={cn(s.img, s.img_inactive)} />
      </div>

      <h3 className={s.cardName}>{`${person.first_name} ${person.last_name}`}</h3>
      <div className={s.cardRole}>{person.positions[0].name}</div>
      <div className={s.cardDescription}>{person.description}</div>
    </div>
  );
};
