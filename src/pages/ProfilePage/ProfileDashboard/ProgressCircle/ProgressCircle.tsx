import cl from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { Text } from '../../../../components/ui/Text/Text';
import s from './ProgressCircle.module.scss';

interface ProgressCircleProps {
  className?: string;
  stagesInProgress: number;
  stagesCompleted: number;
  max: number;
}

export const ProgressCircle: FC<ProgressCircleProps> = ({
  className = '',
  stagesCompleted,
  stagesInProgress,
  max,
}) => {
  const [radius, setRadius] = useState<number>(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const { width } = svgRef.current.getBoundingClientRect();
      const circleRadius = 0.45 * width;
      setRadius(circleRadius);
    }
  }, []);

  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const percentage = (stagesCompleted / max) * 100;
  const dashOffset = circumference - (percentage * circumference) / 100;

  return (
    <div className={cl(s.progressWrap, className)}>
      <div className={s.progress}>
        {stagesCompleted < max ? (
          <Text view="germano-5" className={s.progressText}>
            {stagesCompleted < max && `${stagesCompleted + stagesInProgress}/${max}`}
          </Text>
        ) : (
          <Text view="germano-4" className={s.progressText}>
            ✔
          </Text>
        )}
        <svg ref={svgRef} className={cl(s.svg)} xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle
            strokeDasharray={strokeDasharray}
            strokeDashoffset={stagesCompleted < max ? dashOffset : strokeDasharray}
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};
