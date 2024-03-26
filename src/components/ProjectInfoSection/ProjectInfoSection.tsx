import cl from 'classnames';
import { FC } from 'react';
import { TProjectFullInfo } from '../../types/data';
import s from './ProjectInfoSection.module.scss';

type IProps = {
  className?: string;
  project: TProjectFullInfo;
};

export const ProjectInfoSection: FC<IProps> = ({ className = '', project }) => {
  const manager = project.managers[0];
  const managerName = `${manager.first_name} ${manager.last_name}`;

  return (
    <section className={cl(s.section, className)}>
      <h1 className={s.title}>{project.name}</h1>

      <div className={s.manager}>
        <p className={s.managerTitle}>Проект ведет:</p>
        <p className={s.managerText}>{managerName}</p>
        <p className={s.managerText}>{manager.phone_number}</p>
        <p className={s.managerText}>{manager.email}</p>
      </div>

      <p className={s.description}>{project.description}</p>

      <div className={s.logoContainer}>
        {project.logo && <img className={s.logo} src={project.logo} alt="Лого" />}
      </div>
    </section>
  );
};
