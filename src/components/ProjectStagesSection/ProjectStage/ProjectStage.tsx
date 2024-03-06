import cl from 'classnames';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { FC, useRef, useState } from 'react';
import { TProjectStage } from '../../../types/data';
import { Text } from '../../ui/Text/Text';
import { EllipseIcon } from '../../ui/icons';
import StagePopupPortal from '../StagePopupPortal/StagePopupPortal';
import s from './ProjectStage.module.scss';

type ProjectStageProps = {
  className?: string;
  isLineHidden?: boolean;
  setCurrentStage: (stage: TProjectStage) => void;
  stage: TProjectStage;
};

export const ProjectStage: FC<ProjectStageProps> = ({
  className = '', // used also for autoscroll to stage that have status inProgress
  isLineHidden = false,
  setCurrentStage,
  stage,
}) => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const stageRef = useRef<HTMLDivElement>(null);
  const stageEl = stageRef.current;

  const status = stage.stage_status;

  const handleOnMouseEnter = () => {
    if (window.innerWidth > 768) {
      setShowPopup(true);
    }
  };

  const handleStageOnTouchEnd = () => {
    if (window.innerWidth < 500) {
      setCurrentStage(stage);
    }
    if (window.innerWidth > 500 && window.innerWidth <= 768) {
      setShowPopup(true);
    }
  };

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
        onTouchEnd={handleStageOnTouchEnd}>
        <EllipseIcon status={status} />
        <p className={cl(s.stage__text, { [s.stage__text_active]: status !== 'new' })}>
          Этап {stage.stage_num}
        </p>
      </div>

      {stageEl && showPopup && (
        <StagePopupPortal isOpen={showPopup} onClose={() => setShowPopup(false)} stageEl={stageEl}>
          <Text view="gost-4" tag="p">
            Этап {stage.stage_num}
          </Text>
          <Text view="gost-2" tag="p">
            {stage.name}
          </Text>
          <Text view="gost-3" tag="p">
            {stage.description}
          </Text>
          <Text view="gost-3" tag="p">
            {convertAndFormatDate(stage.end_date)}
          </Text>
        </StagePopupPortal>
      )}
    </div>
  );
};
