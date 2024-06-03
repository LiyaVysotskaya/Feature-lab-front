import cn from 'classnames';
import { FC } from 'react';
import { useMatch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { LAB_PROJECT_URL } from '../../../constants/externalLinks';
import { ROUTE_ED_TECH } from '../../../constants/routesConstants';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { RoundButton } from '../../_ui/RoundButton/RoundButton';
import s from './LabSection.module.scss';

type IProps = {
  className?: string;
};

export const LabSection: FC<IProps> = ({ className = '' }) => {
  const handleOnBtnClick = () => {
    window.open(LAB_PROJECT_URL, '_blank');
  };

  const isLabPage = useMatch(ROUTE_ED_TECH);

  return (
    <section className={cn(s.labSection, className)}>
      {!isLabPage && <SectionTitle text="Ed-tech" className={s.title} />}

      <div className={s.sectionContent}>
        <ul className={s.list}>
          <li className={cn(s.card, s.cardPosition, s.cardPosition_1)} key={uuidv4()}>
            <p className={s.cardNumber}>0.1</p>
            <p className={s.cardText}>Площадка для старта твоей успешной карьеры в IT</p>
          </li>
          <li className={cn(s.card, s.cardPosition, s.cardPosition_2)} key={uuidv4()}>
            <p className={s.cardNumber}>0.2</p>
            <p className={s.cardText}>
              Активно применишь все знания, полученные на обучающих курсах
            </p>
          </li>
          <li className={cn(s.card, s.cardPosition, s.cardPosition_3)} key={uuidv4()}>
            <p className={s.cardNumber}>0.3</p>
            <p className={s.cardText}>
              Получишь в портфолио готовый проект под ключ, сделанный тобой от нуля до результата
            </p>
          </li>
          <li className={cn(s.card, s.cardPosition, s.cardPosition_4)} key={uuidv4()}>
            <p className={s.cardNumber}>0.4</p>
            <p className={s.cardText}>
              Поможем собрать рабочую команду под твою идею или ты войдешь в существующий проект
            </p>
          </li>
          <li className={cn(s.card, s.cardPosition, s.cardPosition_5)} key={uuidv4()}>
            <p className={s.cardNumber}>0.5</p>
            <p className={s.cardText}>
              Самые крутые проекты подготовим для показа инвесторам, а также поможем их найти
            </p>
          </li>
          <li className={cn(s.card, s.cardPosition, s.cardPosition_6)} key={uuidv4()}>
            <p className={s.cardNumber}>0.6</p>
            <p className={s.cardText}>
              Получишь официальное рекомендательное письмо и рабочий стаж в IT-компании
            </p>
          </li>
        </ul>
        <RoundButton
          theme="white"
          text="Лаборатория"
          className={cn(s.labButton)}
          onClick={handleOnBtnClick}
        />
      </div>
    </section>
  );
};
