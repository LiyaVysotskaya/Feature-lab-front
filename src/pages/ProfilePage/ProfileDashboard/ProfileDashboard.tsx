import cl from 'classnames';
import { FC } from 'react';
import { Text } from '../../../components/ui/Text/Text';
import { ProjectCard } from './ProjectCard/ProjectCard';

import s from './ProfileDashboard.module.scss';

interface IProfileDashboardProps {
  className?: string;
}

export const ProfileDashboard: FC<IProfileDashboardProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.content, className)}>
      <Text view="germano-4" tag="h1" line className={cl(s.pageTitle)}>
        Проекты
      </Text>
      <div className={cl(s.dashboard)}>
        <ProjectCard projectIndx={0} />
        <ProjectCard projectIndx={1} />
        <ProjectCard projectIndx={2} />
        <ProjectCard projectIndx={3} />
        <ProjectCard projectIndx={4} />
        <ProjectCard projectIndx={5} />
      </div>
      <Text view="germano-4" tag="h2" line className={cl(s.pageTitle, s.pageTitleFinishedProjects)}>
        Завершенные проекты:
      </Text>
      <div className={cl(s.dashboard)}>
        <ProjectCard projectIndx={6} />
      </div>
    </div>
  );
};
