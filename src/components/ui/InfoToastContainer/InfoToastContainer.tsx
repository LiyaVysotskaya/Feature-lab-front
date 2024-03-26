import { useEffect } from 'react';
import { CloseButtonProps, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CrossIcon } from '../icons';
import s from './InfoToastContainer.module.scss';

const ToastCloseButton: React.FC<CloseButtonProps> = ({ closeToast }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    closeToast(e);
  };

  return (
    <button type="button" onClick={handleClick}>
      <CrossIcon />
    </button>
  );
};

export const CookiesToastContainer = (infoText: string) => {
  useEffect(() => {
    toast(infoText, {
      className: s.infoToast,
      bodyClassName: s.infoToastBody,
      position: 'bottom-center',
      autoClose: false,
      closeOnClick: false,
      closeButton: ToastCloseButton,
    });
  }, []);

  return <ToastContainer className={s.toastContainer} />;
};
