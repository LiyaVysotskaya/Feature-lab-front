import cn from 'classnames';
import { FC } from 'react';
import 'react-multi-carousel/lib/styles.css';
import s from './TeamGradientSlide.module.scss';

type IProps = {
  className?: string;
};

export const TeamGradientSlide: FC<IProps> = ({ className = '' }) => {
  return (
    <div className={cn(s.card, className)}>
      <div className={s.imgContainer}>
        <div className={s.radiant} />
      </div>
    </div>
  );
};
