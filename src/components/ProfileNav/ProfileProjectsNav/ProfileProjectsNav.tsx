import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { projects } from '../../../_mockData/projectsMockData';
import { ROUTE_PROFILE } from '../../../constants/constants';
import { ArrowFatRightIcon } from '../../ui/icons';
import { ProfileNavLink } from '../ProfileNavLink/ProfileNavLink';
import s from './ProfileProjectsNav.module.scss';

interface IProfileProjectsNavProps {
  className?: string;
}

export const ProfileProjectsNav: FC<IProfileProjectsNavProps> = ({ className = '' }) => {
  return (
    <ul className={cl(s.projects, className)}>
      {projects.map((item) => (
        <li className={s.project} key={uuidv4()}>
          <ProfileNavLink
            to={`${ROUTE_PROFILE}/${item.url}`}
            icon={<ArrowFatRightIcon />}
            text={item.projectName}
          />
        </li>
      ))}
    </ul>
  );
};
