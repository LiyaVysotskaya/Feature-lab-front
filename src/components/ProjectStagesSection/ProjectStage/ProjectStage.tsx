import cl from 'classnames';
import { FC, useRef, useState } from 'react';
import { projects } from '../../../_mockData/projectsMockData';
import { Text } from '../../ui/Text/Text';
import { EllipseIcon } from '../../ui/icons';
import StagePopupPortal from '../StagePopupPortal/StagePopupPortal';
import s from './ProjectStage.module.scss';

type ProjectStageProps = {
  status: 'complete' | 'inProgress' | 'notStarted';
  index: number;
  className?: string;
  isLast?: boolean;
  setCurrentStageIndex: (index: number) => void;
};

export const ProjectStage: FC<ProjectStageProps> = ({
  status,
  className = '', // used also for autoscroll to stage that have status inProgress
  index,
  isLast = false,
  setCurrentStageIndex,
}) => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const stageRef = useRef<HTMLDivElement>(null);
  const stageEl = stageRef.current;

  const handleOnMouseEnter = () => {
    if (window.innerWidth > 768) {
      setShowPopup(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (window.innerWidth > 768) {
      setShowPopup(false);
    }
  };

  const handleStageOnTouchStart = () => {
    if (window.innerWidth < 500) {
      setCurrentStageIndex(index);
    }
    if (window.innerWidth > 500 && window.innerWidth <= 768) {
      setShowPopup(true);
    }
  };

  const stageState = status !== 'notStarted';
  return (
    <div className={cl(s.stageWrapper, className)} ref={stageRef}>
      {!isLast && (
        <div
          className={cl(s.line, {
            [s.line_notStarted]: status === 'notStarted',
            [s.line_size_half]: status === 'inProgress',
          })}
        />
      )}
      <div
        className={cl(s.stage)}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onTouchStart={handleStageOnTouchStart}>
        <EllipseIcon status={status} />
        <p className={cl(s.stage__text, stageState && s.stage__text_active)}>Этап {index + 1}</p>
      </div>

      {stageEl && showPopup && (
        <StagePopupPortal isOpen={showPopup} onClose={() => setShowPopup(false)} stageEl={stageEl}>
          <Text view="gost-4" tag="p">
            Этап {index + 1}
          </Text>
          <Text view="gost-2" tag="p">
            {projects[0].stages[index].stageName}
          </Text>
          <Text view="gost-3" tag="p">
            {projects[0].stages[index].stageInfo}
          </Text>
          <Text view="gost-3" tag="p">
            {projects[0].stages[index].dateOfEnd}
          </Text>
        </StagePopupPortal>
      )}
    </div>
  );
};
