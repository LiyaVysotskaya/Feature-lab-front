import React from 'react';
import s from './Footer.module.scss';
import { FormFooter } from './FormFooter/FormFooter';

type IFooterProps = {};

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <FormFooter />
      </div>

      <div className={s.basementContainer}>
        <div className={s.firstContainer}>
          <p className={s.basementElement}>Москва, пр-кт Ленина 2А</p>
          <div className={s.telephonesContainer}>
            <p className={s.telephonesElement}>8 800 200-50-50</p>
            <p className={s.telephonesElement}>+7 916 166-75-00</p>
          </div>
        </div>
        <div className={s.secondContainer}>
          <p className={s.basementElement}>featurelab@yandex.ru</p>
          <p className={s.basementElement}>
            ИП Вавилов И.Л
            <br />
            ОГРН 1234 1234 1234 1234 1234
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
