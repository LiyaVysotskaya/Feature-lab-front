import cl from 'classnames';
import { FC, useEffect, useState } from 'react';
import { CurrentStage } from './CurrentStage/CurrentStage';
import s from './ProjectStagesSection.module.scss';
import { ProjectStagesSlider } from './ProjectStagesSlider/ProjectStagesSlider';
import { projects } from '../../_mockData/projectsMockData';

interface IProjectStagesProps {
  className?: string;
}

export const ProjectStagesSection: FC<IProjectStagesProps> = ({ className = '' }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const projectIndex = 3; // test

  useEffect(() => {
    const stageInProgressindex = projects[projectIndex].stages.findIndex(
      (stage) => stage.status === 'in_progress',
    );
    // if there is no project with status in_progress find first project that has status notStarted
    if (stageInProgressindex === -1) {
      const stageNotStartedindex = projects[projectIndex].stages.findIndex(
        (stage) => stage.status === 'new',
      );
      setCurrentStageIndex(stageNotStartedindex);
      return;
    }

    setCurrentStageIndex(stageInProgressindex);
  }, []);

  return (
    <section className={cl(s.section, className)}>
      <CurrentStage currentStageIndex={currentStageIndex} projectIndex={projectIndex} />
      <ProjectStagesSlider
        setCurrentStageIndex={setCurrentStageIndex}
        projectIndex={projectIndex}
      />
    </section>
  );
};
