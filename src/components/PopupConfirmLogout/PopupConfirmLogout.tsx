import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import s from './PopupConfirmLogout.module.scss';
import { CrossIcon } from '../ui/icons';
import { ROUTE_HOME } from '../../constants/routesConstants';
import useAuth from '../../hooks/useAuth';

type IPopupProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const PopupConfirmLogout: FC<IPopupProps> = ({ onClose, isOpen }) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  return isOpen ? (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <div className={s.popup}>
        <h2 className={s.popupTitle}>Вы уверены, что хотите выйти из личного кабинета?</h2>
        <button
          type="button"
          className={s.button}
          onClick={() => {
            navigate(ROUTE_HOME);
            signOut();
          }}>
          Да
        </button>
        <span>/</span>
        <button type="button" className={s.button} onClick={onClose}>
          Нет
        </button>
        <button className={s.closeButton} type="button" aria-label="Close popup" onClick={onClose}>
          <CrossIcon />
        </button>
      </div>
    </Overlay>
  ) : (
    <div />
  );
};
