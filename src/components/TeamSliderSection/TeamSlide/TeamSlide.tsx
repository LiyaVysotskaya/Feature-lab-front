import cl from 'classnames';
import { FC } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { TEmployee } from '../../../types/publicData';
import s from './TeamSlide.module.scss';

type IProps = {
  className?: string;
  person: TEmployee;
};

export const TeamSlide: FC<IProps> = ({ className = '', person }) => {
  return (
    <div className={cl(s.card, className)}>
      <div className={s.imgContainer}>
        <img src={person.photo_active} alt="Фото" className={cl(s.img)} />
        <img src={person.photo_inactive} alt="Фото" className={cl(s.img, s.img_inactive)} />
      </div>

      <h3 className={s.cardName}>{`${person.first_name} ${person.last_name}`}</h3>
      <div className={s.cardRole}>{person.positions[0].name}</div>
      <div className={s.cardDescription}>{person.description}</div>
    </div>
  );
};
