import cl from 'classnames';
import { FC } from 'react';
import { LabCard } from '../LabCard/LabCard';
import { LabText } from '../LabText/LabText';
import s from './LabBottomGridSection.module.scss';

interface ILabBottomGridSectionProps {
  className?: string;
}

export const LabBottomGridSection: FC<ILabBottomGridSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.section, className)}>
      <LabCard
        title="ПОЧЕМУ МЫ?"
        text={`Мы сами прошли путь от обучения на онлайн-курсах до успешного трудоустройства и знаем, что теории недостаточно для старта успешной карьеры в новой отрасли\n\n`}
        className={s.gridArea_1}
      />

      <LabText
        text={`За что нас выбирают? \n\nЗакрываем индивидуальные пробелыв знаниях на практике с приобретением опыта взаимодействия как с нишевыми специалистами своей области, так и смежными командами.`}
        className={s.gridArea_text}
      />

      <LabCard
        title="СТЭК FRONT"
        text={`Будем работать на HTML, CSS и JavaScript и использовать фреймворки и библиотеки React, Angular, Vue.js, Bootstrap, Git и\u00A0API`}
        className={s.gridArea_2}
      />

      <LabCard
        title="СТЭК BACK"
        text={`Будем кодить на\u00A0Java, Python, Ruby, PHP, C++ и работать с MySQL, PostgreSQL, MongoDB, SQLite`}
        className={s.gridArea_3}
      />
    </section>
  );
};
