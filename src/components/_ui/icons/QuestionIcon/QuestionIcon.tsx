import cn from 'classnames';
import { FC } from 'react';
import s from './QuestionIcon.module.scss';

type IProps = {
  className?: string;
  onClick?: VoidFunction;
};

export const QuestionIcon: FC<IProps> = ({ className = '', onClick }) => {
  return (
    <button className={cn(s.questionIcon, className)} onClick={onClick} type="button">
      <div className={cn(s.questionIcon__sign)}>?</div>
    </button>
  );
};
