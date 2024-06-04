import cn from 'classnames';
import { FC } from 'react';
import s from './QuestionIcon.module.scss';

type IProps = {
  className?: string;
  onClick?: VoidFunction;
  isRed?: boolean;
};

export const QuestionIcon: FC<IProps> = ({ className = '', isRed = false, onClick = () => {} }) => {
  return (
    <button
      className={cn(s.questionIcon, { [s.questionIcon_error]: isRed }, className)}
      onClick={onClick}
      type="button">
      <div className={cn(s.questionIcon__sign, { [s.questionIcon_error]: isRed })}>?</div>
    </button>
  );
};
