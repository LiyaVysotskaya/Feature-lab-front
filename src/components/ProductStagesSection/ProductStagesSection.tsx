import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TProductStage } from '../../types/data';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ProductStage } from './ProductStage/ProductStage';
import s from './ProductStagesSection.module.scss';

interface IProps {
  className?: string;
  stages: TProductStage[];
}

export const ProductStagesSection: FC<IProps> = ({ className = '', stages }) => {
  // Sort stages by phase_num
  const sortedStages = stages.slice().sort((a, b) => a.phase_num - b.phase_num);

  return (
    <section className={cl(s.stages, className)}>
      <SectionTitle text="Этапы работы" className={s.stagesTitle} />
      <ul className={s.list}>
        {sortedStages.map((stage) => (
          <ProductStage key={uuidv4()} stage={stage} stageNum={stage.phase_num} />
        ))}
      </ul>
    </section>
  );
};
