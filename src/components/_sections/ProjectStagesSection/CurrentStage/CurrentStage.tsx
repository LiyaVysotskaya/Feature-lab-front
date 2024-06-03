import cn from 'classnames';
import { FC } from 'react';
import { TProjectStage } from '../../../../types/privateData';
import { convertDateToShortFormat } from '../../../../utils/dateConvertHelpers';
import { Text } from '../../../_ui/Text/Text';
import s from './CurrentStage.module.scss';

type CurrentStageProps = {
  className?: string;
  stage: TProjectStage;
};

export const CurrentStage: FC<CurrentStageProps> = ({ className = '', stage }) => {
  return (
    <div className={cn(s.currentStage, className)}>
      <div className={cn(s.column)}>
        <Text view="gost-3" tag="p" className={cn(s.subTitle)}>
          {stage.stage_status === 'in_progress' ? 'Текущий этап' : `Этап ${stage.stage_num}`}
        </Text>
        <Text view="germano-4" tag="h2" line className={cn(s.title)}>
          {stage.name}
        </Text>
        <Text view="gost-1" tag="p" className={cn(s.date)}>
          срок выполнения: {convertDateToShortFormat(stage.end_date)}
        </Text>
      </div>

      <Text view="gost-2" tag="p" className={cn(s.info)}>
        {stage.description}
      </Text>
    </div>
  );
};
