import cn from 'classnames';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  EMAIL_PHONE_REG_EX,
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_NAME,
  MAX_LENGTH_PROJECT,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_NAME,
  MIN_LENGTH_PROJECT,
  NAME_REG_EX,
} from '../../../constants/formConstants';
import { resizeInputFont } from '../../../utils/formHelpers';
import { useFormAndValidation } from '../../../utils/hooks/useFormAndValidation';
import { PopupPrivacyPolicy } from '../../_popups/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../_ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../../_ui/icons/CheckBoxIcon/CheckBoxIcon';
import s from './FormFooter.module.scss';

export const FormFooter: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    name: '',
    email: '',
    project: '',
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    resizeInputFont(e);
    handleChange(e);
  };

  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    resetForm({
      name: '',
      email: '',
      project: '',
    });
  };

  return (
    <>
      <form className={s.form} method="POST" onSubmit={handleSubmit}>
        <h2 className={s.formTitle}>Свяжитесь c&#160;нами</h2>

        <div className={s.fieldset}>
          <div className={cn(s.inputContainer, { [s.inputContainerError]: errors.name })}>
            <input
              className={s.input}
              aria-label="Input name"
              value={values.name}
              onChange={onInputChange}
              name="name"
              type="text"
              placeholder="Имя"
              minLength={MIN_LENGTH_NAME}
              maxLength={MAX_LENGTH_NAME}
              pattern={NAME_REG_EX}
              required
            />
            <span className={cn(s.textClue, { [s.textClueError]: errors.name })}>
              {errors.name || 'Имя'}
            </span>
          </div>
          <div className={cn(s.inputContainer, { [s.inputContainerError]: errors.email })}>
            <input
              className={s.input}
              aria-label="Input email"
              value={values.email}
              onChange={onInputChange}
              name="email"
              type="text"
              placeholder="Email / Телефон"
              minLength={MIN_LENGTH_EMAIL}
              maxLength={MAX_LENGTH_EMAIL}
              pattern={EMAIL_PHONE_REG_EX}
              required
            />
            <span className={cn(s.textClue, { [s.textClueError]: errors.email })}>
              {errors.email || 'Email / телефон'}
            </span>
          </div>
          <div className={cn(s.inputContainer, { [s.inputContainerError]: errors.project })}>
            <TextareaAutosize
              className={cn(s.input, s.textarea)}
              aria-label="Textarea project"
              value={values.project}
              onChange={handleChange}
              name="project"
              placeholder="О вашем проекте"
              minLength={MIN_LENGTH_PROJECT}
              maxLength={MAX_LENGTH_PROJECT}
              required
            />
            <span className={cn(s.textClue, { [s.textClueError]: errors.project })}>
              {errors.project || 'О проекте'}
            </span>
          </div>

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
          disabled={!isValid || !isChecked || isEmpty()}
          isLoading={isLoading}
        />
      </form>
      <PopupPrivacyPolicy
        isOpen={isPopupPrivacyPolicyOpen}
        onClose={() => setIsPopupPrivacyPolicyOpen(false)}
      />
    </>
  );
};

export default FormFooter;
