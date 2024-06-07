import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { contactFormSchema } from '../../../schemas/authSchemas';
import { TContactFormData } from '../../../types/formDataTypes';
import { PopupPrivacyPolicy } from '../../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../_ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../../_ui/icons/CheckBoxIcon/CheckBoxIcon';
import { PopupContactInput } from './PopupContactInput/PopupContactInput';
import s from './PopupContactForm.module.scss';

export const PopupContactForm: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
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
  } = methods;

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = (data: TContactFormData) => {
    console.log(data);
    setIsLoading(true);

    reset();
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
            disabled={!isValid || !isChecked || isLoading}
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

export default PopupContactForm;
