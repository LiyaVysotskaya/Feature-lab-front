import cl from 'classnames';
import { FC } from 'react';
import { TProjectStage } from '../../../types/data';
import { convertDateToShortFormat } from '../../../utils/dateConvertHelpers';
import { Text } from '../../ui/Text/Text';
import s from './CurrentStage.module.scss';

type CurrentStageProps = {
  className?: string;
  stage: TProjectStage;
};

export const CurrentStage: FC<CurrentStageProps> = ({ className = '', stage }) => {
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
          срок выполнения: {convertDateToShortFormat(stage.end_date)}
        </Text>
      </div>
      <Text view="gost-2" tag="p" className={cl(s.info)}>
        {stage.description}
      </Text>
    </div>
  );
};
