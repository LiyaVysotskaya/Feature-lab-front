import cl from 'classnames';
import { format, parseISO } from 'date-fns';
import { FC } from 'react';
import { TProjectStage } from '../../../types/data';
import { Text } from '../../ui/Text/Text';
import s from './CurrentStage.module.scss';

type CurrentStageProps = {
  className?: string;
  stage: TProjectStage;
};

export const CurrentStage: FC<CurrentStageProps> = ({ className = '', stage }) => {
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
          {stage.stage_status === 'in_progress' ? 'Текущий этап' : `Этап ${stage.stage_num}`}
        </Text>
        <Text view="germano-4" tag="h2" line className={cl(s.title)}>
          {stage.name}
        </Text>
        <Text view="gost-1" tag="p" className={cl(s.date)}>
          срок выполнения: {convertAndFormatDate(stage.end_date)}
        </Text>
      </div>
      <Text view="gost-2" tag="p" className={cl(s.info)}>
        {stage.description}
      </Text>
    </div>
  );
};
