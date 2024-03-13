import cl from 'classnames';
import { FC } from 'react';
import { LabCard } from '../LabCard/LabCard';
import { LabText } from '../LabText/LabText';
import s from './LabTopGridSection.module.scss';

interface ILabTopGridSectionProps {
  className?: string;
}

export const LabTopGridSection: FC<ILabTopGridSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.section, className)}>
      <h2 className={cl(s.sectionTitle, s.sectionCell_title)}>
        Войди в&#160;IT с&#160;готовыми проектами и&#160;практическим опытом.
      </h2>

      <LabCard
        title="КТО МЫ?"
        text="Площадка для старта твоей успешной карьеры в IT. &#10;Мы сами прошли путь от обучения до трудоустройства и знаем, что теоретических знаний
          недостаточно."
        className={s.sectionCell_1}
      />

      <LabCard
        title="МЕНТОРСТВО"
        text="Мы помогаем &#10;&#8209;&nbsp;быстро освоить на практике основной функционал работы &#10;&#8209;&nbsp;положить в портфолио собственный успешный проект и сократить время до
        долгожданного оффера"
        className={s.sectionCell_2}
      />

      <LabCard
        title="«КАК В ЖИЗНИ»"
        text="&#8209;&nbsp;входишь в существующий проект &#10;&#8209;&nbsp;активно применяешь все знания, полученные на обучающих курсах команде и с
        наставником &#10;&#8209;&nbsp;получаешь в портфолио готовый проект"
        className={s.sectionCell_3}
      />

      <LabCard
        title="«СТАРТАПЕР»"
        text="&#8209;&nbsp;приносишь и разрабатываешь идею своего проекта/придумываешь ее с нашей помощью &#10;&#8209;&nbsp;реализуешь эту идею с разработчиками &#10;&#8209;&nbsp;получаешь готовый &#171;старт-ап&#187; проект"
        className={s.sectionCell_4}
      />

      <LabText
        text="Мы сами прошли путь от обучения на онлайн-курсах до успешного трудоустройства и знаем, что теории недостаточно для старта успешной карьеры в новой отрасли."
        className={s.sectionCell_text}
      />
    </section>
  );
};
