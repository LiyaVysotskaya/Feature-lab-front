import { yupResolver } from '@hookform/resolvers/yup';
import { isAxiosError } from 'axios';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postChangedPassword } from '../../api/api';
import { ROUTE_ERROR_500 } from '../../constants/routesConstants';
import { pwdChangeSchema } from '../../schemas/authSchemas';
import { TChangePwdFormData } from '../../types/formDataTypes';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import { AuthFormInput } from './AuthFormInput/AuthFormInput';
import s from './AuthForms.module.scss';

type IProps = {
  responseToSuccessfulSumbit: (newPassword: string) => void;
};

const PasswordChangeForm: FC<IProps> = ({ responseToSuccessfulSumbit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(pwdChangeSchema),
    defaultValues: {
      current_password: '',
      new_password: '',
      re_new_password: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async (values: TChangePwdFormData) => {
    setIsLoading(true);
    try {
      await postChangedPassword(values);
      responseToSuccessfulSumbit(values.new_password);
      reset();
    } catch (error) {
      // 400 Error handling is already managed by Axios interceptors

      if (isAxiosError(error) && error.response?.status === 500) {
        navigate(ROUTE_ERROR_500, { replace: true });
      }
      if (isAxiosError(error) && error.message === 'Network Error') {
        navigate(ROUTE_ERROR_500, { replace: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={s.form} method="POST" onSubmit={methods.handleSubmit(onSubmit)}>
        <fieldset className={s.fieldset}>
          <AuthFormInput
            name="current_password"
            type="password"
            placeHolder="Старый пароль"
            ariaLabel="Input currentPassword"
            labelNum="01"
            labelText="Старый"
          />

          <AuthFormInput
            name="new_password"
            type="password"
            placeHolder="Новый пароль"
            ariaLabel="Input newPassword"
            labelNum="02"
            labelText="Новый"
          />

          <AuthFormInput
            name="re_new_password"
            type="password"
            placeHolder="Повторите пароль"
            ariaLabel="Input repeat newPassword"
            labelNum="02.1"
            labelText="Новый"
          />
        </fieldset>

        <div className={s.filler} />

        <RoundButton
          className={s.button}
          type="submit"
          theme="white"
          text={`Сменить\nпароль`}
          disabled={!isValid || isLoading}
          isLoading={isLoading}
        />
      </form>
    </FormProvider>
  );
};

export default PasswordChangeForm;
