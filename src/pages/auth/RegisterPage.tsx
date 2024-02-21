import { FC } from 'react';
import { Main } from '../../components/Main/Main';
import s from './auth.module.scss';

export const RegisterPage: FC = () => {
  return (
    <Main className={s.auth}>
      <h1>Регистрация</h1>
      <form className={s.form}>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="pwd" />
        <input type="text" placeholder="повторите pwd" />
        <button>Регистрация</button>
      </form>
    </Main>
  );
};
