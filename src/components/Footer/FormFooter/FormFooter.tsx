import cl from 'classnames';
import React, { ChangeEvent, FormEvent, useRef } from 'react';
import s from './FormFooter.module.scss';
import { Button } from '../../ui/Button/Button';
import { emailRegEx, nameRegEx } from '../../../constants/constants';

type IFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  values: { [key: string]: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  // errors: { [key: string]: string };
  isValid: boolean | undefined;
  isLoading: boolean | undefined;
};

export const FormFooter: React.FC<IFormProps> = ({
  onSubmit,
  values,
  handleChange,
  // errors,
  isValid,
  isLoading,
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const originalFontSize = useRef<string>();
  const originalTextareaHeight = useRef<string>();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    originalFontSize.current = originalFontSize.current || e.target.style.fontSize;
    const textLength = e.target.value?.length;
    e.target.style.fontSize =
      textLength > 20 ? `${80 - (textLength - 20)}px` : originalFontSize.current;

    handleChange(e);
  };

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    originalTextareaHeight.current = originalTextareaHeight.current || `${e.target.clientHeight}px`;
    const textLength = e.target.value?.length;
    e.target.style.height =
      textLength > 20 ? `${e.target.scrollHeight}px` : originalTextareaHeight.current;

    handleChange(e);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  return (
    <form className={s.form} method="POST" onSubmit={onSubmit}>
      <fieldset className={s.fieldset}>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            {/* <div className={s.textContainer}> */}
            <span className={cl(s.textClue, { [s.textClueError]: false })}>Имя</span>
            {/* </div> */}
            <input
              className={s.input}
              aria-label="Input name"
              value={values.name}
              onChange={onInputChange}
              name="name"
              type="text"
              placeholder="Имя"
              minLength={2}
              maxLength={60}
              pattern={nameRegEx}
              required
            />{' '}
          </div>
          {/* <span className={cl(s.inputError, { [s.inputErrorActive]: errors.name })}>
            {errors.name}
          </span> */}
        </div>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            {/* <div className={s.textContainer}> */}
            <span className={cl(s.textClue, { [s.textClueError]: false })}>Email / телефон</span>
            {/* </div> */}
            <input
              className={s.input}
              aria-label="Input email"
              value={values.email}
              onChange={onInputChange}
              name="email"
              type="email"
              placeholder="Email / телефон"
              minLength={6}
              maxLength={60}
              pattern={emailRegEx}
              required
            />
          </div>
          {/* <span className={cl(s.inputError, { [s.inputErrorActive]: errors.email })}>
            {errors.email}
          </span> */}
        </div>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            {/* <div className={s.textContainer}> */}
            <span className={cl(s.textClue, { [s.textClueError]: false })}>О проекте</span>
            {/* </div> */}
            <textarea
              className={s.input}
              aria-label="Textarea project"
              value={values.project}
              onChange={onTextareaChange}
              name="project"
              placeholder="О вашем проекте"
              minLength={15}
              maxLength={500}
              rows={1}
              required
            />
          </div>
          {/* <span className={cl(s.inputError, { [s.inputErrorActive]: errors.project })}>
            {errors.project}
          </span> */}
        </div>
      </fieldset>
      <label className={s.checkboxContainer} htmlFor="checkboxConfidential">
        <input
          className={s.checkbox}
          id="checkboxConfidential"
          aria-label="Checkbox confidential"
          name="checkboxConfidential"
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxClick}
        />
        <span className={s.checkboxText}>
          Соглашаюсь с обработкой персональных&nbsp;данных <br />и{' '}
          <span className={s.checkboxTextConfidential}>политикой конфиденциальности</span>
        </span>
      </label>
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

export default FormFooter;
