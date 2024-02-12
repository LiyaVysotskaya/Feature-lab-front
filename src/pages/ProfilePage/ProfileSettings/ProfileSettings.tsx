import { FC } from 'react';
import cl from 'classnames';
import s from './ProfileSettings.module.scss';

interface IProfileSettingsProps {
  className?: string;
}

export const ProfileSettings: FC<IProfileSettingsProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.settings, className)}>
      <div />
    </div>
  );
};
