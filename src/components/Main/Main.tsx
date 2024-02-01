import cl from 'classnames';
import { FC } from 'react';
import s from './Main.module.scss';

interface IMainProps {
  children?: React.ReactNode;
  className?: string;
}

const Main: FC<IMainProps> = ({ children = null, className = '' }) => {
  return <main className={cl(s.main, className)}>{children}</main>;
};

export default Main;
