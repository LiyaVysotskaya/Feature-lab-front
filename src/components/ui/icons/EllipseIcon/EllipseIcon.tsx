import { FC } from 'react';
import cl from 'classnames';
import s from './Ellipse.module.scss';

type EllipseIconProps = {
  status: 'completed' | 'in_progress' | 'new';
  className?: string;
};

export const EllipseIcon: FC<EllipseIconProps> = ({ className = '', status }) => {
  return (
    <div className={cl(s.circle, className)}>
      <svg
        className={s.circle__svg}
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none">
        <circle
          cx="21"
          cy="21"
          r="19"
          fill={status === 'completed' ? '#002D63' : 'white'}
          stroke={status !== 'new' ? '#002D63' : '#8096B1'}
          strokeWidth="4"
        />
        <path
          d="M18.9939 29L12 21.4158L13.7485 19.5198L18.9939 25.2079L30.2515 13L32 14.8961L18.9939 29Z"
          fill={status === 'in_progress' ? '#002D63' : 'white'}
        />
      </svg>
      <div className={s.circle__gradient} />
    </div>
  );
};
