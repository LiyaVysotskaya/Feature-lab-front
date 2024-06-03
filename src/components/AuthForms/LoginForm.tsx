import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ROUTE_RESTORE_PASSWORD } from '../../constants/routesConstants';
import { EMAIL_HINT_TEXT, PASSWORD_HINT_TEXT } from '../../constants/tooltipContent';
import { loginSchema } from '../../schemas/authSchemas';
import { TLoginFormData } from '../../types/forms';
import { useAuth } from '../../utils/hooks/useAuth';
import { AuthFormInput } from '../AuthFormInput/AuthFormInput';
import { PopupPrivacyPolicy } from '../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import s from './AuthForms.module.scss';

export const LoginForm: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = async (values: TLoginFormData) => {
    setIsLoading(true);

    try {
      await signIn({ email: values.email, password: values.password });
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

            <AuthFormInput
              name="password"
              type="password"
              placeHolder="Пароль"
              ariaLabel="Input password"
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
