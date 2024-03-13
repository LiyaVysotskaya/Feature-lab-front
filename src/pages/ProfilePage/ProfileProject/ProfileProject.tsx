import cl from 'classnames';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectStagesSection } from '../../../components/ProjectStagesSection/ProjectStagesSection';
import s from './ProfileProject.module.scss';
import { useProjectQuery } from '../../../api/queries';
import { ProjectInfoSection } from '../../../components/ProjectInfoSection/ProjectInfoSection';

interface IProfileProjectProps {
  className?: string;
}

export const ProfileProject: FC<IProfileProjectProps> = ({ className = '' }) => {
  const { projectId } = useParams();
  const { data: project, isLoading, isRefetching } = useProjectQuery(projectId);

  if (isLoading || isRefetching || !project) {
    return null;
  }

  return (
    <div className={cl(s.project, className)}>
      <ProjectInfoSection project={project} className={s.projectSection} />

      <ProjectStagesSection projectStages={project.stages} className={s.projectSection} />

      {/* Компонент документы проекта */}
    </div>
  );
};
