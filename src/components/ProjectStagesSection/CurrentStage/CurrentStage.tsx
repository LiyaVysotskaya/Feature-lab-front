import cl from 'classnames';
import { format, parseISO } from 'date-fns';
import { FC } from 'react';
import { projects } from '../../../_mockData/projectsMockData';
import { Text } from '../../ui/Text/Text';
import s from './CurrentStage.module.scss';

type CurrentStageProps = {
  className?: string;
  currentStageIndex: number;

  projectIndex: number;
};

export const CurrentStage: FC<CurrentStageProps> = ({
  className = '',
  currentStageIndex,
  projectIndex,
}) => {
  const convertAndFormatDate = (dateString: string) => {
    // Parse the ISO 8601 formatted date string to a Date object
    const date = parseISO(dateString);
    // Format the date using date-fns
    return format(date, 'dd.MM.yyyy');
  };

  return (
    <div className={cl(s.currentStage, className)}>
      <div className={cl(s.column)}>
        <Text view="gost-3" tag="p" className={cl(s.subTitle)}>
          {projects[projectIndex].stages[currentStageIndex].status === 'in_progress'
            ? 'Текущий этап'
            : `Этап ${currentStageIndex + 1}`}
        </Text>
        <Text view="germano-4" tag="h2" line className={cl(s.title)}>
          {projects[projectIndex].stages[currentStageIndex].stageName}
        </Text>
        <Text view="gost-1" tag="p" className={cl(s.date)}>
          срок выполнения:{' '}
          {convertAndFormatDate(projects[projectIndex].stages[currentStageIndex].dateOfEnd)}
        </Text>
      </div>
      <Text view="gost-2" tag="p" className={cl(s.info)}>
        {projects[projectIndex].stages[currentStageIndex].stageInfo}
      </Text>
    </div>
  );
};
