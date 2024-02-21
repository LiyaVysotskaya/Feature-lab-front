import cl from 'classnames';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import s from './PopupPrivacyPolicyPortal.module.scss';

type PopupPrivacyPolicyPortalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const PopupPrivacyPolicyPortal: FC<PopupPrivacyPolicyPortalProps> = ({
  onClose,
  isOpen,
  children,
}) => {
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

export default PopupPrivacyPolicyPortal;
