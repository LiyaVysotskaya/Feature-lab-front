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
        Войди в IT с готовыми проектами и практическим опытом.
      </h2>

      <article className={cl(s.card, s.sectionCell_2)}>
        <h3 className={cl(s.cardTitle)}>ЧТО ЭТО</h3>
        <p className={cl(s.cardText)}>
          Площадка для старта твоей успешной карьеры в&#160;IT. Мы&#160;сами прошли путь
          от&#160;обучения до&#160;трудоустройства и&#160;знаем, что теоретических знаний
          недостаточно.
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_3)}>
        <h3 className={cl(s.cardTitle)}>КАК МЫ УЧИМ?</h3>
        <p className={cl(s.cardText)}>
          Мы&#160;помогаем
          <br />
          &#8211;&#160;быстро освоить на&#160;практике основной функционал работы
          &#8211;&#160;положить в&#160;портфолио собственный успешный проект и&#160;сократить время
          до&#160;долгожданного оффера
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_4)}>
        <h3 className={cl(s.cardTitle)}>КАК В ЖИЗНИ</h3>
        <p className={cl(s.cardText)}>
          &#8211;&#160;входишь в&#160;существующий проект <br />
          &#8211;&#160;активно применяешь все знания, полученные на&#160;обучающих курсах команде
          и&#160;с&#160;наставником
          <br />
          &#8211;&#160;получаешь в&#160;портфолио готовый проект
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_5)}>
        <h3 className={cl(s.cardTitle)}>СТАРТАПЕР</h3>
        <p className={cl(s.cardText)}>
          &#8211;&#160;приносишь и&#160;разрабатываешь идею своего проекта/придумываешь
          ее&#160;с&#160;нашей помощью
          <br />
          &#8211;&#160;реализуешь эту идею с&#160;разработчиками
          <br />
          &#8211;&#160;получаешь готовый &#171;старт-ап&#187; проект
        </p>
      </article>

      <p className={cl(s.sectionText, s.sectionCell_6)}>
        Мы&#160;сами прошли путь от&#160;обучения на&#160;онлайн-курсах до&#160;успешного
        трудоустройства и&#160;знаем, что теории недостаточно для старта успешной карьеры
        в&#160;новой отрасли
      </p>
    </section>
  );
};
