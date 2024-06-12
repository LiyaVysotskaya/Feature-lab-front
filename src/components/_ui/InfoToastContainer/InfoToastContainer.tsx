import { FC } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CrossIcon } from '../icons';
import s from './InfoToastContainer.module.scss';

type CloseButtonProps = {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
};

const ToastCloseButton: FC<CloseButtonProps> = ({ closeToast }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    closeToast(e);
  };

  return (
    <button type="button" onClick={handleClick}>
      <CrossIcon />
    </button>
  );
};

export const InfoToastContainer = (infoText: string) => {
  toast(infoText, {
    className: s.infoToast,
    bodyClassName: s.infoToastBody,
    position: 'bottom-center',
    autoClose: 2500,
    closeOnClick: false,
    closeButton: ToastCloseButton,
  });
};
