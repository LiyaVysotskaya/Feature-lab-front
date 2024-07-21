import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useContactQuery } from '../../../api/queries';
import { QK_CONTACT, QK_POPUP } from '../../../constants/TanStackQueryKeys';
import queryClient from '../../../query-client';
import { contactFormSchema, emailSchema } from '../../../schemas/authSchemas';
import { TContactSubmitData } from '../../../types/apiTypes';
import { TContactFormData } from '../../../types/formDataTypes';
import { PopupPrivacyPolicy } from '../../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../_ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../../_ui/icons/CheckBoxIcon/CheckBoxIcon';
import s from './PopupContactForm.module.scss';
import { PopupContactInput } from './PopupContactInput/PopupContactInput';

export const PopupContactForm: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const cachedData = queryClient.getQueryData([QK_CONTACT, QK_POPUP]) as
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
    formType: QK_POPUP,
  });

  useEffect(() => {
    const contactSubmitData: TContactSubmitData = {
      name: formData.name,
      email: formData.emailOrPhone,
      phone: formData.emailOrPhone,
      message: formData.message,
    };
    queryClient.setQueryData([QK_CONTACT, QK_POPUP], contactSubmitData);
  }, [formData]);

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <fieldset className={s.fieldset}>
            <PopupContactInput
              name="name"
              type="text"
              ariaLabel="Input name"
              labelNum="01"
              labelText="Имя"
              placeHolder="Имя"
            />

            <PopupContactInput
              name="emailOrPhone"
              type="text"
              ariaLabel="Input email or phone"
              labelNum="02"
              labelText="Email / телефон"
              placeHolder="Email / телефон"
            />

            <PopupContactInput
              name="message"
              type="text"
              ariaLabel="About project"
              labelNum="03"
              labelText="О проекте"
              placeHolder="О вашем проекте"
              isTextArea
            />
          </fieldset>

          <div className={s.checkboxPosition}>
            <div className={s.checkboxContainer}>
              <label className={s.checkboxLabel} htmlFor="checkboxConfidentialContact">
                <CheckBoxIcon isChecked={isChecked} />
                <input
                  className={s.checkbox}
                  id="checkboxConfidentialContact"
                  aria-label="Checkbox confidential"
                  name="checkboxConfidentialContact"
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
            className={s.button}
            type="submit"
            theme="white"
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
