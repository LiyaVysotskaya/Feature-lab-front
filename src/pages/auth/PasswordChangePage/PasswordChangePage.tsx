import { FC } from 'react';
import { Main } from '../../../components/Main/Main';
import s from '../auth.module.scss';
import FormPasswordChange from './FormPasswordChange';

export const PasswordChangePage: FC = () => {
  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>Смена пароля</h1>
        <FormPasswordChange />
      </section>
    </Main>
  );
};
