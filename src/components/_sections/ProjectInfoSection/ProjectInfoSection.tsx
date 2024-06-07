import cn from 'classnames';
import { FC } from 'react';
import { API_BASE_URL } from '../../../constants/externalLinks';
import { TProjectFullInfo } from '../../../types/privateDataTypes';
import s from './ProjectInfoSection.module.scss';

type IProps = {
  className?: string;
  project: TProjectFullInfo;
};

export const ProjectInfoSection: FC<IProps> = ({ className = '', project }) => {
  const manager = project.managers[0];
  const managerName = `${manager.first_name} ${manager.last_name}`;
  const logoLink = `${API_BASE_URL.slice(0, -1)}${project.logo}`;

  return (
    <section className={cn(s.section, className)}>
      <h1 className={s.title}>{project.name}</h1>

      <div className={s.manager}>
        <p className={s.managerTitle}>Проект ведет:</p>
        <p className={s.managerText}>{managerName}</p>
        <p className={s.managerText}>{manager.phone_number}</p>
        <p className={s.managerText}>{manager.email}</p>
      </div>

      <p className={s.description}>{project.description}</p>

      <div className={s.logoContainer}>
        {project.logo && <img className={s.logo} src={logoLink} alt="Лого" />}
      </div>
    </section>
  );
};
