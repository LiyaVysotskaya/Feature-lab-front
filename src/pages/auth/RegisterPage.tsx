import { FC, FormEvent, useState } from 'react';
import { Main } from '../../components/Main/Main';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FormRegister from './FormRegister/FormRegister';
import s from './auth.module.scss';

export const RegisterPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    name: '',
    email: '',
    project: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    resetForm({
      name: '',
      email: '',
      project: '',
    });
  };
  return (
    <Main>
      <section className={s.registerContainer}>
        <h1 className={s.title}>
          <span>Регистрация</span>
          <span>/</span>
          <span className={s.unhighlightedTitle}>Вход</span>
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
