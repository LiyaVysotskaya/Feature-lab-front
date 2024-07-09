import { yupResolver } from '@hookform/resolvers/yup';
import { isAxiosError } from 'axios';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { postPwdResetData } from '../../api/api';
import { ROUTE_ERROR_500 } from '../../constants/routesConstants';
import { pwdResetSchema } from '../../schemas/authSchemas';
import { TPwdResetFormData } from '../../types/formDataTypes';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import { AuthFormInput } from './AuthFormInput/AuthFormInput';
import s from './AuthForms.module.scss';

type IProps = {
  handleSuccessfulSumbit: (isSuccess: boolean) => void;
};

const PasswordResetForm: FC<IProps> = ({ handleSuccessfulSumbit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { uid, token } = useParams<{ uid: string; token: string }>();

  const methods = useForm({
    resolver: yupResolver(pwdResetSchema),
    defaultValues: {
      new_password: '',
      re_new_password: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
    reset,
  } = methods;

  if (!uid || !token) {
    return null;
  }

  const onSubmit = async (values: TPwdResetFormData) => {
    setIsLoading(true);

    try {
      await postPwdResetData({ uid, token, ...values });
      handleSuccessfulSumbit(true);
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
        <div className={s.fields}>
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
        </div>

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

export default PasswordResetForm;
