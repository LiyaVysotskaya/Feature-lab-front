import cl from 'classnames';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { PopupPrivacyPolicy } from '../../../components/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../../components/ui/RoundButton/RoundButton';
import { QuestionIcon } from '../../../components/ui/icons';
import {
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_PASSWORD,
} from '../../../constants/formConstants';
import { ROUTE_RESTORE_PASSWORD } from '../../../constants/routesConstants';
import { EMAIL_HINT_TEXT, PASSWORD_HINT_TEXT } from '../../../constants/tooltipContent';
import { useAuth } from '../../../hooks/useAuth';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { resizeInputFont } from '../../../utils/formHelpers';
import { InfoTooltip } from '../InfoTooltip';
import s from '../auth.module.scss';

export const FormLogin: FC = () => {
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
            <InfoTooltip content={EMAIL_HINT_TEXT}>
              <QuestionIcon className={s.hintIcon} />
            </InfoTooltip>
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
            <InfoTooltip content={PASSWORD_HINT_TEXT}>
              <QuestionIcon className={s.hintIcon} />
            </InfoTooltip>
          </div>
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
          disabled={!isValid || isEmpty()}
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
