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
        text={`С\u00A0нами будешь \n\u2011\u00A0создавать веб-сайты и\u00A0приложения на\u00A0HTML, CSS и\u00A0JavaScript \n\u2011\u00A0использовать фреймворки и\u00A0библиотеки React, Angular, Vue.js, Bootstrap, Git и\u00A0API`}
        className={s.gridArea_2}
      />

      <LabCard
        title="СТЭК BACK"
        text={`С\u00A0нами будешь \n\u2011\u00A0практиковаться на\u00A0Java, Python, Ruby, PHP, C++ \n\u2011\u00A0создавать серверные приложения и\u00A0веб-сервисы \n\u2011\u00A0работать с\u00A0MySQL, PostgreSQL, MongoDB, SQLite`}
        className={s.gridArea_3}
      />
    </section>
  );
};
