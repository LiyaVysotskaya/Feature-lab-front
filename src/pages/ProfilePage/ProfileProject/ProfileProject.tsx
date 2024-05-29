import cn from 'classnames';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useProjectQuery } from '../../../api/queries';
import { DocumentsSection } from '../../../components/_sections/DocumentsSection/DocumentsSection';
import { ProjectInfoSection } from '../../../components/_sections/ProjectInfoSection/ProjectInfoSection';
import { ProjectStagesSection } from '../../../components/_sections/ProjectStagesSection/ProjectStagesSection';
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

  const sortedStages = project.stages.sort((a, b) => a.stage_num - b.stage_num);

  return (
    <div className={cn(s.project, className)}>
      <ProjectInfoSection project={project} className={s.projectSection} />

      <ProjectStagesSection projectStages={sortedStages} className={s.projectSection} />

      <DocumentsSection
        title={`Документы по ${project.name}`}
        docs={project.documents}
        className={s.projectSection}
      />
    </div>
  );
};
