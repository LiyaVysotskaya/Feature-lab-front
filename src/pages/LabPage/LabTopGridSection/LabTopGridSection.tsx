import cl from 'classnames';
import { FC } from 'react';
import s from './LabTopGridSection.module.scss';

interface ILabTopGridSectionProps {
  className?: string;
}

export const LabTopGridSection: FC<ILabTopGridSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.section, className)}>
      <h2 className={cl(s.sectionTitle, s.sectionCell_title)}>
        Войди в IT с готовыми проектами и практическим опытом.
      </h2>

      <article className={cl(s.card, s.sectionCell_1)}>
        <h3 className={cl(s.cardTitle)}>ЧТО ЭТО</h3>
        <p className={cl(s.cardText)}>
          Площадка для старта твоей успешной карьеры в IT. Мы сами прошли путь от обучения до
          трудоустройства и знаем, что теоретических знаний недостаточно.
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_2)}>
        <h3 className={cl(s.cardTitle)}>КАК МЫ УЧИМ?</h3>
        <p className={cl(s.cardText)}>
          Мы помогаем
          <br />
          &#8211; быстро освоить на практике основной функционал работы &#8211; положить в портфолио
          собственный успешный проект и сократить время до долгожданного оффера
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_3)}>
        <h3 className={cl(s.cardTitle)}>КАК В ЖИЗНИ</h3>
        <p className={cl(s.cardText)}>
          &#8211; входишь в существующий проект <br />
          &#8211; активно применяешь все знания, полученные на обучающих курсах команде и с
          наставником
          <br />
          &#8211; получаешь в портфолио готовый проект
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_4)}>
        <h3 className={cl(s.cardTitle)}>СТАРТАПЕР</h3>
        <p className={cl(s.cardText)}>
          &#8211; приносишь и разрабатываешь идею своего проекта/придумываешь ее с нашей помощью
          <br />
          &#8211; реализуешь эту идею с разработчиками
          <br />
          &#8211; получаешь готовый &#171;старт-ап&#187; проект
        </p>
      </article>

      <p className={cl(s.sectionText, s.sectionCell_text)}>
        Мы сами прошли путь от обучения на онлайн-курсах до успешного трудоустройства и знаем, что
        теории недостаточно для старта успешной карьеры в новой отрасли
      </p>
    </section>
  );
};
