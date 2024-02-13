import cl from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CrossIcon } from '../../ui/icons';
import s from './StagePopupPortal.module.scss';

type StagePopupPortalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  stageEl: HTMLDivElement;
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
  stageEl,
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

  // handle touch listener on mobile devices
  useEffect(() => {
    const handleOutsideClick = (e: TouchEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        !stageEl.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('touchend', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('touchend', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // calculate popup initial position
  useEffect(() => {
    const popup = popupRef.current;
    const stageElRect = stageEl.getBoundingClientRect();
    if (stageElRect && popup) {
      const popupLeft = calculatePopupLeftPosition(stageElRect, popup.clientWidth);

      setPopupPosition({ top: stageElRect.top, left: popupLeft });
    }
  }, []);

  // ESC key event listener
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
