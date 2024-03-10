import cl from 'classnames';
import React, { FC, useEffect } from 'react';
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
  useEffect(() => {
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

  // Add class to body to disable scrollbar when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(s.bodyNoScroll);
    } else {
      document.body.classList.remove(s.bodyNoScroll);
    }
  }, [isOpen]);

  if (!popupRoot) return null;
  return ReactDOM.createPortal(
    <div className={cl(s.overlay, { [s.overlayOpen]: isOpen })}>{children}</div>,
    popupRoot,
  );
};

export default PopupPrivacyPolicyPortal;
