import cl from 'classnames';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useProjectQuery } from '../../../api/queries';
import { DocumentsSection } from '../../../components/DocumentsSection/DocumentsSection';
import { ProjectInfoSection } from '../../../components/ProjectInfoSection/ProjectInfoSection';
import { ProjectStagesSection } from '../../../components/ProjectStagesSection/ProjectStagesSection';
import s from './ProfileProject.module.scss';

type IProps = {
  className?: string;
};

export const ProfileProject: FC<IProps> = ({ className = '' }) => {
  const { projectId } = useParams();
  const { data: project, isLoading, isRefetching } = useProjectQuery(projectId);

  if (isLoading || isRefetching || !project) {
    return null;
  }

  return (
    <div className={cl(s.project, className)}>
      <ProjectInfoSection project={project} className={s.projectSection} />

      <ProjectStagesSection projectStages={project.stages} className={s.projectSection} />

      <DocumentsSection
        title={`Документы по ${project.name}`}
        docs={project.documents}
        className={s.projectSection}
      />
    </div>
  );
};
