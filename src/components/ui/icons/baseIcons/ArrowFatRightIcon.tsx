import cl from 'classnames';
import { FC } from 'react';
import s from './Icon.module.scss';
import { IconProps } from './Icon.types';

export const ArrowFatRightIcon: FC<IconProps> = ({ filled = false, className = '' }) => {
  return (
    <div className={cl(s.icon, s.icon__768, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none">
        <path
          d="M17 4L29 16L17 28V22H6C5.73478 22 5.48043 21.8946 5.29289 21.7071C5.10536 21.5196 5 21.2652 5 21V11C5 10.7348 5.10536 10.4804 5.29289 10.2929C5.48043 10.1054 5.73478 10 6 10H17V4Z"
          fill={filled ? '#002D63' : ''}
          stroke="#002D63"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
