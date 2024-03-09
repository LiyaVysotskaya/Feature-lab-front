import { FC } from 'react';
import { Main } from '../../../components/Main/Main';
import s from '../auth.module.scss';

export const PasswordRestorePage: FC = () => {
  return (
    <Main className={s.auth}>
      <h1>Типа вход, но восстановление пароля</h1>
      <form className={s.form}>
        <input type="email" placeholder="Email" />
        <button>Сменить пароль</button>
      </form>
    </Main>
  );
};
