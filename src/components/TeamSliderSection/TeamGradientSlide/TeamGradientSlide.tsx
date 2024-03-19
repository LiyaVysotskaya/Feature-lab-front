import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import s from './TeamGradientSlide.module.scss';

interface IProps {
  className?: string;
}

export const TeamGradientSlide: FC<IProps> = ({ className = '' }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9, // When almost fully in view
    };

    const observer = new IntersectionObserver(([entry]) => {
      // Calculate horizontal visibility
      const horizontalVisibility = entry.intersectionRect.width / entry.boundingClientRect.width;

      // Check if horizontal visibility is greater than or equal to 90%
      const isInView = horizontalVisibility >= 0.9;

      // Update state
      setInView(isInView);
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
        <div className={s.radiant} />
      </div>
    </div>
  );
};
