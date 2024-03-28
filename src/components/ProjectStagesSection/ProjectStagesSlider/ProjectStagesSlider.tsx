import cl from 'classnames';
import { FC, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { TProjectStage } from '../../../types/profileData';
import { ArrowInCircleIcon } from '../../ui/icons';
import { ProjectStage } from '../ProjectStage/ProjectStage';
import s from './ProjectStagesSlider.module.scss';

type IProps = {
  className?: string;
  setCurrentStage: (stage: TProjectStage) => void;
  projectStages: TProjectStage[];
};

export const ProjectStagesSlider: FC<IProps> = ({
  className = '',
  setCurrentStage,
  projectStages,
}) => {
  const [showLeftOverlay, setShowLeftOverlay] = useState(false);
  const [showRightOverlay, setShowRightOverlay] = useState(false);
  const stagesUlRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  // Scroll to the current stage element if it's out of view
  const scrollToCurrentStageEl = (stageUlEl: HTMLUListElement) => {
    const stageToScroll: HTMLElement | null = document.querySelector('.stageToScroll');

    if (stageToScroll && stageUlEl) {
      const stageRect = stageToScroll.getBoundingClientRect();
      const stagesUlRect = stageUlEl.getBoundingClientRect();

      if (stageRect.left < stagesUlRect.left || stageRect.right > stagesUlRect.right) {
        stageUlEl.scroll({
          left: stageToScroll.offsetLeft - (stageUlEl.offsetWidth - stageToScroll.offsetWidth) / 2,
          behavior: 'smooth',
        });
      }
    }
  };

  // Scroll on btn click horizontally within the stages Ul Element
  const scrollInStagesUlElement = (n: number) => {
    const stagesUlEl = stagesUlRef.current;
    if (stagesUlEl) {
      stagesUlEl.scrollBy({
        left: n,
        behavior: 'smooth',
      });
    }
  };

  // Handle scroll events and resize
  useLayoutEffect(() => {
    const handleScroll = () => {
      const stagesUlEl = stagesUlRef.current;
      if (stagesUlEl) {
        const { scrollLeft } = stagesUlEl;
        const { scrollWidth } = stagesUlEl;
        const { clientWidth } = stagesUlEl;

        // Show left gradient if scroll position is greater than 3px
        setShowLeftOverlay(scrollLeft > 3); // +3px for better UX
        // Show right gradient if scroll position is less than max scroll width
        setShowRightOverlay(scrollLeft < scrollWidth - clientWidth - 3); // scroll width max - 3px for better UX
      }
    };

    const stagesUlEl = stagesUlRef.current;
    if (stagesUlEl) {
      handleScroll(); // Call once to set initial state for btns and white overlays
      stagesUlEl.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      scrollToCurrentStageEl(stagesUlEl);
    }

    return () => {
      if (stagesUlEl) {
        stagesUlEl.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    };
  }, [location]);

  return (
    <div className={s.slider}>
      <div
        className={cl(s.whiteOverlay, s.whiteOverlay_left, {
          [s.whiteOverlay_visible]: showLeftOverlay,
        })}
      />
      <button
        type="button"
        className={cl(s.btn, s.btn_left, {
          [s.btn_hidden]: !showLeftOverlay,
        })}
        onClick={() => scrollInStagesUlElement(-200)}>
        <ArrowInCircleIcon className={s.btnIcon} />
      </button>

      <ul className={cl(s.stages, className)} ref={stagesUlRef}>
        {projectStages.map((stage, index, arr) => (
          <ProjectStage
            stage={stage}
            setCurrentStage={setCurrentStage}
            key={uuidv4()}
            isLineHidden={
              index === arr.length - 1 ||
              (stage.stage_status === 'completed' && arr[index + 1].stage_status === 'new')
            }
            // mark the stage that we want to scroll to
            className={
              stage.stage_status === 'in_progress' ||
              (stage.stage_status === 'new' &&
                index > 1 &&
                arr[index - 1].stage_status === 'completed') ||
              (stage.stage_status === 'completed' && index === arr.length - 1)
                ? 'stageToScroll'
                : ''
            }
          />
        ))}
      </ul>

      <button
        type="button"
        className={cl(s.btn, s.btn_right, {
          [s.btn_hidden]: !showRightOverlay,
        })}
        onClick={() => scrollInStagesUlElement(200)}>
        <ArrowInCircleIcon className={s.btnIcon} />
      </button>

      <div
        className={cl(s.whiteOverlay, s.whiteOverlay_right, {
          [s.whiteOverlay_visible]: showRightOverlay,
        })}
      />
    </div>
  );
};
