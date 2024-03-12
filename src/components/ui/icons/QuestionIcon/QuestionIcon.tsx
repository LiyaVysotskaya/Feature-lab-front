import { FC } from 'react';
import cl from 'classnames';
import s from './QuestionIcon.module.scss';

export interface QuestionIconProps {
  className?: string;
  onClick?: VoidFunction;
}

export const QuestionIcon: FC<QuestionIconProps> = ({ className = '', onClick }) => {
  return (
    <div className={cl(s.questionIcon, className)} onClick={onClick}>
      <button className={cl(s.questionIcon__sign)} type="button">
        ?
      </button>
    </div>
  );
};
