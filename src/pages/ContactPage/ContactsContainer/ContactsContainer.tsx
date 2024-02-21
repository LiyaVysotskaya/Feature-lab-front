import { FC } from 'react';
import s from './ContactsContainer.module.scss';

export const ContactsContainer: FC = () => {
  return (
    <section className={s.contentContact}>
      <div className={s.firstContainer}>
        <div className={s.wrap}>
          <p className={s.text}>Москва,</p>
          <p className={s.text}>пр-кт Ленина 2А</p>
          <span className={s.description}>адрес</span>
        </div>
        <div className={s.wrap}>
          <p className={s.text}>fitchlab@gmail.com</p>
          <span className={s.description}>e-mail</span>
        </div>
      </div>
      <div className={s.secondContainer}>
        <div className={s.wrap}>
          <p className={s.text}>8 800 200 50 50</p>
          <p className={s.text}>8 916 166 75 00</p>
          <span className={s.description}>телефоны</span>
        </div>
        <div className={s.wrap}>
          <p className={s.text}>ololo</p>
          <span className={s.description}>социальные сети</span>
        </div>
      </div>
    </section>
  );
};
