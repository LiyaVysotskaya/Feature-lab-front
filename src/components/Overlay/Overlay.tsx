import cl from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import s from './Overlay.module.scss';

type IOverlayProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const Overlay: React.FC<IOverlayProps> = ({ onClose, isOpen, children }) => {
  const popupRoot = document.getElementById('root');
  React.useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  if (!popupRoot) return null;
  return ReactDOM.createPortal(
    <div className={cl(s.overlay, { [s.overlayOpen]: isOpen })}>{children}</div>,
    popupRoot,
  );
};

export default Overlay;
