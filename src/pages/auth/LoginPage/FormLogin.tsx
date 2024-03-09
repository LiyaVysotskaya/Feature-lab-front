import cl from 'classnames';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_PASSWORD,
} from '../../../constants/constants';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import useAuth from '../../../hooks/useAuth';
import { Button } from '../../../components/ui/Button/Button';

import s from '../auth.module.scss';
import { PopupPrivacyPolicy } from '../../../components/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { QuestionIcon } from '../../../components/ui/icons';

export const FormLogin: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: '',
    password: '',
  });

  const { signIn } = useAuth();
  // const testLoginData = {
  //   email: 'cherdantsev.p@gmail.com',
  //   password: 'DU#6ZEB&dXrJ%t',
  // };

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

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn({ email: values.email, password: values.password });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={s.form} method="POST" onSubmit={handleSubmit}>
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
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.email })}>01</span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.email })}>Email</span>
          </div>
          <div className={cl(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.email })}>
            <span className={cl(s.inputError)}>{errors.email}</span>
          </div>
          <QuestionIcon className={s.hintIcon} />
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
            required
          />
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.password })}>02</span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.password })}>Пароль</span>
          </div>
          <div className={cl(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.password })}>
            <span className={cl(s.inputError)}>{errors.password}</span>
          </div>
          <QuestionIcon className={s.hintIcon} />
        </div>
      </fieldset>

      <div className={s.pwdResetLinkPosition}>
        <div className={s.pwdResetLinkContainer}>
          <Link
            to="https://github.com/LiyaVysotskaya/Feature-lab-front"
            className={s.passwordResetLink}>
            Забыли пароль?
          </Link>
        </div>
      </div>

      <Button
        className={s.button}
        type="submit"
        theme="white"
        text="Вход"
        disabled={!isValid || isEmpty()}
        isLoading={isLoading}
      />

      <PopupPrivacyPolicy
        isOpen={isPopupPrivacyPolicyOpen}
        onClose={() => setIsPopupPrivacyPolicyOpen(false)}
      />
    </form>
  );
};

export default FormLogin;
