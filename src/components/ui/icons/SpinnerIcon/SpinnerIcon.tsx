import cl from 'classnames';
import { FC } from 'react';
import s from './SpinnerIcon.module.scss';

type IProps = {
  className?: string;
  theme?: 'white' | 'blue';
};

export const SpinnerIcon: FC<IProps> = ({ theme = 'blue', className = '' }) => {
  return (
    <div className={cl(s.spinnerIcon, className, theme && s[`spinnerIcon__${theme}`])}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none">
        <path d="M64 16V32" />
        <path d="M112 64H96" />
        <path d="M97.9499 97.9499L86.6499 86.6499" />
        <path d="M64 112V96" />
        <path d="M30.05 97.9499L41.35 86.6499" />
        <path d="M16 64H32" />
        <path d="M30.05 30.0498L41.35 41.3498" />
      </svg>
    </div>
  );
};
