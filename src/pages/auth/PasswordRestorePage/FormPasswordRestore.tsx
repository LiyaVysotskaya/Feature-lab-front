import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { FormInput } from '../../../components/FormInput/FormInput';
import { PopupPrivacyPolicy } from '../../../components/PopupPrivacyPolicy/PopupPrivacyPolicy';
import { RoundButton } from '../../../components/ui/RoundButton/RoundButton';
import { MAX_LENGTH_EMAIL, MIN_LENGTH_EMAIL } from '../../../constants/formConstants';
import { EMAIL_HINT_TEXT } from '../../../constants/tooltipContent';
import { resizeInputFont } from '../../../utils/formHelpers';
import { useFormAndValidation } from '../../../utils/hooks/useFormAndValidation';
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
          <FormInput
            name="email"
            type="email"
            placeHolder="Email"
            value={values.email}
            onChange={onInputChange}
            ariaLabel="Input email"
            minLength={MIN_LENGTH_EMAIL}
            maxLength={MAX_LENGTH_EMAIL}
            error={errors.email}
            labelNum="01"
            labelText="Email"
            hintText={EMAIL_HINT_TEXT}
          />
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
