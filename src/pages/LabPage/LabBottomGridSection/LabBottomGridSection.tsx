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
        title="ЕСЛИ ТЫ:"
        text="&#8209;&#160;frontend или backend разработчик &#10;&#8209;&nbsp;системный или бизнес аналитик &#10;&#8209;&nbsp;UI/UX дизайнер &#10;&#8209;&nbsp;менеджер продукта &#10;&#8209;&nbsp;проектный менеджер &#10;&#8209;&nbsp;тестировщик &#10;Ждём тебя в&#160;команду!"
        className={s.sectionCell_1}
      />

      <LabText
        text="За&#160;что нас выбирают? &#10;&#8209;&nbsp;Персонализация практического обучения: закрываем индивидуальные пробелы в&#160;знаниях на&#160;практике &#10;&#8209;&nbsp;Гранулированный опыт решения рабочих задач: комплексная оценка hard и&#160;soft скиллов &#10;&#8209;&nbsp;Приобретение опыта взаимодействия как с&#160;нишевыми специалистами своей области, так и&#160;смежными командами"
        className={s.sectionCell_text}
      />

      <LabCard
        title="СТЭК FRONT"
        text="С&#160;нами будешь &#10;&#8209;&nbsp;создавать веб-сайты и&#160;приложения на&#160;HTML, CSS и&#160;JavaScript &#10;&#8209;&nbsp;использовать фреймворки и&#160;библиотеки React, Angular, Vue.js, Bootstrap, Git и&#160;API"
        className={s.sectionCell_2}
      />

      <LabCard
        title="СТЭК BACK"
        text="С&#160;нами будешь &#10;&#8209;&nbsp;практиковаться на&#160;Java, Python, Ruby, PHP, C++ &#10;&#8209;&nbsp;создавать серверные приложения и&#160;веб-сервисы &#10;&#8209;&nbsp;работать с&#160;MySQL, PostgreSQL, MongoDB, SQLite"
        className={s.sectionCell_3}
      />
    </section>
  );
};
