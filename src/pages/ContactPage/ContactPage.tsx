import { FC } from 'react';
import { Main } from '../../components/Main/Main';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { ContactsContainer } from './ContactsContainer/ContactsContainer';
import s from './ContactPage.module.scss';

export const ContactPage: FC = () => {
  return (
    <Main>
      <PageTitle className={s.pageTitle} pageTitle="Контакты" subTitle="Свяжитесь с нами" />

      <ContactsContainer />
    </Main>
  );
};
