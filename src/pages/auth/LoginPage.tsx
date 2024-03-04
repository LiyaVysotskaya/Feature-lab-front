import { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { FormLogin } from './FormLogin/FormLogin';
import s from './auth.module.scss';
import { ROUTE_REGISTER } from '../../constants/constants';

export const LoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    resetForm({
      email: '',
      password: '',
    });
  };
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
        <FormLogin
          handleChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
          values={values}
          isLoading={isLoading}
        />
      </section>
    </Main>
  );
};
