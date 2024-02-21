import cl from 'classnames';
import { FC } from 'react';
import { ProjectStagesSection } from '../../../components/ProjectStagesSection/ProjectStagesSection';
import s from './ProfileProject.module.scss';

interface IProfileProjectProps {
  className?: string;
}

export const ProfileProject: FC<IProfileProjectProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.project, className)}>
      {/* Компонент информации о проекте */}

      <ProjectStagesSection />

      {/* Компонент документы проекта */}
    </div>
  );
};
