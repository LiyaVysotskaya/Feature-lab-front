import { useEffect } from 'react';
import { CloseButtonProps, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CrossIcon } from '../icons';
import s from './CookiesToastContainer.module.scss';

const ToastCloseButton: React.FC<CloseButtonProps> = ({ closeToast }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.setItem('cookiesAccepted', 'true');
    closeToast(e);
  };

  return (
    <button type="button" onClick={handleClick}>
      <CrossIcon />
    </button>
  );
};

export const CookiesToastContainer = () => {
  useEffect(() => {
    // Use local storage to track if the user has accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
      // Display a cookie notification using the react-toastify library
      toast('Мы используем куки для улучшения работы сайта', {
        className: s.cookieToast, // Assuming s is your styles module
        bodyClassName: s.cookieToastBody,
        position: 'bottom-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: ToastCloseButton,
      });
    }
  }, []);

  return <ToastContainer className={s.toastContainer} />;
};
