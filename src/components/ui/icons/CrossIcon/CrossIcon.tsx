import cl from 'classnames';
import { FC } from 'react';
import s from './CrossIcon.module.scss';

type IProps = {
  className?: string;
};

export const CrossIcon: FC<IProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.crossIcon, className)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M2 22.2129L22.5061 1.70679"
          stroke="#8096B1"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M2 1.21289L22.5061 21.719"
          stroke="#8096B1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
