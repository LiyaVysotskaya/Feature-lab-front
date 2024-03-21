import cl from 'classnames';
import { FC } from 'react';
import s from './GridText.module.scss';

interface IProps {
  className?: string;
  text: string;
}

export const GridText: FC<IProps> = ({ className = '', text }) => {
  return <p className={cl(s.labText, className)}>{text}</p>;
};
