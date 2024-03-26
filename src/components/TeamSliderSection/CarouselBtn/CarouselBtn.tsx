import { FC } from 'react';
import cl from 'classnames';
import { ArrowInCircleIcon } from '../../ui/icons';
import s from './CarouselBtn.module.scss';

type IProps = {
  onClick?: () => void;
  customId?: string;
  direction?: 'left' | 'right';
};

export const CarouselBtn: FC<IProps> = ({
  onClick = () => {},
  customId = '',
  direction = 'right',
}) => {
  if (customId) {
    return <button onClick={onClick} type="button" id={customId} className={cl(s.isHidden)} />;
  }

  if (!direction) return null;

  const onBtnClick = () => {
    const element = document.getElementById(
      direction === 'left' ? 'TeamSliderBtnLeft' : 'TeamSliderBtnRight',
    );
    if (element) {
      element.click();
      onClick();
    }
    onClick();
  };

  return (
    <button onClick={onBtnClick} type="button" id={customId}>
      <ArrowInCircleIcon
        reverse={direction === 'left'}
        className={cl(s.btn, {
          [s.btnLeft]: direction === 'left',
          [s.btnRight]: direction === 'right',
        })}
      />
    </button>
  );
};
