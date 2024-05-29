import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_PASSWORD,
} from '../../constants/formConstants';
import { ROUTE_RESTORE_PASSWORD } from '../../constants/routesConstants';
import { EMAIL_HINT_TEXT, PASSWORD_HINT_TEXT } from '../../constants/tooltipContent';
import { resizeInputFont } from '../../utils/formHelpers';
import { useAuth } from '../../utils/hooks/useAuth';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { AuthFormInput } from '../AuthFormInput/AuthFormInput';
import { PopupPrivacyPolicy } from '../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import s from './AuthForms.module.scss';

export const LoginForm: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: '',
    password: '',
  });

  const { signIn } = useAuth();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    resizeInputFont(e);
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
        </fieldset>

        <div className={s.pwdResetLinkPosition}>
          <div className={s.pwdResetLinkContainer}>
            <Link to={ROUTE_RESTORE_PASSWORD} className={s.passwordResetLink}>
              Забыли пароль?
            </Link>
          </div>
        </div>

        <RoundButton
          className={s.button}
          type="submit"
          theme="white"
          text="Вход"
          disabled={!isValid || isEmpty() || isLoading}
          isLoading={isLoading}
        />
      </form>
      <PopupPrivacyPolicy
        isOpen={isPopupPrivacyPolicyOpen}
        onClose={() => setIsPopupPrivacyPolicyOpen(false)}
      />
    </>
  );
};
