import { FC } from 'react';
import cl from 'classnames';
import s from './ProfileProject.module.scss';

interface IProfileProjectProps {
  className?: string;
}

export const ProfileProject: FC<IProfileProjectProps> = ({ className = '' }) => {
  return (
    <div className={cl(s.project, className)}>
      {/* Компонент информации о проекте */}

      {/* Компонент Этапы проекта */}

      {/* Компонент документы проекта */}
    </div>
  );
};
