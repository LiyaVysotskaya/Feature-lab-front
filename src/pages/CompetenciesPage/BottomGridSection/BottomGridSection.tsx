import { FC } from 'react';
import cl from 'classnames';
import s from './BottomGridSection.module.scss';

export const BottomGridSection: FC = () => {
  return (
    <section className={cl(s.section)}>
      <article className={cl(s.card, s.sectionCell_1)}>
        <h3 className={cl(s.cardTitle)}>СИСТЕМЫ ВЗАИМОДЕЙСТВИЯ</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <p className={cl(s.sectionText, s.sectionCell_2)}>
        Здесь может быть прям история какая-то, на 3-4 абзаца, общее количество знаков около
        400-450.
        <br />
        <br />
        Что-нибудь нормальное и приземленное, без умных слов - их и так очень много вокруг, можно на
        контрасте сыграть.
        <br />
        <br />Я понимаю, что business to business и все дела, но там же всё равно менеджеры-люди
        работают.
      </p>

      <article className={cl(s.card, s.sectionCell_3)}>
        <h3 className={cl(s.cardTitle)}>GAMEDEV</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_4)}>
        <h3 className={cl(s.cardTitle)}>УПРАВЛЕНИЕ ДАННЫМИ</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_5)}>
        <h3 className={cl(s.cardTitle)}>МОБИЛЬНАЯ РАЗРАБОТКА</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>
    </section>
  );
};
