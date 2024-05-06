import cn from 'classnames';
import { FC } from 'react';
import s from './QuestionIcon.module.scss';

type IProps = {
  className?: string;
  onClick?: VoidFunction;
};

export const QuestionIcon: FC<IProps> = ({ className = '', onClick }) => {
  return (
    <div className={cn(s.questionIcon, className)} onClick={onClick}>
      <button className={cn(s.questionIcon__sign)} type="button">
        ?
      </button>
    </div>
  );
};
