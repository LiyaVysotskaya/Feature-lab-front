import { FC } from 'react';
import cl from 'classnames';
import s from './ProfileDashboard.module.scss';

interface IProfileDashboardProps {
  className?: string;
}

export const ProfileDashboard: FC<IProfileDashboardProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.dashboard, className)}>
      <div className={cl(s.card)}>1</div>
      <div className={cl(s.card)}>2</div>
      <div className={cl(s.card)}>3</div>
      <div className={cl(s.card)}>4</div>
    </div>
  );
};
