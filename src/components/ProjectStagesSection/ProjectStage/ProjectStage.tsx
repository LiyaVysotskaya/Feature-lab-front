import cl from 'classnames';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { FC, useRef, useState } from 'react';
import { projects } from '../../../_mockData/projectsMockData';
import { Text } from '../../ui/Text/Text';
import { EllipseIcon } from '../../ui/icons';
import StagePopupPortal from '../StagePopupPortal/StagePopupPortal';
import s from './ProjectStage.module.scss';

type ProjectStageProps = {
  status: 'completed' | 'in_progress' | 'new';
  index: number;
  className?: string;
  isLineHidden?: boolean;
  setCurrentStageIndex: (index: number) => void;

  projectIndex: number; // test
};

export const ProjectStage: FC<ProjectStageProps> = ({
  status,
  className = '', // used also for autoscroll to stage that have status inProgress
  index,
  isLineHidden = false,
  setCurrentStageIndex,
  projectIndex,
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

  const stageState = status !== 'new';

  const convertAndFormatDate = (dateString: string) => {
    // Parse the ISO 8601 formatted date string to a Date object
    const date = parseISO(dateString);
    // Format the date using date-fns
    return format(date, 'dd MMMM yyyy', { locale: ru });
  };

  return (
    <div className={cl(s.stageWrapper, className)} ref={stageRef}>
      {!isLineHidden && (
        <div
          className={cl(s.line, {
            [s.line_notStarted]: status === 'new',
            [s.line_size_half]: status === 'in_progress',
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
            {projects[projectIndex].stages[index].stageName}
          </Text>
          <Text view="gost-3" tag="p">
            {projects[projectIndex].stages[index].stageInfo}
          </Text>
          <Text view="gost-3" tag="p">
            {convertAndFormatDate(projects[projectIndex].stages[index].dateOfEnd)}
          </Text>
        </StagePopupPortal>
      )}
    </div>
  );
};
