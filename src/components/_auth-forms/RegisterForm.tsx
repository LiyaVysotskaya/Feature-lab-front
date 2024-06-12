import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRegQuery } from '../../api/queries';
import { EMAIL_HINT_TEXT, PASSWORD_HINT_TEXT } from '../../constants/tooltipContent';
import { regSchema } from '../../schemas/authSchemas';
import { TRegFormData } from '../../types/formDataTypes';
import { AuthFormInput } from './AuthFormInput/AuthFormInput';
import { PopupAgreement } from '../_popups/PopupAgreement/PopupAgreement';
import { PopupPrivacyPolicy } from '../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../_ui/icons/CheckBoxIcon/CheckBoxIcon';
import s from './AuthForms.module.scss';

type IProps = {
  responseToSuccessfulSumbit: (newEmail: string) => void;
};

export const RegisterForm: FC<IProps> = ({ responseToSuccessfulSumbit }) => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isPopupUserAgreementOpen, setIsPopupUserAgreementOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const methods = useForm({
    resolver: yupResolver(regSchema),
    defaultValues: {
      email: '',
      password: '',
      re_password: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
    reset,
  } = methods;

  const onRegSuccess = (email: string) => {
    responseToSuccessfulSumbit(email);
    reset();
  };

  const { mutate: mutateRegData, isPending } = useRegQuery(onRegSuccess);

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = (values: TRegFormData) => {
    mutateRegData(values);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className={s.form} method="POST" onSubmit={methods.handleSubmit(onSubmit)}>
          <fieldset className={s.fieldset}>
            <AuthFormInput
              name="email"
              type="email"
              placeHolder="Email"
              ariaLabel="Input email"
              labelNum="01"
              labelText="Email"
              hintText={EMAIL_HINT_TEXT}
            />

            <AuthFormInput
              name="password"
              type="password"
              placeHolder="Пароль"
              ariaLabel="Input password"
              labelNum="02"
              labelText="Пароль"
              hintText={PASSWORD_HINT_TEXT}
            />

            <AuthFormInput
              name="re_password"
              type="password"
              placeHolder="Повторите пароль"
              ariaLabel="Input repeat password"
              labelNum="02.1"
              labelText="Пароль"
              hintText={PASSWORD_HINT_TEXT}
            />
          </fieldset>

          <div className={s.checkboxContainer}>
            <label className={s.checkboxLabel} htmlFor="checkboxRegistration">
              <CheckBoxIcon isChecked={isChecked} />
              <input
                className={s.checkbox}
                id="checkboxRegistration"
                aria-label="Checkbox registration"
                name="checkboxRegistration"
                type="checkbox"
                checked={isChecked}
                onChange={onCheckboxClick}
              />
            </label>
            <span className={s.checkboxText}>
              Я ознакомился с{' '}
              <span
                className={s.checkboxTextPolicy}
                onClick={() => setIsPopupPrivacyPolicyOpen(true)}>
                Политикой конфиденциальности
              </span>
              <br />и{' '}
              <span
                className={s.checkboxTextPolicy}
                onClick={() => setIsPopupUserAgreementOpen(true)}>
                Пользовательским соглашением
              </span>
            </span>
          </div>

          <RoundButton
            className={s.button}
            type="submit"
            theme="white"
            text="Регистрация"
            disabled={!isValid || !isChecked || isPending}
            isLoading={isPending}
          />
        </form>
      </FormProvider>
      <PopupPrivacyPolicy
        isOpen={isPopupPrivacyPolicyOpen}
        onClose={() => setIsPopupPrivacyPolicyOpen(false)}
      />
      <PopupAgreement
        isOpen={isPopupUserAgreementOpen}
        onClose={() => setIsPopupUserAgreementOpen(false)}
      />
    </>
  );
};

export default RegisterForm;
