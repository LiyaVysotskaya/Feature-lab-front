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
          cx="50%"
          cy="50%"
          r="48%"
          fill={status !== 'new' ? 'var(--dark-blue)' : 'var(--dark-blue-50)'}
        />
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          fill={status === 'completed' ? 'var(--dark-blue)' : 'white'}
        />
        <path
          d="M18.9939 29L12 21.4158L13.7485 19.5198L18.9939 25.2079L30.2515 13L32 14.8961L18.9939 29Z"
          fill={status === 'in_progress' ? 'var(--dark-blue)' : 'white'}
        />
      </svg>
      <div className={s.circle__gradient} />
    </div>
  );
};
