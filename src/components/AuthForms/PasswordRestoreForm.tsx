import { yupResolver } from '@hookform/resolvers/yup';
import { FC, FormEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { EMAIL_HINT_TEXT } from '../../constants/tooltipContent';
import { formWithEmailSchema } from '../../schemas/authSchemas';
import { AuthFormInput } from '../AuthFormInput/AuthFormInput';
import { PopupPrivacyPolicy } from '../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../_ui/RoundButton/RoundButton';
import s from './AuthForms.module.scss';

type IProps = {
  // responseToSuccessfulSumbit: (newEmail: string) => void;
};

export const PasswordRestoreForm: FC<IProps> = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(formWithEmailSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = methods;

  // const onSubmitSuccess = () => {
  //   responseToSuccessfulSumbit(values.email);
  //   resetForm();
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // mutateRestoreData({ email: values.email });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className={s.form} method="POST" onSubmit={handleSubmit}>
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
