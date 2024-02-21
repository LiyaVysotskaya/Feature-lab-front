import cl from 'classnames';
import { FC } from 'react';
import { workStages as workStagesData } from '../../_mockData/workStagesMockData';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { WorkStageItem } from './WorkStageItem/WorkStageItem';
import s from './WorkStages.module.scss';

export interface WorkStagesProps {
  className?: string;
}

export const WorkStages: FC<WorkStagesProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.stages, className)}>
      <SectionTitle text="Этапы работы" className={s.stagesTitle} />
      {workStagesData.map((stage, index) => (
        <WorkStageItem key={stage.title} stage={stage} stageNum={index + 1} />
      ))}
    </section>
  );
};
