import cn from 'classnames';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
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
} from '../../../../constants/formConstants';
import { resizeInputFont } from '../../../../utils/formHelpers';
import { useFormAndValidation } from '../../../../utils/hooks/useFormAndValidation';
import { RoundButton } from '../../../_ui/RoundButton/RoundButton';
import { CheckBoxIcon } from '../../../_ui/icons/CheckBoxIcon/CheckBoxIcon';
import { PopupPrivacyPolicy } from '../../PopupPrivacyPolicy/PopupPrivacyPolicy';
import s from './FormContact.module.scss';

export const FormContact: FC = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    name: '',
    email: '',
    project: '',
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    resizeInputFont(e);
    handleChange(e);
  };

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <fieldset className={s.fieldset}>
          <div className={s.inputContainer}>
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
            <div className={s.textContainer}>
              <span className={cn(s.textNumber, { [s.textNumberError]: errors.name })}>01</span>
              <span className={cn(s.textClue, { [s.textClueError]: errors.name })}>Имя</span>
            </div>
            <div className={cn(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.name })}>
              <span className={cn(s.inputError)}>{errors.name}</span>
            </div>
          </div>

          <div className={s.inputContainer}>
            <input
              className={s.input}
              aria-label="Input email"
              value={values.email}
              onChange={onInputChange}
              name="email"
              type="text"
              placeholder="Email / телефон"
              minLength={MIN_LENGTH_EMAIL}
              maxLength={MAX_LENGTH_EMAIL}
              pattern={EMAIL_PHONE_REG_EX}
              required
            />

            <div className={s.textContainer}>
              <span className={cn(s.textNumber, { [s.textNumberError]: errors.email })}>02</span>
              <span className={cn(s.textClue, { [s.textClueError]: errors.email })}>
                Email / телефон
              </span>
            </div>
            <div className={cn(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.email })}>
              <span className={cn(s.inputError)}>{errors.email}</span>
            </div>
          </div>
          <div className={s.inputContainer}>
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
            <div className={s.textContainer}>
              <span className={cn(s.textNumber, { [s.textNumberError]: errors.project })}>03</span>
              <span className={cn(s.textClue, { [s.textClueError]: errors.project })}>
                О проекте
              </span>
            </div>
            <div className={cn(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.project })}>
              <span className={cn(s.inputError)}>{errors.project}</span>
            </div>
          </div>
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

export default FormContact;
