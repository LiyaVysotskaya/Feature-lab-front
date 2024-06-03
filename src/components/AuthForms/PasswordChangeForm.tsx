import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { postChangedPassword } from '../../api/api';
import { INVALID_PASSWORD } from '../../constants/errors';
import { PASSWORD_HINT_TEXT } from '../../constants/tooltipContent';
import { pwdChangeSchema } from '../../schemas/authSchemas';
import { TChangePwdFormData } from '../../types/forms';
import { notifySomethingWrong, notifyWrongOldPassword } from '../../utils/toastHelpers';
import { AuthFormInput } from '../AuthFormInput/AuthFormInput';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import s from './AuthForms.module.scss';

type IProps = {
  responseToSuccessfulSumbit: (newPassword: string) => void;
};

const PasswordChangeForm: FC<IProps> = ({ responseToSuccessfulSumbit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(pwdChangeSchema),
    defaultValues: {
      current_password: '',
      new_password: '',
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
      await postChangedPassword({
        current_password: values.current_password,
        new_password: values.new_password,
      });
      responseToSuccessfulSumbit(values.new_password);
      reset();
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
            hintText={PASSWORD_HINT_TEXT}
          />

          <AuthFormInput
            name="new_password"
            type="password"
            placeHolder="Новый пароль"
            ariaLabel="Input newPassword"
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
          disabled={!isValid || isLoading}
          isLoading={isLoading}
        />
      </form>
    </FormProvider>
  );
};

export default PasswordChangeForm;
