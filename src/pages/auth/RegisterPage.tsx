import { FC } from 'react';
import { Main } from '../../components/Main/Main';
import s from './auth.module.scss';

export const RegisterPage: FC = () => {
  return (
    <Main>
      <h1>
        Регистрация / <span>Вход</span>
      </h1>
      <form className={s.form}>
        <FormRegister
          handleChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
          values={values}
          isLoading={isLoading}
        />
      </form>
    </Main>
  );
};
