import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ROUTE_PROFILE_PROJECTS } from '../../../constants/constants';
import { TProjectShortInfo } from '../../../types/data';
import { ArrowFatRightIcon } from '../../ui/icons';
import { ProfileNavLink } from '../ProfileNavLink/ProfileNavLink';
import s from './ProfileProjectsNav.module.scss';

interface IProfileProjectsNavProps {
  className?: string;
  projects: TProjectShortInfo[];
}

export const ProfileProjectsNav: FC<IProfileProjectsNavProps> = ({ className = '', projects }) => {
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
