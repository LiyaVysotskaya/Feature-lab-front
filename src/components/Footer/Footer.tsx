import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import s from './Footer.module.scss';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { FormFooter } from './FormFooter/FormFooter';

type IFooterProps = {};

const Footer: React.FC<IFooterProps> = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <h2 className={s.footerTitle}>Свяжитесь с нами</h2>
        <FormFooter
          errors={errors}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          isValid={isValid}
          values={values}
          isLoading={isLoading}
        />
      </div>
      {/*
      <div className={s.basementContainer}>
        <Link className={s.basementElement} />
        <p className={s.basementElement} />
        <p className={s.basementElement} />
        <Link className={s.basementElement} />
        <p className={s.basementElement} />
      </div> */}
    </footer>
  );
};

export default Footer;
