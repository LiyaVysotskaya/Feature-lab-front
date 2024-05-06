import cn from 'classnames';
import { FC } from 'react';
import s from './LabText.module.scss';

type IProps = {
  className?: string;
  text: string;
};

export const LabText: FC<IProps> = ({ className = '', text }) => {
  return <p className={cn(s.labText, className)}>{text}</p>;
};
