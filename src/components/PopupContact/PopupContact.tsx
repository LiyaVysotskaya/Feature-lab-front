import { FC, FormEvent, useState } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Overlay from '../Overlay/Overlay';
import { FormContact } from './FormContact/FormContact';
import s from './PopupContact.module.scss';
import { CrossInCircleIcon } from '../ui/icons';

type IPopupProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const PopupContact: FC<IPopupProps> = ({ onClose, isOpen }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        <div className={s.popup}>
          <h2 className={s.popupTitle}>Свяжитесь с нами</h2>
          <button
            className={s.closeButton}
            type="button"
            aria-label="Close popup"
            onClick={onClose}>
            <CrossInCircleIcon />
          </button>
          <FormContact
            handleChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            values={values}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Overlay>
  ) : (
    <div />
  );
};
