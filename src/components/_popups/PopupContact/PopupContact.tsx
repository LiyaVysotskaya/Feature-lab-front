import { useAtom } from 'jotai';
import { FC } from 'react';
import { isPopupContactOpenAtom } from '../../../atoms/popupAtoms';
import { PopupContactForm } from '../../_contact-forms/PopupContactForm/PopupContactForm';
import { CrossInCircleIcon } from '../../_ui/icons';
import { Overlay } from '../Overlay/Overlay';
import s from './PopupContact.module.scss';

export const PopupContact: FC = () => {
  const [isOpen, setIsOpen] = useAtom(isPopupContactOpenAtom);

  return isOpen ? (
    <Overlay onClose={() => setIsOpen(false)} isOpen={isOpen}>
      <div className={s.popup}>
        <h2 className={s.popupTitle}>Свяжитесь с нами</h2>
        <button
          className={s.closeButton}
          type="button"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}>
          <CrossInCircleIcon />
        </button>
        <PopupContactForm />
      </div>
    </Overlay>
  ) : (
    <div />
  );
};
