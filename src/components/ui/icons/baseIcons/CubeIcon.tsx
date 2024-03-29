import cl from 'classnames';
import { FC } from 'react';
import s from './Icon.module.scss';
import { IconProps } from './Icon.types';

const pathProperties: React.SVGProps<SVGPathElement> = {
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const CubeIcon: FC<IconProps> = ({ filled = false, className = '' }) => {
  return (
    <div className={cl(s.icon, className && className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none">
        <path
          d="M28 22.1627V9.83766C27.999 9.65963 27.9512 9.48499 27.8612 9.33137C27.7712 9.17775 27.6423 9.05057 27.4875 8.96266L16.4875 2.77516C16.3393 2.68958 16.1711 2.64453 16 2.64453C15.8289 2.64453 15.6607 2.68958 15.5125 2.77516L4.5125 8.96266C4.35769 9.05057 4.22879 9.17775 4.13882 9.33137C4.04884 9.48499 4.00096 9.65963 4 9.83766V22.1627C4.00096 22.3407 4.04884 22.5153 4.13882 22.6689C4.22879 22.8226 4.35769 22.9497 4.5125 23.0377L15.5125 29.2252C15.6607 29.3107 15.8289 29.3558 16 29.3558C16.1711 29.3558 16.3393 29.3107 16.4875 29.2252L27.4875 23.0377C27.6423 22.9497 27.7712 22.8226 27.8612 22.6689C27.9512 22.5153 27.999 22.3407 28 22.1627V22.1627Z"
          stroke="#002D63"
          fill={filled ? '#002D63' : 'white'}
          {...pathProperties}
        />
        <path
          d="M27.8624 9.3252L16.1125 16.0002L4.13745 9.3252"
          fill={filled ? '#002D63' : ''}
          stroke={filled ? 'white' : '#002D63'}
          {...pathProperties}
        />
        <path
          d="M16.1125 16L16 29.35"
          fill={filled ? '#002D63' : ''}
          stroke={filled ? 'white' : '#002D63'}
          {...pathProperties}
        />
      </svg>
    </div>
  );
};
