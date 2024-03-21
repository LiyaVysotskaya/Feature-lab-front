import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useLocation } from 'react-router-dom';
import s from './TeamGradientSlide.module.scss';

interface IProps {
  className?: string;
}

export const TeamGradientSlide: FC<IProps> = ({ className = '' }) => {
  const [inView, setInView] = useState(false);
  const location = useLocation();
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
  }, [location]);

  return (
    <div ref={ref} className={cl(s.card, className, { [s.colorful]: inView })}>
      <div className={s.imgContainer}>
        <div className={s.radiant} />
      </div>
    </div>
  );
};
