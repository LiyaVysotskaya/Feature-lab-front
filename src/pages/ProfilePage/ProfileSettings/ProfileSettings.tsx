import { FC } from 'react';
import cl from 'classnames';
import s from './ProfileSettings.module.scss';
import { ProfileInfoSection } from '../../../components/ProfileInfoSection/ProfileInfoSection';

interface IProfileSettingsProps {
  className?: string;
}

export const ProfileSettings: FC<IProfileSettingsProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.settings, className)}>
      <ProfileInfoSection />
    </div>
  );
};
