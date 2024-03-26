import cl from 'classnames';
import { FC } from 'react';
import { ProfileInfoSection } from '../../../components/ProfileInfoSection/ProfileInfoSection';
import s from './ProfileSettings.module.scss';

type IProps = {
  className?: string;
};

export const ProfileSettings: FC<IProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.settings, className)}>
      <ProfileInfoSection />
    </div>
  );
};
