import cl from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CrossIcon } from '../../ui/icons';
import s from './StagePopupPortal.module.scss';

type StagePopupPortalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  stageElRect: DOMRect;
};

type PopupPositionState = {
  top: number | undefined;
  left: number | undefined;
};

const calculatePopupLeftPosition = (stageRect: DOMRect, popupWidth: number) => {
  const isTooCloseToLeftEdge = stageRect.left - popupWidth < 0;
  const isTooCloseToRightEdge = stageRect.right + popupWidth > window.innerWidth;

  if (isTooCloseToLeftEdge && !isTooCloseToRightEdge) {
    return stageRect.right; // show from right side of stage el
  }
  if (isTooCloseToRightEdge && !isTooCloseToLeftEdge) {
    return stageRect.left - popupWidth; // show from left side of stage el
  }
  if (isTooCloseToLeftEdge && isTooCloseToRightEdge && window.innerWidth <= 768) {
    return window.innerWidth / 2 - popupWidth / 2; // show in center of stagesWrapper
  }
  return stageRect.right; // show from right side of stage el
};

const StagePopupPortal: React.FC<StagePopupPortalProps> = ({
  stageElRect,
  onClose,
  isOpen,
  children,
}) => {
  const popupRoot = document.getElementById('root');
  const [popupPosition, setPopupPosition] = useState<PopupPositionState>({
    top: undefined,
    left: undefined,
  });

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popup = popupRef.current;
    if (stageElRect && popup) {
      const popupLeft = calculatePopupLeftPosition(stageElRect, popup.clientWidth);

      setPopupPosition({ top: stageElRect.top, left: popupLeft });
    }
  }, []);

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

  if (!popupRoot || !isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={popupRef}
      id="projectPopup"
      className={cl(s.popup, {
        [s.popup_visible]:
          isOpen &&
          popupPosition.top &&
          popupPosition.top > 0 &&
          popupPosition.left &&
          popupPosition.left > 0,
      })}
      style={{ top: popupPosition.top, left: popupPosition.left }}>
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

export default StagePopupPortal;
