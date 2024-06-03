import cn from 'classnames';
import { FC } from 'react';
import ClosedEyeIcon from '../../../../assets/svg/Icon-EyeClosed.svg?svgr';
import s from './EyeIcon.module.scss';

type IProps = {
  className?: string;
  onClick?: VoidFunction;
};

export const EyeIcon: FC<IProps> = ({ className = '', onClick }) => {
  return (
    <button className={cn(s.questionIcon, className)} onClick={onClick} type="button">
      <ClosedEyeIcon className={cn(s.questionIcon__sign)} />
    </button>
  );
};
