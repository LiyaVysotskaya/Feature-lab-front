import cl from 'classnames';
import { FC } from 'react';
import { LabCard } from '../LabCard/LabCard';
import { LabText } from '../LabText/LabText';
import s from './LabTopGridSection.module.scss';

type IProps = {
  className?: string;
};

export const LabTopGridSection: FC<IProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.section, className)}>
      <h2 className={cl(s.sectionTitle, s.gridArea_title)}>
        Войди в&#160;IT с&#160;готовыми проектами и&#160;практическим опытом.
      </h2>

      <LabCard
        title="КТО МЫ?"
        text="Площадка для старта твоей успешной карьеры в IT"
        className={s.gridArea_1}
      />

      <LabCard
        title="МЕНТОРСТВО"
        text="Поможем в развитии профессиональных навыков, достижении карьерных целей и обеспеченим гладкое вхождения в индустрию информационных технологий"
        className={s.gridArea_2}
      />

      <LabCard
        title="«КАК В ЖИЗНИ»"
        text={`Входишь в готовый проект и работаешь над ним в команде\n\n`}
        className={s.gridArea_3}
      />

      <LabCard
        title="«СТАРТАПЕР»"
        text={`Приносишь и реализуешь идею собственного проекта\n\n`}
        className={s.gridArea_4}
      />

      <LabText
        text={`Если ты:\n \u2022\u00A0front или back разработчик\n \u2022\u00A0системный или бизнес аналитик\n \u2022\u00A0UI/UX дизайнер\n \u2022\u00A0ПМ/ПО\n \u2022\u00A0тестировщик\n\nЖдём тебя в команду!`}
        className={s.gridArea_text}
      />
    </section>
  );
};
