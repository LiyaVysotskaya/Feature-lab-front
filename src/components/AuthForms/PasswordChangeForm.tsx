import { AxiosError } from 'axios';
import { FC, FormEvent, useState } from 'react';
import { postChangedPassword } from '../../api/api';
import { INVALID_PASSWORD } from '../../constants/errors';
import { MAX_LENGTH_PASSWORD, MIN_LENGTH_PASSWORD } from '../../constants/formConstants';
import { PASSWORD_HINT_TEXT } from '../../constants/tooltipContent';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { notifySomethingWrong, notifyWrongOldPassword } from '../../utils/toastHelpers';
import { AuthFormInput } from '../AuthFormInput/AuthFormInput';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import s from './AuthForms.module.scss';

type IProps = {
  responseToSuccessfulSumbit: (newPassword: string) => void;
};

const FormPasswordChange: FC<IProps> = ({ responseToSuccessfulSumbit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    currentPassword: '',
    newPassword: '',
  });

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await postChangedPassword({
        current_password: values.currentPassword,
        new_password: values.newPassword,
      });
      responseToSuccessfulSumbit(values.newPassword);
      resetForm();
    } catch (error) {
      if (error instanceof AxiosError) {
        const responseData = error.response?.data;
        if (responseData && responseData.current_password?.includes(INVALID_PASSWORD)) {
          notifyWrongOldPassword();
        } else {
          notifySomethingWrong();
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={s.form} method="POST" onSubmit={handleSubmit}>
      <fieldset className={s.fieldset}>
        <AuthFormInput
          name="currentPassword"
          type="password"
          placeHolder="Старый пароль"
          value={values.currentPassword}
          onChange={handleChange}
          ariaLabel="Input currentPassword"
          minLength={MIN_LENGTH_PASSWORD}
          maxLength={MAX_LENGTH_PASSWORD}
          error={errors.currentPassword}
          labelNum="01"
          labelText="Старый"
          hintText={PASSWORD_HINT_TEXT}
        />

        <AuthFormInput
          name="newPassword"
          type="password"
          placeHolder="Новый пароль"
          value={values.newPassword}
          onChange={handleChange}
          ariaLabel="Input newPassword"
          minLength={MIN_LENGTH_PASSWORD}
          maxLength={MAX_LENGTH_PASSWORD}
          error={errors.newPassword}
          labelNum="02"
          labelText="Новый"
          hintText={PASSWORD_HINT_TEXT}
        />
      </fieldset>

      <div className={s.filler} />

      <RoundButton
        className={s.button}
        type="submit"
        theme="white"
        text={`Сменить\nпароль`}
        disabled={!isValid || isEmpty() || isLoading}
        isLoading={isLoading}
      />
    </form>
  );
};

export default FormPasswordChange;
