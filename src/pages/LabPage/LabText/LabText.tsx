import cl from 'classnames';
import { FC } from 'react';
import s from './LabText.module.scss';

interface ILabTextProps {
  className?: string;
  text: string;
}

export const LabText: FC<ILabTextProps> = ({ className = '', text }) => {
  return <p className={cl(s.labText, className)}>{text}</p>;
};
