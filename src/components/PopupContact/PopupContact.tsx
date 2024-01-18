import React, { FormEvent } from 'react';
import s from './PopupContact.module.scss';
import Overlay from '../Overlay/Overlay';
import { FormContact } from './FormContact/FormContact';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

type IPopupProps = {
  onClose: () => void;
  isOpen: boolean;
  openPrivacyPolicyPopup: () => void;
};

export const PopupContact: React.FC<IPopupProps> = ({
  onClose,
  isOpen,
  openPrivacyPolicyPopup,
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({
    name: '',
    email: '',
    project: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    resetForm({
      name: '',
      email: '',
      project: '',
    });
  };

  return isOpen ? (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <div className={s.popupContainer}>
        <h2 className={s.popupTitle}>Свяжитесь с нами</h2>
        <button
          className={s.closeButton}
          type="button"
          aria-label="Close popup"
          onClick={onClose}
        />
        <FormContact
          openPrivacyPolicyPopup={openPrivacyPolicyPopup}
          handleChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
          values={values}
          isLoading={isLoading}
        />
      </div>
    </Overlay>
  ) : (
    <div />
  );
};
