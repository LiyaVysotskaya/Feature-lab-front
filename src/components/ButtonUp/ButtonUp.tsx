import { FC, useEffect, useState } from 'react';
import cl from 'classnames';
import s from './ButtonUp.module.scss';
import { ArrowInCircleIcon } from '../ui/icons';

export const ButtonUp: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <button
        className={cl(s.buttonUp, { [s.buttonUpHidden]: !isVisible })}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }>
        <ArrowInCircleIcon />
      </button>
    </div>
  );
};

export default ButtonUp;
