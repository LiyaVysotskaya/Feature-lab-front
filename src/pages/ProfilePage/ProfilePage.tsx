import { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useProjectsQuery } from '../../api/queries';
import { Main } from '../../components/Main/Main';
import { ProfileNav } from '../../components/ProfileNav/ProfileNav';
import {
  ROUTE_PROFILE,
  ROUTE_PROFILE_DASHBOARD,
  ROUTE_PROFILE_PROJECTS,
  ROUTE_PROFILE_SETTINGS,
} from '../../constants/constants';
import s from './ProfilePage.module.scss';

export const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { data: projects } = useProjectsQuery();

  useEffect(() => {
    const navigateBasedOnProjects = () => {
      if (projects && pathname === ROUTE_PROFILE) {
        const projectsCount = projects.length;
        if (projectsCount === 0) {
          navigate(ROUTE_PROFILE_SETTINGS);
        } else if (projectsCount === 1) {
          navigate(`${ROUTE_PROFILE_PROJECTS}/${projects[0].id}`);
        } else {
          navigate(ROUTE_PROFILE_DASHBOARD);
        }
      }
    };

    navigateBasedOnProjects();
  });

  return (
    <Main className={s.profile}>
      <ProfileNav />
      <div className={s.profileContent} id="profilePageContent">
        <Outlet />
      </div>
    </Main>
  );
};
