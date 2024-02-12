import cl from 'classnames';
import { FC } from 'react';
import s from './ProjectStagesSlider.module.scss';

interface IProjectStagesSliderProps {
  className?: string;
}

export const ProjectStagesSlider: FC<IProjectStagesSliderProps> = ({ className = '' }) => {
  return (
    <ul className={cl(s.stages, className)}>
      <li className={s.stage}>
        <div className={s.stageTitle}>Этап 1</div>
      </li>
    </ul>
  );
};
