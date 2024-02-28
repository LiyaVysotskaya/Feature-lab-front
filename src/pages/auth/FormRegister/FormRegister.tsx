import cl from 'classnames';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_PASSWORD,
  NAME_REG_EX,
} from '../../../constants/constants';
import { Button } from '../../../components/ui/Button/Button';
import { CheckBoxIcon } from '../../../components/ui/icons/CheckBoxIcon/CheckBoxIcon';

import s from './FormRegister.module.scss';
import { PopupPrivacyPolicy } from '../../../components/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { QuestionIcon } from '../../../components/ui/icons';

type IFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  values: { [key: string]: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: { [key: string]: string };
  isValid: boolean | undefined;
  isLoading: boolean | undefined;
};

export const FormContact: FC<IFormProps> = ({
  onSubmit,
  values,
  handleChange,
  errors,
  isValid,
  isLoading,
}) => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isPopupUserAgreementOpen, setIsPopupUserAgreementOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const inputStyles = getComputedStyle(input);

    // Access the value of the --input-font-size CSS variable
    const originFontSize = parseInt(inputStyles.getPropertyValue('--input-font-size'), 10);

    // Access the value of the minimum font size CSS variable
    const minFontSize = parseInt(inputStyles.getPropertyValue('--input-font-size-min'), 10);

    // Retrieve the current font size
    const currentFontSize = parseInt(inputStyles.fontSize, 10);

    const textLength = input.value.length;

    // Calculate the new font size based on text length
    let newFontSize = currentFontSize;
    if (textLength > 20) {
      // Decrease font size smoothly, but ensure it doesn't go below the minimum
      const fontSizeDifference = Math.max(textLength - 20, 0);
      newFontSize = Math.max(originFontSize - fontSizeDifference, minFontSize);
    } else {
      newFontSize = originFontSize;
    }

    // Apply the new font size to the input
    input.style.fontSize = `${newFontSize}px`;

    handleChange(e);
  };

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
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

  return (
    <form className={s.form} method="POST" onSubmit={onSubmit}>
      <fieldset className={s.fieldset}>
        <div className={s.inputContainer}>
          <input
            className={s.input}
            aria-label="Input email"
            value={values.email}
            onChange={onInputChange}
            name="email"
            type="email"
            placeholder="Email"
            minLength={MIN_LENGTH_EMAIL}
            maxLength={MAX_LENGTH_EMAIL}
            required
          />
          <QuestionIcon className={s.hintIcon} />
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.email })}>01</span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.email })}>Email</span>
          </div>
          <div className={cl(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.email })}>
            <span className={cl(s.inputError)}>{errors.email}</span>
          </div>
        </div>

        <div className={s.inputContainer}>
          <input
            className={s.input}
            aria-label="Input password"
            value={values.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Пароль"
            minLength={MIN_LENGTH_PASSWORD}
            maxLength={MAX_LENGTH_PASSWORD}
            pattern={NAME_REG_EX}
            required
          />
          <QuestionIcon className={s.hintIcon} />
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.password })}>02</span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.password })}>Пароль</span>
          </div>
          <div className={cl(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.password })}>
            <span className={cl(s.inputError)}>{errors.password}</span>
          </div>
        </div>

        <div className={s.inputContainer}>
          <input
            className={s.input}
            aria-label="Input repeat password"
            value={values.repeatPassword}
            onChange={onRepeatPasswordChange}
            name="repeatPassword"
            type="password"
            placeholder="Повторите пароль"
            minLength={MIN_LENGTH_PASSWORD}
            maxLength={MAX_LENGTH_PASSWORD}
            pattern={NAME_REG_EX}
            required
          />
          <QuestionIcon className={s.hintIcon} />
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.repeatPassword })}>
              02&#8211;1
            </span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.repeatPassword })}>
              Пароль
            </span>
          </div>
          <div
            className={cl(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.repeatPassword })}>
            <span className={cl(s.inputError)}>{errors.repeatPassword}</span>
          </div>
        </div>
      </fieldset>

      <div className={s.checkboxPosition}>
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
            Я ознакомился&nbsp;с{' '}
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
      </div>

      <Button
        className={s.button}
        type="submit"
        theme="white"
        text="Регистрация"
        disabled={!isValid || !isChecked || isEmpty()}
        isLoading={isLoading}
      />

      <PopupPrivacyPolicy
        isOpen={isPopupPrivacyPolicyOpen}
        onClose={() => setIsPopupPrivacyPolicyOpen(false)}
      />

      {/* <PopupUserAgreement
        isOpen={isPopupUserAgreementOpen}
        onClose={() => setIsPopupUserAgreementOpen(false)}
      /> */}
    </form>
  );
};

export default FormContact;
