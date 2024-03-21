import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { TEmployee } from '../../../types/data';
import s from './TeamSlide.module.scss';

interface IProps {
  className?: string;
  person: TEmployee;
}

export const TeamSlide: FC<IProps> = ({ className = '', person }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '4000px 0px 4000px 0px',
      threshold: 0.9, // When almost fully in view
    };

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
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
    <div ref={ref} className={cl(s.card, className, { [s.colorful]: inView })}>
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
