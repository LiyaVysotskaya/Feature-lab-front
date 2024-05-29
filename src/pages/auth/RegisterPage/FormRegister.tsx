import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useRegQuery } from '../../../api/queries';
import { AuthFormInput } from '../../../components/AuthFormInput/AuthFormInput';
import { PopupAgreement } from '../../../components/PopupAgreement/PopupAgreement';
import { PopupPrivacyPolicy } from '../../../components/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../../components/ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../../../components/ui/icons/CheckBoxIcon/CheckBoxIcon';
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_PASSWORD,
} from '../../../constants/formConstants';
import { EMAIL_HINT_TEXT, PASSWORD_HINT_TEXT } from '../../../constants/tooltipContent';
import { resizeInputFont } from '../../../utils/formHelpers';
import { useFormAndValidation } from '../../../utils/hooks/useFormAndValidation';
import s from '../auth.module.scss';

type IProps = {
  responseToSuccessfulSumbit: (newEmail: string) => void;
};

export const FormRegister: FC<IProps> = ({ responseToSuccessfulSumbit }) => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isPopupUserAgreementOpen, setIsPopupUserAgreementOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onRegSuccess = () => {
    responseToSuccessfulSumbit(values.email);
    resetForm();
  };

  const { mutate: mutateRegData, isPending } = useRegQuery(onRegSuccess);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    resizeInputFont(e);
    handleChange(e);
  };

  const onRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (input.value !== values.password) {
      input.setCustomValidity('Введённые значения не совпадают');
    } else {
      input.setCustomValidity('');
    }

    input.reportValidity();
    handleChange(e);
  };

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutateRegData({ email: values.email, password: values.password });
  };

  return (
    <>
      <form className={s.form} method="POST" onSubmit={handleSubmit}>
        <fieldset className={s.fieldset}>
          <AuthFormInput
            name="email"
            type="email"
            placeHolder="Email"
            value={values.email}
            error={errors.email}
            onChange={onInputChange}
            ariaLabel="Input email"
            minLength={MIN_LENGTH_EMAIL}
            maxLength={MAX_LENGTH_EMAIL}
            labelNum="01"
            labelText="Email"
            hintText={EMAIL_HINT_TEXT}
          />

          <AuthFormInput
            name="password"
            type="password"
            placeHolder="Пароль"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
            ariaLabel="Input password"
            minLength={MIN_LENGTH_PASSWORD}
            maxLength={MAX_LENGTH_PASSWORD}
            labelNum="02"
            labelText="Пароль"
            hintText={PASSWORD_HINT_TEXT}
          />

          <AuthFormInput
            name="repeatPassword"
            type="password"
            placeHolder="Повторите пароль"
            value={values.repeatPassword}
            error={errors.repeatPassword}
            onChange={onRepeatPasswordChange}
            ariaLabel="Input repeat password"
            minLength={MIN_LENGTH_PASSWORD}
            maxLength={MAX_LENGTH_PASSWORD}
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
          disabled={!isValid || !isChecked || isEmpty() || isPending}
          isLoading={isPending}
        />
      </form>
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

export default FormRegister;
