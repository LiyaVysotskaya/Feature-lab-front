import cl from 'classnames';
import { FC } from 'react';
import s from './Main.module.scss';

type IProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Main: FC<IProps> = ({ children = null, className = '' }) => {
  return <main className={cl(s.main, className)}>{children}</main>;
};
