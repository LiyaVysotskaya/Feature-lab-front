import cl from 'classnames';
import { FC } from 'react';
import s from './LabCard.module.scss';

interface ILabCardProps {
  className?: string;
  title: string;
  text: string;
}

export const LabCard: FC<ILabCardProps> = ({ className = '', title, text }) => {
  return (
    <article className={cl(s.card, className)}>
      <h3 className={cl(s.cardTitle)}>{title}</h3>
      <p className={cl(s.cardText)}>{text}</p>
    </article>
  );
};
