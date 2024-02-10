import cl from 'classnames';
import { FC } from 'react';
import { EllipseIcon } from '../../ui/icons';
import s from './ProjectStage.module.scss';

type StageProps = {
  status: 'complete' | 'inProgress' | 'notStarted';
  index: number;
  className?: string;
  isLast?: boolean;
  id?: string;
};

export const ProjectStage: FC<StageProps> = ({
  status,
  id = '', // for autoscroll
  className = '',
  index,
  isLast,
}) => {
  const stageState = status !== 'notStarted';

  return (
    <div id={id} className={cl(s.stage, className)}>
      {!isLast && (
        <div
          className={cl(s.line, {
            [s.line_notStarted]: status === 'notStarted',
            [s.line_size_half]: status === 'inProgress',
          })}
        />
      )}
      <EllipseIcon status={status} />
      <p className={cl(s.stage__text, stageState && s.stage__text_active)}>Этап {index}</p>
    </div>
  );
};
