import { FC } from 'react';
import cl from 'classnames';
import s from './CheckBoxIcon.module.scss';

export interface CheckBoxIconProps {
  className?: string;
  isChecked: boolean;
  color?: 'white' | 'blue';
}

export const CheckBoxIcon: FC<CheckBoxIconProps> = ({
  className = '',
  isChecked,
  color = 'blue',
}) => {
  return (
    <div className={cl(s.checkbox, { [s.checkbox_white]: color === 'white' }, className)}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="56" height="56" rx="2" strokeWidth="4" />
        {isChecked && <path d="M26 48.9707L47 12.5976" strokeWidth="4" strokeLinecap="round" />}
        {isChecked && <path d="M13 26L26 48.5167" strokeWidth="4" strokeLinecap="round" />}
      </svg>
    </div>
  );
};
