import { FC } from 'react';
import cl from 'classnames';
import s from './Socials.module.scss';

export interface TelegramIconProps {
  className?: string;
}

export const LinkIcon: FC<TelegramIconProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.icon, className && className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none">
        <rect width="80" height="80" rx="40" fill="#002D63" />
        <path
          d="M56 41.4888V52.5202H49.5426V42.1614C49.5426 39.6054 48.6009 37.8565 46.3139 37.8565C44.565 37.8565 43.4888 39.0673 43.0852 40.1435C42.9507 40.5471 42.8161 41.0852 42.8161 41.7578V52.5202H36.3587C36.3587 52.5202 36.4933 35.0314 36.3587 33.2825H42.8161V35.9731C43.6233 34.6278 45.2377 32.7444 48.6009 32.7444C52.7713 32.7444 56 35.5695 56 41.4888ZM29.6323 24C27.4798 24 26 25.4798 26 27.3632C26 29.2466 27.3453 30.7265 29.4978 30.7265C31.7848 30.7265 33.13 29.2466 33.13 27.3632C33.2646 25.3453 31.9193 24 29.6323 24ZM26.4036 52.5202H32.861V33.2825H26.4036V52.5202Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
