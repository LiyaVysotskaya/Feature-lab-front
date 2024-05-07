import { FC } from 'react';
import cn from 'classnames';
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
    return <button onClick={onClick} type="button" id={customId} className={cn(s.isHidden)} />;
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
    <>
      <button onClick={onBtnClick} type="button" id={customId}>
        <ArrowInCircleIcon
          reverse={direction === 'left'}
          className={cn(s.btn, {
            [s.btnLeft]: direction === 'left',
            [s.btnRight]: direction === 'right',
          })}
        />
      </button>
      <div
        className={cn(s.whiteOverlay, {
          [s.whiteOverlay_left]: direction === 'left',
          [s.whiteOverlay_right]: direction === 'right',
        })}
      />
    </>
  );
};
