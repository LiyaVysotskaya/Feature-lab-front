import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { ROUTE_REGISTER } from '../../constants/routesConstants';
import { LoginForm } from '../../components/_auth-forms/LoginForm';
import s from './AuthPages.module.scss';

export const LoginPage: FC = () => {
  return (
    <Main>
      <section className={s.contentContainer}>
        <h1 className={s.title}>
          <Link to={ROUTE_REGISTER} className={s.unhighlightedTitle}>
            Регистрация
          </Link>
          <span>/</span>
          <span>Вход</span>
        </h1>
        <LoginForm />
      </section>
    </Main>
  );
};
