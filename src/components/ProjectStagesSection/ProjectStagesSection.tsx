import cl from 'classnames';
import { FC, useEffect, useState } from 'react';
import { TProjectStage } from '../../types/profileData';
import { CurrentStage } from './CurrentStage/CurrentStage';
import { ProjectStagesSlider } from './ProjectStagesSlider/ProjectStagesSlider';
import s from './ProjectStagesSection.module.scss';

type IProps = {
  className?: string;
  projectStages: TProjectStage[];
};

export const ProjectStagesSection: FC<IProps> = ({ className = '', projectStages }) => {
  const [currentStage, setCurrentStage] = useState<TProjectStage>({
    id: '',
    name: '',
    description: '',
    stage_num: 0,
    stage_status: 'completed',
    start_date: '',
    end_date: '1990-09-11T00:00:00Z',
  });

  useEffect(() => {
    // Find the stage that is in progress
    const stageInProgress = projectStages.find((stage) => stage.stage_status === 'in_progress');

    // Find the first stage that has not started
    const stageNotStarted = projectStages.find((stage) => stage.stage_status === 'new');

    // Set the current stage based on the found stages
    if (stageInProgress) {
      setCurrentStage(stageInProgress);
    } else if (stageNotStarted) {
      setCurrentStage(stageNotStarted);
    } else {
      // If all stages have started or there are no stages, set the current stage to the last stage
      setCurrentStage(projectStages[projectStages.length - 1]);
    }
  }, [projectStages]);

  return (
    <section className={cl(s.section, className)}>
      <CurrentStage stage={currentStage} />
      <ProjectStagesSlider setCurrentStage={setCurrentStage} projectStages={projectStages} />
    </section>
  );
};
