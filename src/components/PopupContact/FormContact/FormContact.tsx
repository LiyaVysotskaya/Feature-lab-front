import cl from 'classnames';
import React, { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  EMAIL_REG_EX,
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_NAME,
  MAX_LENGTH_PROJECT,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_NAME,
  MIN_LENGTH_PROJECT,
  NAME_REG_EX,
} from '../../../constants/constants';
import { Button } from '../../ui/Button/Button';
import { CheckBoxIcon } from '../../ui/icons/CheckBoxIcon/CheckBoxIcon';
import s from './FormContact.module.scss';

type IFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  values: { [key: string]: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: { [key: string]: string };
  isValid: boolean | undefined;
  isLoading: boolean | undefined;
};

export const FormContact: FC<IFormProps> = ({
  onSubmit,
  values,
  handleChange,
  errors,
  isValid,
  isLoading,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const originalFontSize = useRef<string>();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // input text font size auto-minimizer

    originalFontSize.current = originalFontSize.current || e.target.style.fontSize;
    const textLength = e.target.value?.length;
    e.target.style.fontSize =
      textLength > 20 ? `${80 - (textLength - 20)}px` : originalFontSize.current;

    handleChange(e);
  };

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  return (
    <form className={s.form} method="POST" onSubmit={onSubmit}>
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
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.name })}>01</span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.name })}>Имя</span>
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors.name })}>
            {errors.name}
          </span>
        </div>

        <div className={s.inputContainer}>
          <input
            className={s.input}
            aria-label="Input email"
            value={values.email}
            onChange={onInputChange}
            name="email"
            type="email"
            placeholder="Email / телефон"
            minLength={MIN_LENGTH_EMAIL}
            maxLength={MAX_LENGTH_EMAIL}
            pattern={EMAIL_REG_EX}
            required
          />
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.email })}>02</span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.email })}>
              Email / телефон
            </span>
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors.email })}>
            {errors.email}
          </span>
        </div>
        <div className={s.inputContainer}>
          <TextareaAutosize
            className={cl(s.input, s.textarea)}
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
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.project })}>03</span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.project })}>О проекте</span>
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors.project })}>
            {errors.project}
          </span>
        </div>
      </fieldset>

      <div className={s.checkboxPosition}>
        <div className={s.checkboxContainer}>
          <label className={s.checkboxLabel} htmlFor="checkboxConfidential">
            <CheckBoxIcon isChecked={isChecked} />
            <input
              className={s.checkbox}
              id="checkboxConfidential"
              aria-label="Checkbox confidential"
              name="checkboxConfidential"
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxClick}
            />
          </label>
          <span className={s.checkboxText}>
            Соглашаюсь с обработкой персональных&nbsp;данных <br />и{' '}
            <span className={s.checkboxTextConfidential}>политикой конфиденциальности</span>
          </span>
        </div>
      </div>

      <Button
        className={s.button}
        type="submit"
        theme="white"
        text="Отправить"
        disabled={!isValid || !isChecked || isEmpty()}
        isLoading={isLoading}
      />
    </form>
  );
};

export default FormContact;
