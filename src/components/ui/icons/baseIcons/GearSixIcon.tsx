import cl from 'classnames';
import { FC } from 'react';
import s from './Icon.module.scss';
import { IconProps } from './Icon.types';

const pathProperties: React.SVGProps<SVGPathElement> = {
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const GearSixIcon: FC<IconProps> = ({ filled = false, className = '' }) => {
  return (
    <svg
      className={cl(s.icon, className && className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none">
      <path
        d="M24.675 10.0873C24.976 10.5181 25.2394 10.974 25.4625 11.4498L28.7 13.2498C29.1043 15.0604 29.1086 16.9374 28.7125 18.7498L25.4625 20.5498C25.2394 21.0256 24.976 21.4815 24.675 21.9123L24.7375 25.6248C23.3655 26.8751 21.7416 27.8171 19.975 28.3873L16.7875 26.4748C16.2632 26.5123 15.7369 26.5123 15.2125 26.4748L12.0375 28.3748C10.2654 27.8149 8.63615 26.8766 7.26254 25.6248L7.32504 21.9248C7.02662 21.488 6.7633 21.0282 6.53754 20.5498L3.30004 18.7498C2.89578 16.9392 2.89152 15.0622 3.28754 13.2498L6.53754 11.4498C6.76064 10.974 7.0241 10.5181 7.32504 10.0873L7.26254 6.3748C8.6346 5.12451 10.2585 4.18256 12.025 3.6123L15.2125 5.5248C15.7369 5.4873 16.2632 5.4873 16.7875 5.5248L19.9625 3.6248C21.7347 4.18467 23.3639 5.123 24.7375 6.3748L24.675 10.0873Z"
        stroke="#002D63"
        fill={filled ? '#002D63' : ''}
        {...pathProperties}
      />
      <path
        d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
        fill={filled ? '#002D63' : ''}
        stroke={filled ? 'white' : '#002D63'}
        {...pathProperties}
      />
    </svg>
  );
};
