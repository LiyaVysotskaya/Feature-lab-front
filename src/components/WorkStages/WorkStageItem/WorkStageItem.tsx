import cl from 'classnames';
import { FC, useState } from 'react';
import { Text } from '../../ui/Text/Text';
import { PlusIcon } from '../../ui/icons';
import s from './WorkStageItem.module.scss';

export interface WorkStagesItem {
  title: string;
  text1: string;
  text2: string;
}

export interface WorkStageItemProps {
  className?: string;
  stage: WorkStagesItem;
  stageNum: number;
}

export const WorkStageItem: FC<WorkStageItemProps> = ({ stageNum, stage, className = '' }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cl(s.stage, className)}>
      <div className={s.stageWrapper}>
        <div className={cl(s.stageRow, s.extraPadding)}>
          <Text className={cl(s.stageNumber, isActive && s.stageNumber__filled)} view="molot-1">
            {stageNum < 10 ? `0${stageNum}` : String(stageNum)}
          </Text>
          <Text className={s.stageText} tag="h3" view="germano-1">
            {stage.title}
          </Text>
          <div role="presentation" className={s.dummyPlus} onClick={() => setIsActive(!isActive)}>
            <PlusIcon />
          </div>
        </div>
        <div className={cl(s.stageRow)}>
          <div className={cl(s.stageNumber, s.collapsed)} />
          <div className={cl(s.stageText, s.stageText__tel)}>
            <div className={s.stageText__hidden}>
              <Text
                className={cl(s.content, s.inactive, isActive && s.active)}
                view="gost-1"
                tag="p">
                {stage.text1}
              </Text>
              <Text
                className={cl(s.content, s.inactive, isActive && s.active)}
                view="gost-1"
                tag="p">
                {stage.text2}
              </Text>
            </div>
          </div>
          <div className={cl(s.dummyPlus, s.collapsed)} />
        </div>
      </div>
    </div>
  );
};
