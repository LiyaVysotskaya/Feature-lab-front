import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { projects } from '../../../_mockData/projectsMockData';
import { ArrowInCircleIcon } from '../../ui/icons';
import { ProjectStage } from '../ProjectStage/ProjectStage';
import s from './ProjectStagesSlider.module.scss';

interface IProjectStagesSliderProps {
  className?: string;
  setCurrentStageIndex: (index: number) => void;

  projectIndex: number; // test
}

export const ProjectStagesSlider: FC<IProjectStagesSliderProps> = ({
  className = '',
  setCurrentStageIndex,
  projectIndex,
}) => {
  const [showLeftOverlay, setShowLeftOverlay] = useState(false);
  const [showRightOverlay, setShowRightOverlay] = useState(false);
  const stagesWrapperRef = useRef<HTMLDivElement>(null);

  // Scroll to the in-progress element if it's out of view
  const scrollToInProgressEl = (wrapper: HTMLDivElement) => {
    const stageToScroll: HTMLElement | null = document.querySelector('.stageToScroll');

    if (stageToScroll && wrapper) {
      const stageRect = stageToScroll.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();

      if (stageRect.left < wrapperRect.left || stageRect.right > wrapperRect.right) {
        wrapper.scroll({
          left: stageToScroll.offsetLeft - (wrapper.offsetWidth - stageToScroll.offsetWidth) / 2,
          behavior: 'smooth',
        });
      }
    }
  };

  // Scroll horizontally within the stages wrapper
  const scrollInStagesWrapper = (n: number) => {
    const stagesWrapper = stagesWrapperRef.current;
    if (stagesWrapper) {
      stagesWrapper.scrollBy({
        left: n,
        behavior: 'smooth',
      });
    }
  };

  // Handle scroll events and resize
  useEffect(() => {
    const handleScroll = () => {
      const stagesWrapper = stagesWrapperRef.current;
      if (stagesWrapper) {
        const { scrollLeft } = stagesWrapper;
        const { scrollWidth } = stagesWrapper;
        const { clientWidth } = stagesWrapper;

        // Show left gradient if scroll position is greater than 3px
        setShowLeftOverlay(scrollLeft > 3); // +3px for better UX
        // Show right gradient if scroll position is less than max scroll width
        setShowRightOverlay(scrollLeft < scrollWidth - clientWidth - 3); // scroll width max - 3px for better UX
      }
    };

    const stagesWrapper = stagesWrapperRef.current;
    if (stagesWrapper) {
      handleScroll(); // Call once to set initial state
      stagesWrapper.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      scrollToInProgressEl(stagesWrapper);
    }

    return () => {
      if (stagesWrapper) {
        stagesWrapper.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
    };
  }, []);

  return (
    <div className={s.slider} id="stagesWrapperContainer">
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
        onClick={() => scrollInStagesWrapper(-200)}>
        <ArrowInCircleIcon className={s.btnIcon} />
      </button>

      <div className={s.stagesWrapper} ref={stagesWrapperRef}>
        <ul className={cl(s.stages, className)}>
          {projects[projectIndex].stages.map((stage, index, arr) => (
            <ProjectStage
              setCurrentStageIndex={setCurrentStageIndex}
              key={uuidv4()}
              status={stage.status}
              index={index}
              isLineHidden={
                index === arr.length - 1 ||
                (stage.status === 'completed' && arr[index + 1].status === 'new')
              }
              className={
                stage.status === 'in_progress' ||
                (stage.status === 'new' && index > 1 && arr[index - 1].status === 'completed') ||
                (stage.status === 'completed' && index === arr.length - 1)
                  ? 'stageToScroll'
                  : ''
              }
              projectIndex={projectIndex}
            />
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={cl(s.btn, s.btn_right, {
          [s.btn_hidden]: !showRightOverlay,
        })}
        onClick={() => scrollInStagesWrapper(200)}>
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
