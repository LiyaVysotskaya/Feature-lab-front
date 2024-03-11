import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../../../components/Main/Main';
import { FormLogin } from './FormLogin';
import s from '../auth.module.scss';
import { ROUTE_REGISTER } from '../../../constants/routesConstants';

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
        <FormLogin />
      </section>
    </Main>
  );
};
