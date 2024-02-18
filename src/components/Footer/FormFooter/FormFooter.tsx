import cl from 'classnames';
import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
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
import s from './FormFooter.module.scss';

type IFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  values: { [key: string]: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: { [key: string]: string };
  isValid: boolean | undefined;
  isLoading: boolean | undefined;
};

export const FormFooter: FC<IFormProps> = ({
  onSubmit,
  values,
  handleChange,
  errors,
  isValid,
  isLoading,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const originalFontSize = useRef<string>();
  const originalTextareaHeight = useRef<string>();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    originalFontSize.current = originalFontSize.current || e.target.style.fontSize;
    const textLength = e.target.value?.length;
    e.target.style.fontSize =
      textLength > 20 ? `${32 - textLength / 9}px` : originalFontSize.current;

    handleChange(e);
  };

  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    originalTextareaHeight.current = originalTextareaHeight.current || `${e.target.clientHeight}px`;
    // const textLength = e.target.value?.length;
    // e.target.style.minHeight =
    //   textLength > 20 ? `${e.target.scrollHeight}px` : originalTextareaHeight.current;

    handleChange(e);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  return (
    <form className={s.form} method="POST" onSubmit={onSubmit}>
      <h2 className={s.formTitle}>Свяжитесь c&#160;нами</h2>

      <div className={s.fieldset}>
        <div className={cl(s.inputContainer, { [s.inputContainerError]: errors.name })}>
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
          <span className={cl(s.textClue, { [s.textClueError]: errors.name })}>
            {errors.name || 'Имя'}
          </span>
        </div>
        <div className={cl(s.inputContainer, { [s.inputContainerError]: errors.email })}>
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
            pattern={EMAIL_REG_EX}
            required
          />
          <span className={cl(s.textClue, { [s.textClueError]: errors.email })}>
            {errors.email || 'Email / телефон'}
          </span>
        </div>
        <div className={cl(s.inputContainer, { [s.inputContainerError]: errors.project })}>
          <TextareaAutosize
            className={cl(s.input, s.textarea)}
            aria-label="Textarea project"
            value={values.project}
            onChange={onTextareaChange}
            name="project"
            placeholder="О вашем проекте"
            minLength={MIN_LENGTH_PROJECT}
            maxLength={MAX_LENGTH_PROJECT}
            required
          />
          <span className={cl(s.textClue, { [s.textClueError]: errors.project })}>
            {errors.project || 'О проекте'}
          </span>
        </div>

        <div className={s.checkboxContainer}>
          <label className={s.checkboxLabel} htmlFor="checkboxConfidential">
            <CheckBoxIcon isChecked={isChecked} color="white" />
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
        className={s.footerButton}
        type="submit"
        theme="blue"
        text="Отправить"
        disabled={!isValid || !isChecked || isEmpty()}
        isLoading={isLoading}
      />
    </form>
  );
};

export default FormFooter;
