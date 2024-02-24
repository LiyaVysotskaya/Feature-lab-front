import cl from 'classnames';
import { FC } from 'react';
import { Text } from '../../ui/Text/Text';
import s from './CurrentStage.module.scss';
import { projects } from '../../../_mockData/projectsMockData';

type CurrentStageProps = {
  className?: string;
  currentStageIndex: number;
};

export const CurrentStage: FC<CurrentStageProps> = ({ className = '', currentStageIndex }) => {
  return (
    <div className={cl(s.currentStage, className)}>
      <div className={cl(s.column)}>
        <Text view="gost-3" tag="p" className={cl(s.subTitle)}>
          {projects[0].stages[currentStageIndex].status === 'in_progress'
            ? 'Текущий этап'
            : `Этап ${currentStageIndex + 1}`}
        </Text>
        <Text view="germano-4" tag="h2" line className={cl(s.title)}>
          {projects[0].stages[currentStageIndex].stageName}
        </Text>
        <Text view="gost-1" tag="p" className={cl(s.date)}>
          срок выполнения: {projects[0].stages[currentStageIndex].dateOfEnd}
        </Text>
      </div>
      <Text view="gost-2" tag="p" className={cl(s.info)}>
        {projects[0].stages[currentStageIndex].stageInfo}
      </Text>
    </div>
  );
};
