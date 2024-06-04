import cn from 'classnames';
import { FC } from 'react';
import ClosedEyeIcon from '../../../../assets/svg/Icon-EyeClosed.svg?svgr';
import s from './EyeIcon.module.scss';

type IProps = {
  className?: string;
  onClick?: VoidFunction;
  isRed?: boolean;
};

export const EyeIcon: FC<IProps> = ({ className = '', isRed = false, onClick = () => {} }) => {
  return (
    <button
      className={cn(s.eyeIcon, { [s.eyeIcon_error]: isRed }, className)}
      onClick={onClick}
      type="button">
      <ClosedEyeIcon className={cn(s.eyeIcon__sign, { [s.eyeIcon_error]: isRed })} />
    </button>
  );
};
