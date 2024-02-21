import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { ProfileNav } from '../../components/ProfileNav/ProfileNav';
import s from './ProfilePage.module.scss';

export const ProfilePage: FC = () => {
  return (
    <Main className={s.profile}>
      <ProfileNav />
      <div className={s.profileContent}>
        <Outlet />
      </div>
    </Main>
  );
};
