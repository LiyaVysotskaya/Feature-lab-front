import cl from 'classnames';
import { FC } from 'react';
import s from './Icon.module.scss';
import { IconProps } from './Icon.types';

const pathProperties: React.SVGProps<SVGPathElement> = {
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const SkipForwardIcon: FC<IconProps> = ({ filled = false, className = '' }) => {
  return (
    <svg
      className={cl(s.icon, className && className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 48 48"
      fill="none">
      <path
        d="M12.6 22.725L35.2125 8.88747C35.441 8.7465 35.7031 8.66944 35.9716 8.66433C36.24 8.65922 36.5049 8.72625 36.7386 8.85842C36.9722 8.99059 37.1662 9.18305 37.3001 9.41573C37.4341 9.6484 37.5031 9.91276 37.5 10.1812V37.8187C37.5031 38.0872 37.4341 38.3515 37.3001 38.5842C37.1662 38.8169 36.9722 39.0094 36.7386 39.1415C36.5049 39.2737 36.24 39.3407 35.9716 39.3356C35.7031 39.3305 35.441 39.2534 35.2125 39.1125L12.6 25.275C12.383 25.1404 12.2038 24.9527 12.0796 24.7296C11.9554 24.5065 11.8902 24.2553 11.8902 24C11.8902 23.7446 11.9554 23.4935 12.0796 23.2703C12.2038 23.0472 12.383 22.8595 12.6 22.725Z"
        fill={filled ? '#002D63' : ''}
        stroke="#002D63"
        {...pathProperties}
      />
      <path d="M10.5 7.5V40.5" stroke="#002D63" {...pathProperties} />
    </svg>
  );
};
