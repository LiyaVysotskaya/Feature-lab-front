import { yupResolver } from '@hookform/resolvers/yup';
import { isAxiosError } from 'axios';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postPwdRestoreData } from '../../api/api';
import { ROUTE_ERROR_500 } from '../../constants/routesConstants';
import { EMAIL_HINT_TEXT } from '../../constants/tooltipContent';
import { formWithEmailSchema } from '../../schemas/authSchemas';
import { TPwdRestoreFormData } from '../../types/formDataTypes';
import { PopupPrivacyPolicy } from '../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import { AuthFormInput } from './AuthFormInput/AuthFormInput';
import s from './AuthForms.module.scss';

type IProps = {
  handleSuccessfulSumbit: (submitedEmail: string) => void;
};

export const PasswordRestoreForm: FC<IProps> = ({ handleSuccessfulSumbit }) => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(formWithEmailSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
    reset,
  } = methods;

  const onSubmit = async (values: TPwdRestoreFormData) => {
    setIsLoading(true);
    try {
      await postPwdRestoreData(values);
      handleSuccessfulSumbit(values.email);
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
          </fieldset>

          <div className={s.pwdResetLinkPosition} />

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
      <PopupPrivacyPolicy
        isOpen={isPopupPrivacyPolicyOpen}
        onClose={() => setIsPopupPrivacyPolicyOpen(false)}
      />
    </>
  );
};
