import cl from 'classnames';
import { FC, useState } from 'react';
import s from './PlusIcon.module.scss';

type IProps = {
  className?: string;
};

export const PlusIcon: FC<IProps> = ({ className = '' }) => {
  const [isPressed, setIsPressed] = useState<boolean>();

  const handleClick = () => {
    const value = isPressed === undefined ? true : !isPressed;
    setIsPressed(value);
  };

  return (
    <div className={cl(className && className, s.plusIcon)}>
      <svg
        className={cl(isPressed && s.pressed, isPressed === false && s.unpressed)}
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        fill="none">
        <rect x="1.75" y="1.75" width="76.5" height="76.5" rx="38.25" fill="white" />
        <rect
          x="1.75"
          y="1.75"
          width="76.5"
          height="76.5"
          rx="38.25"
          stroke="#002D63"
          strokeWidth="3.5"
        />
        <line x1="13" y1="39.25" x2="68" y2="39.25" stroke="#002D63" strokeWidth="3.5" />
        <line x1="39.25" y1="67" x2="39.25" y2="12" stroke="#002D63" strokeWidth="3.5" />
      </svg>
    </div>
  );
};
