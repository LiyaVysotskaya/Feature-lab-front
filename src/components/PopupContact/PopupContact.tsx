import { FC } from 'react';
import Overlay from '../Overlay/Overlay';
import { FormContact } from './FormContact/FormContact';
import s from './PopupContact.module.scss';
import { CrossInCircleIcon } from '../ui/icons';

type IPopupProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const PopupContact: FC<IPopupProps> = ({ onClose, isOpen }) => {
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
          <FormContact />
        </div>
      </div>
    </Overlay>
  ) : (
    <div />
  );
};
