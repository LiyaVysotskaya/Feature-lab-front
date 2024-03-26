import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useLocation } from 'react-router-dom';
import s from './TeamGradientSlide.module.scss';

type IProps = {
  className?: string;
};

export const TeamGradientSlide: FC<IProps> = ({ className = '' }) => {
  const [isGrey, setIsGrey] = useState(false);
  const location = useLocation();
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
  }, [location]);

  return (
    <div ref={ref} className={cl(s.card, className, { [s.grey]: isGrey })}>
      <div className={s.imgContainer}>
        <div className={s.radiant} />
      </div>
    </div>
  );
};
