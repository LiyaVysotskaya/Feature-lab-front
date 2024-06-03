import cn from 'classnames';
import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TProductStage } from '../../../../types/publicData';
import { PlusIcon } from '../../../_ui/icons';
import s from './ProductStage.module.scss';

type IProps = {
  className?: string;
  stage: TProductStage;
  stageNum: number;
};

export const ProductStage: FC<IProps> = ({ stageNum, stage, className = '' }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className={cn(s.stage, className)}>
      <div className={s.stageWrapper}>
        <div className={cn(s.stageRow)}>
          <p className={cn(s.stageNumber, isActive && s.stageNumber__filled)}>
            {stageNum < 10 ? `0${stageNum}` : String(stageNum)}
          </p>
          <p className={cn(s.stageTextWrap, s.stageTitle)}>{stage.name}</p>
          <div role="presentation" className={s.dummyPlus} onClick={() => setIsActive(!isActive)}>
            <PlusIcon />
          </div>
        </div>
        <div className={cn(s.stageRow)}>
          <div className={cn(s.stageNumber, s.collapsed)} />
          <div
            className={cn(s.stageTextWrap, s.stageTextWrap__tel, s.inactive, isActive && s.active)}>
            {stage.description.split('\n').map((paragraph) => (
              <p className={cn(s.text)} key={uuidv4()}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={cn(s.dummyPlus, s.collapsed)} />
        </div>
      </div>
    </li>
  );
};
