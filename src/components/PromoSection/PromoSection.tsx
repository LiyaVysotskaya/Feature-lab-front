import cl from 'classnames';
import { FC, useState } from 'react';
import { PopupContact } from '../PopupContact/PopupContact';
import { RoundButton } from '../ui/RoundButton/RoundButton';
import s from './PromoSection.module.scss';

type IProps = {
  className?: string;
};

export const PromoSection: FC<IProps> = ({ className = '' }) => {
  const [isPopupContactOpen, setPopupContactIsOpen] = useState(false);

  const closePopupContactPopups = () => {
    setPopupContactIsOpen(false);
  };

  return (
    <section aria-label="Promo" className={cl(s.promo, className)}>
      <div className={s.bg_blue} />

      <h1 className={s.title}>фичлаб</h1>
      <div className={s.divider} />

      <div className={s.headlines}>
        <p className={s.headline}>Разрабатываем IT&#8209;проекты любой сложности</p>
        <p className={s.headline}>Обучаем специалистов</p>
        <p className={s.headline}>Создаём продукты</p>
      </div>
      <RoundButton
        className={s.promo__btn}
        onClick={() => setPopupContactIsOpen(true)}
        theme="promo"
        text="Свяжитесь с&nbsp;нами"
      />

      <PopupContact isOpen={isPopupContactOpen} onClose={closePopupContactPopups} />
    </section>
  );
};
