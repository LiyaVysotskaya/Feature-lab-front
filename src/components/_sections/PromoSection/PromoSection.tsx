import cn from 'classnames';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { isPopupContactOpenAtom } from '../../../atoms/popupAtoms';
import { PageTitle } from '../../PageTitle/PageTitle';
import { PopupContact } from '../../_popups/PopupContact/PopupContact';
import { RoundButton } from '../../_ui/RoundButton/RoundButton';
import s from './PromoSection.module.scss';

type IProps = {
  className?: string;
};

export const PromoSection: FC<IProps> = ({ className = '' }) => {
  const [, setIsOpen] = useAtom(isPopupContactOpenAtom);

  return (
    <section aria-label="Promo" className={cn(s.promo, className)}>
      <div className={s.bg_blue} />

      <PageTitle className={s.title} pageTitle="Фичлаб" />

      <div className={s.headlines}>
        <p className={s.headline}>Разрабатываем IT&#8209;проекты любой сложности</p>
        <p className={s.headline}>Обучаем специалистов</p>
        <p className={s.headline}>Создаём продукты</p>
      </div>

      <RoundButton
        className={s.promoBtn}
        onClick={() => setIsOpen(true)}
        theme="promo"
        text="Свяжитесь с&nbsp;нами"
      />

      <PopupContact />
    </section>
  );
};
