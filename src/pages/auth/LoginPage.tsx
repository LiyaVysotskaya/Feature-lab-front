import { FC } from 'react';
import { Main } from '../../components/Main/Main';
import s from './auth.module.scss';

export const LoginPage: FC = () => {
  return (
    <Main className={s.auth}>
      <h1>Вход</h1>
      <form className={s.form}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
      </form>
    </Main>
  );
};
