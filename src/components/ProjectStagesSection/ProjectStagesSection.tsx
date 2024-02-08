import cl from 'classnames';
import { FC } from 'react';
import { Text } from '../ui/Text/Text';
import s from './ProjectStagesSection.module.scss';
import { ProjectStagesSlider } from './ProjectStagesSlider/ProjectStagesSlider';

interface IProjectStagesProps {
  className?: string;
}

export const ProjectStagesSection: FC<IProjectStagesProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.section, className)}>
      <div className={cl(s.columns)}>
        <div className={cl(s.column)}>
          <Text view="gost-3" tag="p" className={cl(s.subTitle)}>
            Текущий этап
          </Text>
          <Text view="germano-3" tag="h2" line className={cl(s.title)}>
            Название этапа
          </Text>
          <Text view="gost-1" tag="p" className={cl(s.date)}>
            срок выполнения: 07.09.2023
          </Text>
        </div>
        <Text view="gost-2" tag="p" className={cl(s.info)}>
          Кратенькое описание что вообще происходит на этом этапе. На 2-3 строчки максимум.
        </Text>
      </div>
      <ProjectStagesSlider />
    </section>
  );
};
