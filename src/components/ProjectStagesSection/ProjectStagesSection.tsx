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

  useEffect(() => {
    const stageInProgressindex = projects[0].stages.findIndex(
      (stage) => stage.status === 'inProgress',
    );
    setCurrentStageIndex(stageInProgressindex);
  }, []);

  return (
    <section className={cl(s.section, className)}>
      <CurrentStage currentStageIndex={currentStageIndex} />
      <ProjectStagesSlider setCurrentStageIndex={setCurrentStageIndex} />
    </section>
  );
};
