import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { TEmployee } from '../../../types/publicData';
import s from './TeamSlide.module.scss';

type IProps = {
  className?: string;
  person: TEmployee;
};

export const TeamSlide: FC<IProps> = ({ className = '', person }) => {
  const [isGrey, setIsGrey] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '4000px 0px 4000px 0px', // only triggers when elements hide horizontally, ignoring vertical hiding
      threshold: [0, 0.5, 0.9, 1], // on what visibilty % to trigger
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsGrey(entry.isIntersecting && entry.intersectionRatio < 0.9);
    }, options);
    const slideEl = ref.current;

    if (slideEl) {
      observer.observe(slideEl);
    }

    return () => {
      if (slideEl) {
        observer.unobserve(slideEl);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cl(s.card, className, { [s.grey]: isGrey })}>
      <div className={s.imgContainer}>
        <img src={person.photo_active} alt="Фото" className={cl(s.img)} />
        <img
          src={person.photo_inactive}
          alt="Фото"
          className={cl(s.img, s.img_inactive, { [s.hoverable]: !isGrey })}
        />
      </div>

      <h3 className={s.cardName}>{`${person.first_name} ${person.last_name}`}</h3>
      <div className={s.cardRole}>{person.positions[0].name}</div>
      <div className={s.cardDescription}>{person.description}</div>
    </div>
  );
};
