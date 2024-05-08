import cn from 'classnames';
import { FC } from 'react';
import s from './LabCard.module.scss';

type IProps = {
  className?: string;
  title: string;
  text: string;
};

export const LabCard: FC<IProps> = ({ className = '', title, text }) => {
  return (
    <article className={cn(s.card, className)}>
      <h3 className={cn(s.cardTitle)}>{title}</h3>
      <p className={cn(s.cardText)}>{text}</p>
    </article>
  );
};
