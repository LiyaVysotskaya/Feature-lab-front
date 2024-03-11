import { FC } from 'react';
import { Main } from '../../../components/Main/Main';
import s from '../auth.module.scss';

export const PasswordResetPage: FC = () => {
  return (
    <Main className={s.auth}>
      <h1>Смена пароля</h1>
      <form className={s.form}>
        <input type="password" placeholder="Новый пароль" />
        <input type="password" placeholder="Повторите пароль" />
        <button>Сменить пароль</button>
      </form>
    </Main>
  );
};
