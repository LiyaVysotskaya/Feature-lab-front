import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../../../components/Main/Main';
import { FormRegister } from './FormRegister';
import s from '../auth.module.scss';
import { ROUTE_LOGIN } from '../../../constants/constants';

export const RegisterPage: FC = () => {
  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>
          <span>Регистрация</span>
          <span>/</span>
          <Link to={ROUTE_LOGIN} className={s.unhighlightedTitle}>
            Вход
          </Link>
        </h1>
        <FormRegister />
      </section>
    </Main>
  );
};
