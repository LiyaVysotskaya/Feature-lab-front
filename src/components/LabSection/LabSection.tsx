import cl from 'classnames';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LAB_PROJECT_URL } from '../../constants/companyDetails';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Button } from '../ui/Button/Button';
import s from './LabSection.module.scss';

export interface ILabSectionProps {
  className?: string;
}

export const LabSection: FC<ILabSectionProps> = ({ className = '' }) => {
  const handleOnBtnClick = () => {
    window.open(LAB_PROJECT_URL, '_blank');
  };

  return (
    <section className={cl(s.labSection, className)}>
      <SectionTitle text="Ed-tech" />

      <div className={s.sectionContent}>
        <ul className={s.list}>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_1)} key={uuidv4()}>
            <p className={s.cardNumber}>0.1</p>
            <p className={s.cardText}>Площадка для старта твоей успешной карьеры в IT</p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_2)} key={uuidv4()}>
            <p className={s.cardNumber}>0.2</p>
            <p className={s.cardText}>
              Активно применишь все знания, полученные на обучающих курсах
            </p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_3)} key={uuidv4()}>
            <p className={s.cardNumber}>0.3</p>
            <p className={s.cardText}>
              Получишь в портфолио готовый проект под ключ, сделанный тобой от нуля до результата
            </p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_4)} key={uuidv4()}>
            <p className={s.cardNumber}>0.4</p>
            <p className={s.cardText}>
              Поможем собрать рабочую команду под твою идею или ты войдешь в существующий проект
            </p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_5)} key={uuidv4()}>
            <p className={s.cardNumber}>0.5</p>
            <p className={s.cardText}>
              Самые крутые проекты подготовим для показа инвесторам, а также поможем их найти
            </p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_6)} key={uuidv4()}>
            <p className={s.cardNumber}>0.6</p>
            <p className={s.cardText}>
              Получишь официальное рекомендательное письмо и рабочий стаж в IT-компании
            </p>
          </li>
        </ul>
        <Button
          theme="white"
          text="Лаборатория"
          className={cl(s.labButton)}
          onClick={handleOnBtnClick}
        />
      </div>
    </section>
  );
};
