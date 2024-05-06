import cn from 'classnames';
import { FC } from 'react';
import { ProfileInfoSection } from '../../../components/ProfileInfoSection/ProfileInfoSection';
import s from './ProfileSettings.module.scss';

type IProps = {
  className?: string;
};

export const ProfileSettings: FC<IProps> = ({ className = '' }) => {
  return (
    <div className={cn(s.settings, className)}>
      <ProfileInfoSection />
    </div>
  );
};
