import cl from 'classnames';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { PopupPrivacyPolicy } from '../../../components/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../../components/ui/RoundButton/RoundButton';
import { QuestionIcon } from '../../../components/ui/icons';
import { MAX_LENGTH_EMAIL, MIN_LENGTH_EMAIL } from '../../../constants/constants';
import { EMAIL_HINT_TEXT } from '../../../constants/tooltipContent';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { resizeInputFont } from '../../../utils/formHelpers';
import { InfoTooltip } from '../InfoTooltip';
import s from '../auth.module.scss';

type IProps = {
  // responseToSuccessfulSumbit: (newEmail: string) => void;
};

export const FormPasswordRestore: FC<IProps> = () => {
  const [isPopupPrivacyPolicyOpen, setIsPopupPrivacyPolicyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleChange, errors, isValid } = useFormAndValidation({
    email: '',
  });

  // const onSubmitSuccess = () => {
  //   responseToSuccessfulSumbit(values.email);
  //   resetForm();
  // };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    resizeInputFont(e);
    handleChange(e);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // mutateRestoreData({ email: values.email });
  };

  return (
    <>
      <form className={s.form} method="POST" onSubmit={handleSubmit}>
        <fieldset className={s.fieldset}>
          <div className={s.inputContainer}>
            <input
              className={s.input}
              aria-label="Input email"
              value={values.email}
              onChange={onInputChange}
              name="email"
              type="email"
              placeholder="Email"
              minLength={MIN_LENGTH_EMAIL}
              maxLength={MAX_LENGTH_EMAIL}
              required
            />
            <div className={s.textContainer}>
              <span className={cl(s.textNumber, { [s.textNumberError]: errors.email })}>01</span>
              <span className={cl(s.textClue, { [s.textClueError]: errors.email })}>Email</span>
            </div>
            <div className={cl(s.inputErrorWrap, { [s.inputErrorWrapVisible]: errors.email })}>
              <span className={cl(s.inputError)}>{errors.email}</span>
            </div>
            <InfoTooltip content={EMAIL_HINT_TEXT}>
              <QuestionIcon className={s.hintIcon} />
            </InfoTooltip>
          </div>
        </fieldset>

        <div className={s.pwdResetLinkPosition} />

        <RoundButton
          className={s.button}
          type="submit"
          theme="white"
          text={`Сменить\nпароль`}
          disabled={!isValid || isEmpty() || isLoading}
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
