import { FC, HTMLAttributes } from 'react';
import cl from 'classnames';
import s from './ArrowInCircleIcon.module.scss';

interface ArrowInCircleIconProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
}

export const ArrowInCircleIcon: FC<ArrowInCircleIconProps> = ({
  className = '',
  reverse = false,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      role="presentation"
      className={cl(s.ArrowInCircleIcon, reverse && s.reverse, className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="none">
        <rect x="1" y="1" width="138" height="138" rx="69" stroke="#002D63" strokeWidth="2" />
        <path d="M120 70L100 58.453V81.547L120 70ZM102 68L20 68V72L102 72V68Z" fill="#002D63" />
      </svg>
    </div>
  );
};
