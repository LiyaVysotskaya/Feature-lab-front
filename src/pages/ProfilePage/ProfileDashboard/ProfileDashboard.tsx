import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useProjectsQuery } from '../../../api/queries';
import { Preloader } from '../../../components/Preloader/Preloader';
import { ProjectCard } from '../../../components/ProjectCard/ProjectCard';
import { Text } from '../../../components/ui/Text/Text';
import { TProjectShortInfo } from '../../../types/profileData';
import s from './ProfileDashboard.module.scss';

type IProps = {
  className?: string;
};

export const ProfileDashboard: FC<IProps> = ({ className = '' }) => {
  const { data: projects, isLoading: isLoadingProjects } = useProjectsQuery();

  if (!projects || isLoadingProjects) {
    return (
      <div className={s.loaderWrap}>
        <Preloader />
      </div>
    );
  }

  const completedProjects: TProjectShortInfo[] = projects.filter((project) => {
    return project.stages.every((stage) => stage.stage_status === 'completed');
  });

  const notCompletedProjects = projects.filter((project) => {
    return !completedProjects.includes(project);
  });

  return (
    <div className={cl(s.content, className)}>
      <Text view="germano-4" tag="h1" line className={cl(s.pageTitle)}>
        Проекты
      </Text>
      <ul className={cl(s.dashboard)}>
        {notCompletedProjects.map((project) => (
          <ProjectCard key={uuidv4()} project={project} />
        ))}
      </ul>

      {completedProjects.length > 0 && (
        <>
          <Text
            view="germano-4"
            tag="h2"
            line
            className={cl(s.pageTitle, s.pageTitleFinishedProjects)}>
            Завершенные проекты:
          </Text>
          <ul className={cl(s.dashboard)}>
            {completedProjects.map((project) => (
              <ProjectCard key={uuidv4()} project={project} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
