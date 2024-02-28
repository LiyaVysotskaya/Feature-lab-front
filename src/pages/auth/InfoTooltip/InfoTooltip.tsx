import cl from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import s from './InfoTooltip.module.scss';
import { CrossIcon } from '../../../components/ui/icons/CrossIcon/CrossIcon';

type IInfoTooltip = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

export const InfoTooltip: React.FC<IInfoTooltip> = (onClose, isOpen, children) => {
  const popupRoot = document.getElementById('root');

  const popupRef = React.useRef<HTMLDivElement>(null);

  if (!popupRoot) return null;
  return ReactDOM.createPortal(
    <div ref={popupRef} id="infoPopup" className={(s.popup, s.popup_visible)}>
      <div className={s.popupContent}>
        {children}
        <button type="button" className={s.popupCloseBtn} onClick={() => onClose()}>
          <CrossIcon />
        </button>
      </div>
    </div>,
    popupRoot,
  );
};
