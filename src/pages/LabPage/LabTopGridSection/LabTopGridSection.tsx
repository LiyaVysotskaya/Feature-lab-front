import cl from 'classnames';
import { FC } from 'react';
import s from './LabTopGridSection.module.scss';

interface ILabTopGridSectionProps {
  className?: string;
}

export const LabTopGridSection: FC<ILabTopGridSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.section, className)}>
      <h2 className={cl(s.sectionTitle, s.sectionCell_1)}>
        Персональные решения для достижения ваших целей
      </h2>

      <article className={cl(s.card, s.sectionCell_2)}>
        <h3 className={cl(s.cardTitle)}>ЧТО ЭТО?</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_3)}>
        <h3 className={cl(s.cardTitle)}>МЕНТОРСТВО</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_4)}>
        <h3 className={cl(s.cardTitle)}>ПОТЕНЦИАЛ</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_5)}>
        <h3 className={cl(s.cardTitle)}>ЧТО-ТО ЕЩЁ</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <p className={cl(s.sectionText, s.sectionCell_6)}>
        Какой-нибудь слоган/начало истории/несколько слов о том, какие мы крутые и насколько
        необходимы просматривающему страницу. 120-150 знаков.
      </p>
    </section>
  );
};
