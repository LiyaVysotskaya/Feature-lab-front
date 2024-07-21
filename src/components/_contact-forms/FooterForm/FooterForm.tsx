import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useContactQuery } from '../../../api/queries';
import { QK_CONTACT, QK_FOOTER } from '../../../constants/TanStackQueryKeys';
import queryClient from '../../../query-client';
import { contactFormSchema, emailSchema } from '../../../schemas/authSchemas';
import { TContactSubmitData } from '../../../types/apiTypes';
import { TContactFormData } from '../../../types/formDataTypes';
import { PopupPrivacyPolicy } from '../../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../_ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../../_ui/icons/CheckBoxIcon/CheckBoxIcon';
import s from './FooterForm.module.scss';
import { FooterInput } from './FooterInput/FooterInput';

export const FooterForm: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const cachedData = queryClient.getQueryData([QK_CONTACT, QK_FOOTER]) as
    | TContactSubmitData
    | undefined;

  const methods = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: cachedData
      ? {
          name: cachedData.name,
          emailOrPhone: cachedData.email || cachedData.phone,
          message: cachedData.message,
        }
      : {
          name: '',
          emailOrPhone: '',
          message: '',
        },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
    handleSubmit,
    reset,
    watch,
  } = methods;

  const formData = watch();

  const onSuccessCallback = () => {
    reset();
  };
  const { mutate: mutateContactData, isPending } = useContactQuery({
    onSuccessCallback,
    formType: QK_FOOTER,
  });

  useEffect(() => {
    const contactSubmitData: TContactSubmitData = {
      name: formData.name,
      email: formData.emailOrPhone,
      phone: formData.emailOrPhone,
      message: formData.message,
    };
    queryClient.setQueryData([QK_CONTACT, QK_FOOTER], contactSubmitData);
  }, [formData]);

  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = (data: TContactFormData) => {
    const contactSubmitData = {
      name: data.name,
      email: '',
      phone: '',
      message: data.message,
    };

    if (emailSchema.isValidSync(data.emailOrPhone)) {
      // If valid as an email
      contactSubmitData.email = data.emailOrPhone;
    } else {
      // Otherwise, assume it's a valid phone number
      contactSubmitData.phone = data.emailOrPhone;
    }

    mutateContactData(contactSubmitData);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className={s.form} method="POST" onSubmit={handleSubmit(onSubmit)}>
          <h2 className={s.formTitle}>Свяжитесь c&#160;нами</h2>

          <div className={s.fieldset}>
            <FooterInput name="name" type="text" ariaLabel="Input name" placeHolder="Имя" />

            <FooterInput
              name="emailOrPhone"
              type="text"
              ariaLabel="Input email or phone"
              placeHolder="Email / телефон"
            />

            <FooterInput
              name="message"
              type="text"
              ariaLabel="About project"
              placeHolder="О вашем проекте"
              isTextArea
            />

            <div className={s.checkboxContainer}>
              <label className={s.checkboxLabel} htmlFor="checkboxConfidentialFooter">
                <CheckBoxIcon isChecked={isChecked} color="white" />
                <input
                  className={s.checkbox}
                  id="checkboxConfidentialFooter"
                  aria-label="Checkbox confidential"
                  name="checkboxConfidentialFooter"
                  type="checkbox"
                  checked={isChecked}
                  onChange={onCheckboxClick}
                />
              </label>
              <span className={s.checkboxText}>
                Соглашаюсь с обработкой персональных&nbsp;данных <br />и{' '}
                <span
                  className={s.checkboxTextConfidential}
                  onClick={() => setIsPopupPrivacyPolicyOpen(true)}>
                  политикой конфиденциальности
                </span>
              </span>
            </div>
          </div>

          <RoundButton
            className={s.footerButton}
            type="submit"
            theme="blue"
            text="Отправить"
            disabled={!isValid || !isChecked || isPending}
            isLoading={isPending}
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
