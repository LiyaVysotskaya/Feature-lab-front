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
        <h3 className={cl(s.cardTitle)}>ЕСЛИ ТЫ:</h3>
        <p className={cl(s.cardText)}>
          &#8211;&#160;frontend или backend разработчик
          <br />
          &#8211;&#160;системный или бизнес аналитик <br />
          &#8211;&#160;UI/UX дизайнер
          <br />
          &#8211;&#160;менеджер продукта <br />
          &#8211;&#160;проектный менеджер
          <br />
          &#8211;&#160;тестировщик
          <br />
          <br />
          Ждём тебя в&#160;команду!
        </p>
      </article>

      <p className={cl(s.sectionText, s.sectionCell_2)}>
        За&#160;что нас выбирают?
        <br />
        <br />
        &#8211;&#160;Персонализация практического обучения: закрываем индивидуальные пробелы
        в&#160;знаниях на&#160;практике
        <br />
        <br />
        &#8211;&#160;Гранулированный опыт решения рабочих задач: комплексная оценка hard и&#160;soft
        скиллов
        <br />
        <br />
        &#8211;&#160;Приобретение опыта взаимодействия как с&#160;нишевыми специалистами своей
        области, так и&#160;смежными командами
      </p>

      <article className={cl(s.card, s.sectionCell_3)}>
        <h3 className={cl(s.cardTitle)}>СТЭК FRONT</h3>
        <p className={cl(s.cardText)}>
          С&#160;нами будешь
          <br />
          &#8211;&#160;создавать веб-сайты и&#160;приложения на&#160;HTML, CSS и&#160;JavaScript
          <br />
          &#8211;&#160;использовать фреймворки и&#160;библиотеки React, Angular, Vue.js, Bootstrap,
          Git и&#160;API
        </p>
      </article>

      <article className={cl(s.card, s.sectionCell_4)}>
        <h3 className={cl(s.cardTitle)}>СТЭК BACK</h3>
        <p className={cl(s.cardText)}>
          С&#160;нами будешь
          <br />
          &#8211;&#160;практиковаться на&#160;Java, Python, Ruby, PHP, C++
          <br />
          &#8211;&#160;создавать серверные приложения и&#160;веб-сервисы
          <br />
          &#8211;&#160;работать с&#160;MySQL, PostgreSQL, MongoDB, SQLite
        </p>
      </article>
    </section>
  );
};
