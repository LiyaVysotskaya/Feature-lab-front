import cl from 'classnames';
import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TProductStage } from '../../../types/publicData';
import { PlusIcon } from '../../ui/icons';
import s from './ProductStage.module.scss';

type IProps = {
  className?: string;
  stage: TProductStage;
  stageNum: number;
};

export const ProductStage: FC<IProps> = ({ stageNum, stage, className = '' }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className={cl(s.stage, className)}>
      <div className={s.stageWrapper}>
        <div className={cl(s.stageRow)}>
          <p className={cl(s.stageNumber, isActive && s.stageNumber__filled)}>
            {stageNum < 10 ? `0${stageNum}` : String(stageNum)}
          </p>
          <p className={cl(s.stageTextWrap, s.stageTitle)}>{stage.name}</p>
          <div role="presentation" className={s.dummyPlus} onClick={() => setIsActive(!isActive)}>
            <PlusIcon />
          </div>
        </div>
        <div className={cl(s.stageRow)}>
          <div className={cl(s.stageNumber, s.collapsed)} />
          <div
            className={cl(s.stageTextWrap, s.stageTextWrap__tel, s.inactive, isActive && s.active)}>
            {stage.description.split('\n').map((paragraph) => (
              <p className={cl(s.text)} key={uuidv4()}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={cl(s.dummyPlus, s.collapsed)} />
        </div>
      </div>
    </li>
  );
};
