import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { contactFormSchema } from '../../../schemas/authSchemas';
import { TContactFormData } from '../../../types/formDataTypes';
import { PopupPrivacyPolicy } from '../../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../_ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../../_ui/icons/CheckBoxIcon/CheckBoxIcon';
import { FooterInput } from './FooterInput/FooterInput';
import s from './FooterForm.module.scss';

export const FooterForm: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
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

export default FooterForm;
