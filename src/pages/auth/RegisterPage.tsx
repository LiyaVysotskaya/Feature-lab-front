import { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../../components/Main/Main';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { FormRegister } from './FormRegister/FormRegister';
import s from './auth.module.scss';
import { ROUTE_LOGIN } from '../../constants/constants';

export const RegisterPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    resetForm({
      email: '',
      password: '',
      repeatPassword: '',
    });
  };
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
        <FormRegister
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
