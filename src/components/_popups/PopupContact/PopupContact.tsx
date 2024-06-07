import { FC } from 'react';
import { CrossInCircleIcon } from '../../_ui/icons';
import { Overlay } from '../Overlay/Overlay';
import { PopupContactForm } from '../../_contact-forms/PopupContactForm/PopupContactForm';
import s from './PopupContact.module.scss';

type IPopupProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const PopupContact: FC<IPopupProps> = ({ onClose, isOpen }) => {
  return isOpen ? (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <div className={s.popup}>
        <h2 className={s.popupTitle}>Свяжитесь с нами</h2>
        <button className={s.closeButton} type="button" aria-label="Close popup" onClick={onClose}>
          <CrossInCircleIcon />
        </button>
        <PopupContactForm />
      </div>
    </Overlay>
  ) : (
    <div />
  );
};
