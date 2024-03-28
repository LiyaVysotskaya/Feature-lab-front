import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ROUTE_PROFILE_PROJECTS } from '../../../constants/routesConstants';
import { TProjectShortInfo } from '../../../types/profileData';
import { ArrowFatRightIcon } from '../../ui/icons';
import { ProfileNavLink } from '../ProfileNavLink/ProfileNavLink';
import s from './ProfileProjectsNav.module.scss';

type IProps = {
  className?: string;
  projects: TProjectShortInfo[];
};

export const ProfileProjectsNav: FC<IProps> = ({ className = '', projects }) => {
  return (
    <ul className={cl(s.projects, className)}>
      {projects.map((item) => (
        <li className={s.project} key={uuidv4()}>
          <ProfileNavLink
            to={`${ROUTE_PROFILE_PROJECTS}/${item.id}`}
            icon={<ArrowFatRightIcon />}
            text={item.name}
          />
        </li>
      ))}
    </ul>
  );
};
