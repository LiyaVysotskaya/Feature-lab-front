import cl from 'classnames';
import { FC } from 'react';
import s from './LabText.module.scss';

type IProps = {
  className?: string;
  text: string;
};

export const LabText: FC<IProps> = ({ className = '', text }) => {
  return <p className={cl(s.labText, className)}>{text}</p>;
};
