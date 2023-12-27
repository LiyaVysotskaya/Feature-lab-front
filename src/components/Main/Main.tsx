import { FC } from 'react';
import s from './Main.module.scss';

interface IProps {
  children?: React.ReactNode;
}

const Main: FC<IProps> = ({ children = null }) => {
  return <main className={s.main}>{children}</main>;
};

export default Main;
