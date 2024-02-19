import { FC } from 'react';
import { Main } from '../../components/Main/Main';
import s from './ContactPage.module.scss';

export const ContactPage: FC = () => {
  return (
    <Main>
      <h1 className={s.pageTitle}>Контакты</h1>
      <p className={s.subTitle}>Свяжитесь с нами</p>
    </Main>
  );
};
