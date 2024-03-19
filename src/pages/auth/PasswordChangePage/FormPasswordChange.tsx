import cl from 'classnames';
import { FC, FormEvent, useState } from 'react';
import { Button } from '../../../components/ui/Button/Button';
import { QuestionIcon } from '../../../components/ui/icons';
import { MAX_LENGTH_PASSWORD, MIN_LENGTH_PASSWORD } from '../../../constants/constants';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { InfoTooltip } from '../InfoTooltip';
import s from '../auth.module.scss';
import { postChangedPassword } from '../../../api/api';

type IProps = {
  responseToSuccessfulSumbit: (newPassword: string) => void;
};

const FormPasswordChange: FC<IProps> = ({ responseToSuccessfulSumbit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    currentPassword: '',
    newPassword: '',
  });

  const onChangeSuccess = () => {
    responseToSuccessfulSumbit(values.newPassword);
    resetForm();
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(values.currentPassword, values.newPassword);
    try {
      await postChangedPassword({
        current_password: values.currentPassword,
        new_password: values.newPassword,
      });
      console.log('everything is ok');
    } catch (error) {
      console.error('Something wrong:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={s.form} method="POST" onSubmit={handleSubmit}>
      <fieldset className={s.fieldset}>
        <div className={s.inputContainer}>
          <input
            className={s.input}
            aria-label="Input currentPassword"
            value={values.currentPassword}
            onChange={handleChange}
            name="currentPassword"
            type="text"
            placeholder="Старый пароль"
            minLength={MIN_LENGTH_PASSWORD}
            maxLength={MAX_LENGTH_PASSWORD}
            required
          />
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.currentPassword })}>
              01
            </span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.currentPassword })}>
              Старый
            </span>
          </div>
          <div
            className={cl(s.inputErrorWrap, {
              [s.inputErrorWrapVisible]: errors.currentPassword,
            })}>
            <span className={cl(s.inputError)}>{errors.currentPassword}</span>
          </div>
          <InfoTooltip content="Ололо">
            <QuestionIcon className={s.hintIcon} />
          </InfoTooltip>
        </div>

        <div className={s.inputContainer}>
          <input
            className={s.input}
            aria-label="Input newPassword"
            value={values.newPassword}
            onChange={handleChange}
            name="newPassword"
            type="text"
            placeholder="Новый пароль"
            minLength={MIN_LENGTH_PASSWORD}
            maxLength={MAX_LENGTH_PASSWORD}
            required
          />
          <div className={s.textContainer}>
            <span className={cl(s.textNumber, { [s.textNumberError]: errors.newPassword })}>
              02
            </span>
            <span className={cl(s.textClue, { [s.textClueError]: errors.newPassword })}>Новый</span>
          </div>
          <div
            className={cl(s.inputErrorWrap, {
              [s.inputErrorWrapVisible]: errors.newPassword,
            })}>
            <span className={cl(s.inputError)}>{errors.newPassword}</span>
          </div>
          <InfoTooltip content="Ололо">
            <QuestionIcon className={s.hintIcon} />
          </InfoTooltip>
        </div>
      </fieldset>
      <div className={s.filler} />

      <Button
        className={s.button}
        type="submit"
        theme="white"
        text={`Сменить\nпароль`}
        disabled={!isValid || isEmpty()}
        isLoading={isLoading}
      />
    </form>
  );
};

export default FormPasswordChange;
