import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import Checkmark from './checkmark.svg?react';
import s from './ProgressCircle.module.scss';

type IProps = {
  className?: string;
  stagesInProgress: number;
  stagesCompleted: number;
  max: number;
};

export const ProgressCircle: FC<IProps> = ({
  className = '',
  stagesCompleted,
  stagesInProgress,
  max,
}) => {
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    if (stagesCompleted < max) {
      setProgressValue(Math.round((stagesCompleted / max) * 100));
    } else {
      setProgressValue(0);
    }
  }, []);

  return (
    <div className={cn(s.progressWrap, className)}>
      <CircularProgressbarWithChildren
        className={s.progress}
        value={progressValue}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: 'round',
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Colors
          pathColor: `var(--dark-blue)`,
          trailColor: 'var(--white-60)',
        })}>
        {stagesCompleted < max ? (
          <span className={s.progressText}>
            {stagesCompleted < max && `${stagesCompleted + stagesInProgress}/${max}`}
          </span>
        ) : (
          <span className={s.progressText}>
            <Checkmark className={s.progressIcon} />
          </span>
        )}
      </CircularProgressbarWithChildren>
    </div>
  );
};
