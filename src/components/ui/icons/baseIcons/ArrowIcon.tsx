import { FC } from 'react';
import cl from 'classnames';
import { IconProps } from './Icon.types';
import s from './Icon.module.scss';

export const ArrowIcon: FC<IconProps> = ({ filled = false, reverse, className = '' }) => {
  return (
    <div className={cl(s.icon, reverse && s.icon__reverse, className && className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <path
          d="M18.3951 12.6375L7.08887 19.5563C6.97462 19.6267 6.84356 19.6653 6.70934 19.6678C6.57513 19.6704 6.44269 19.6369 6.32585 19.5708C6.20901 19.5047 6.11204 19.4085 6.04507 19.2921C5.9781 19.1758 5.94358 19.0436 5.94512 18.9094L5.94512 5.09064C5.94358 4.95641 5.9781 4.82423 6.04507 4.70789C6.11204 4.59156 6.20901 4.49532 6.32585 4.42924C6.44269 4.36316 6.57513 4.32964 6.70934 4.3322C6.84356 4.33475 6.97462 4.37328 7.08887 4.44376L18.3951 11.3625C18.5036 11.4298 18.5932 11.5236 18.6553 11.6352C18.7174 11.7468 18.75 11.8723 18.75 12C18.75 12.1277 18.7174 12.2533 18.6553 12.3648C18.5932 12.4764 18.5036 12.5703 18.3951 12.6375Z"
          fill={filled ? '#002D63' : ''}
          stroke="#002D63"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
