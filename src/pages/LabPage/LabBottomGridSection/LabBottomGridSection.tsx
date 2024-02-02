import cl from 'classnames';
import { FC } from 'react';
import s from './LabBottomGridSection.module.scss';

interface ILabBottomGridSectionProps {
  className?: string;
}

export const LabBottomGridSection: FC<ILabBottomGridSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.section, className)}>
      <article className={cl(s.card, s.sectionCell_1)}>
        <h3 className={cl(s.cardTitle)}>
          7-ОЙ КАКОЙ-НИБУДЬ ПУНКТ, НЕ СОВСЕМ ПЛЮС - ОНИ ПОСЕРЕДИНЕ, СКОРЕЕ ОБЩЕЕ ЧТО-ТО
        </h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <p className={cl(s.sectionText, s.sectionCell_2)}>
        Что-нибудь про мастерскую, как пришли к этой идее, боли пользователя, все дела.
        <br />
        <br />
        2-3 абзаца, на 300 знаков примерно.
      </p>

      <article className={cl(s.card, s.sectionCell_3)}>
        <h3 className={cl(s.cardTitle)}>ИНФА КАКАЯ-НИБУДЬ</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_4)}>
        <h3 className={cl(s.cardTitle)}>ПРО ВЗАИМОДЕЙСТВИЕ С ДИЗАЙНЕРАМИ</h3>
        <p className={cl(s.cardText)}>
          До 60 знаков, 2-3 строчки До 60 знаков, 2-3 строчки До До До
        </p>
      </article>
    </section>
  );
};
